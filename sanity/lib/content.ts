import { products as localProducts, news as localNews, cases as localCases, type Lang } from "@/data/content";
import { client, isSanityConfigured } from "./client";
import { allCasesQuery, allNewsQuery, allProductsQuery, featuredProductsQuery } from "./queries";

type SanityProduct = {
  _id: string;
  title?: string;
  slug?: string;
  category?: string;
  composition?: string;
  width?: string;
  weight?: string;
  application?: string;
  moq?: string;
  leadTime?: string;
  features?: string[];
  tags?: string[];
  language?: Lang;
  sortOrder?: number;
  isFeatured?: boolean;
};

type SanityNews = {
  _id: string;
  title?: string;
  excerpt?: string;
  category?: string;
  publishedAt?: string;
  language?: Lang;
};

type SanityCase = {
  _id: string;
  title?: string;
  challenge?: string;
  solution?: string;
  result?: string;
  category?: string;
  language?: Lang;
};

export type DisplayProduct = (typeof localProducts)[number] & { cmsLanguage?: Lang };
export type DisplayNews = Record<Lang, Array<[string, string, string?]>>;
export type DisplayCases = Record<Lang, Array<[string, string, string, string]>>;

function productLanguageTemplate(product: SanityProduct, lang: Lang) {
  const fallbackText = lang === "en" ? "To be confirmed by project" : "按项目确认";

  return {
    name: product.title || (lang === "en" ? "Untitled Product" : "未命名产品"),
    category: product.category || (lang === "en" ? "Custom Fabric" : "定制面料"),
    imageLabel: product.title || (lang === "en" ? "Product image placeholder" : "产品图片占位"),
    description:
      lang === "en"
        ? "CMS product entry. Final specifications are confirmed by sample, quotation and project requirements."
        : "CMS 产品内容。最终规格以样品、报价与项目需求确认为准。",
    composition: product.composition || fallbackText,
    width: product.width || fallbackText,
    weight: product.weight || fallbackText,
    application: product.application || fallbackText,
    moq: product.moq || fallbackText,
    leadTime: product.leadTime || fallbackText,
    features: product.features?.length ? product.features : [fallbackText],
    tags: product.tags?.length ? product.tags : [product.category || fallbackText]
  };
}

function mapSanityProduct(product: SanityProduct): DisplayProduct {
  const lang = product.language || "en";
  const base = localProducts[0];
  const translated = productLanguageTemplate(product, lang);

  return {
    ...base,
    id: product.slug || product._id,
    cmsLanguage: lang,
    imagePath: `/images/products/${product.slug || product._id}.jpg`,
    inquiryType: product.category === "Custom Fabric" ? "Custom Fabric" : "Get a Quote",
    placeholderTone: product.category === "Denim Fabric" ? "denim" : product.category === "Functional Fabric" ? "navy" : "slate",
    en: lang === "en" ? translated : productLanguageTemplate(product, "en"),
    zh: lang === "zh" ? translated : productLanguageTemplate(product, "zh"),
    filters: {
      category: product.category || "Custom Fabric",
      function: product.category === "Functional Fabric" ? "Water Resistant" : product.category === "Custom Fabric" ? "Custom" : "Durable",
      application: product.application?.includes("Outdoor") ? "Outdoor" : product.application?.includes("Workwear") ? "Workwear" : product.category === "Custom Fabric" ? "OEM/ODM" : "Garment"
    }
  };
}

async function safeFetch<T>(query: string): Promise<T[]> {
  if (!isSanityConfigured) return [];

  try {
    return await client.fetch<T[]>(query, {}, { next: { revalidate: 60 } });
  } catch {
    return [];
  }
}

export async function getProductsWithFallback() {
  const sanityProducts = await safeFetch<SanityProduct>(allProductsQuery);
  return sanityProducts.length > 0 ? sanityProducts.map(mapSanityProduct) : localProducts;
}

export async function getFeaturedProductsWithFallback() {
  const sanityProducts = await safeFetch<SanityProduct>(featuredProductsQuery);
  return sanityProducts.length > 0 ? sanityProducts.map(mapSanityProduct) : localProducts.slice(0, 4);
}

export async function getNewsWithFallback(): Promise<DisplayNews> {
  const sanityNews = await safeFetch<SanityNews>(allNewsQuery);
  if (!sanityNews.length) return localNews as DisplayNews;

  const enNews: Array<[string, string, string?]> = sanityNews
      .filter((item) => (item.language || "en") === "en")
      .map((item): [string, string, string?] => [item.title || "Untitled News", item.excerpt || "", item.publishedAt || ""]);
  const zhNews: Array<[string, string, string?]> = sanityNews
      .filter((item) => item.language === "zh")
      .map((item): [string, string, string?] => [item.title || "未命名资讯", item.excerpt || "", item.publishedAt || ""]);

  return { en: enNews, zh: zhNews };
}

export async function getCasesWithFallback(): Promise<DisplayCases> {
  const sanityCases = await safeFetch<SanityCase>(allCasesQuery);
  if (!sanityCases.length) return localCases as DisplayCases;

  const enCases: Array<[string, string, string, string]> = sanityCases
      .filter((item) => (item.language || "en") === "en")
      .map((item): [string, string, string, string] => [
        item.title || "Untitled Case",
        item.challenge || "Challenge: To be confirmed.",
        item.solution || "Solution: To be confirmed.",
        item.result || "Result: To be confirmed."
      ]);
  const zhCases: Array<[string, string, string, string]> = sanityCases
      .filter((item) => item.language === "zh")
      .map((item): [string, string, string, string] => [
        item.title || "未命名案例",
        item.challenge || "挑战：待确认。",
        item.solution || "方案：待确认。",
        item.result || "结果：待确认。"
      ]);

  return { en: enCases, zh: zhCases };
}
