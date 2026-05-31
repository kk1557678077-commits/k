import {
  products as localProducts,
  news as localNews,
  cases as localCases,
  contactInfo as localContactInfo,
  pages,
  type Lang
} from "@/data/content";
import { client, isSanityConfigured } from "./client";
import {
  activeContactInfoQuery,
  activeDownloadItemsQuery,
  activeFaqItemsQuery,
  activeHomepageContentQuery,
  allCasesQuery,
  allNewsQuery,
  allProductsQuery,
  featuredProductsQuery
} from "./queries";

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

type SanityDownloadItem = {
  _id: string;
  title?: string;
  description?: string;
  category?: string;
  fileType?: string;
  fileUrl?: string;
  language?: Lang;
  sortOrder?: number;
};

type SanityFaqItem = {
  _id: string;
  question?: string;
  answer?: string;
  category?: string;
  language?: Lang;
  sortOrder?: number;
};

type SanityContactInfo = {
  companyName?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  wechat?: string;
  address?: string;
  mapEmbedUrl?: string;
  businessHours?: string;
  language?: Lang;
};

type SanityHomepageContent = {
  heroTitle?: string;
  heroSubtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  finalCtaTitle?: string;
  finalCtaSubtitle?: string;
  language?: Lang;
};

export type DisplayProduct = (typeof localProducts)[number] & { cmsLanguage?: Lang };
export type DisplayNews = Record<Lang, Array<[string, string, string?]>>;
export type DisplayCases = Record<Lang, Array<[string, string, string, string]>>;
export type DisplayDownloadItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  fileType: string;
  fileUrl?: string;
  language: Lang;
};
export type DisplayFaqItem = {
  id: string;
  question: string;
  answer: string;
  category: string;
  language: Lang;
};
export type DisplayContactInfo = typeof localContactInfo & {
  companyName: string;
  mapEmbedUrl?: string;
  businessHours?: string;
};
export type DisplayHomepageContent = Record<
  Lang,
  {
    heroTitle: string;
    heroSubtitle: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    finalCtaTitle: string;
    finalCtaSubtitle: string;
  }
>;

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

async function safeFetchOne<T>(query: string): Promise<T | null> {
  if (!isSanityConfigured) return null;

  try {
    return await client.fetch<T | null>(query, {}, { next: { revalidate: 60 } });
  } catch {
    return null;
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

export async function getDownloadsWithFallback(): Promise<DisplayDownloadItem[]> {
  const sanityDownloads = await safeFetch<SanityDownloadItem>(activeDownloadItemsQuery);
  if (sanityDownloads.length) {
    return sanityDownloads.map((item) => ({
      id: item._id,
      title: item.title || "Untitled Download",
      description: item.description || "File will be added after official material is confirmed.",
      category: item.category || "Other",
      fileType: item.fileType || "File",
      fileUrl: item.fileUrl,
      language: item.language || "en"
    }));
  }

  return [
    {
      id: "product-catalogue",
      title: "Product Catalogue",
      description: "File will be added after official material is confirmed.",
      category: "Product Catalogue",
      fileType: "PDF",
      language: "en"
    },
    {
      id: "fabric-specification-sheet",
      title: "Fabric Specification Sheet",
      description: "File will be added after official material is confirmed.",
      category: "Fabric Specification Sheet",
      fileType: "PDF",
      language: "en"
    },
    {
      id: "testing-report-placeholder",
      title: "Testing Report Placeholder",
      description: "File will be added after official material is confirmed.",
      category: "Testing Report Placeholder",
      fileType: "PDF",
      language: "en"
    },
    {
      id: "company-profile-placeholder",
      title: "Company Profile Placeholder",
      description: "File will be added after official material is confirmed.",
      category: "Company Profile",
      fileType: "PDF",
      language: "en"
    },
    {
      id: "product-catalogue-zh",
      title: "产品目录",
      description: "正式资料确认后将添加文件。",
      category: "Product Catalogue",
      fileType: "PDF",
      language: "zh"
    },
    {
      id: "fabric-specification-sheet-zh",
      title: "面料规格表",
      description: "正式资料确认后将添加文件。",
      category: "Fabric Specification Sheet",
      fileType: "PDF",
      language: "zh"
    },
    {
      id: "testing-report-placeholder-zh",
      title: "检测报告占位",
      description: "正式资料确认后将添加文件。",
      category: "Testing Report Placeholder",
      fileType: "PDF",
      language: "zh"
    },
    {
      id: "company-profile-placeholder-zh",
      title: "公司简介占位",
      description: "正式资料确认后将添加文件。",
      category: "Company Profile",
      fileType: "PDF",
      language: "zh"
    }
  ];
}

export async function getFaqWithFallback(): Promise<DisplayFaqItem[]> {
  const sanityFaqs = await safeFetch<SanityFaqItem>(activeFaqItemsQuery);
  if (sanityFaqs.length) {
    return sanityFaqs.map((item) => ({
      id: item._id,
      question: item.question || "Question to be confirmed",
      answer: item.answer || "Answer to be confirmed.",
      category: item.category || "Inquiry",
      language: item.language || "en"
    }));
  }

  return [
    {
      id: "faq-inquiry",
      question: "What information should I include in an inquiry?",
      answer: "Please include fabric type, composition, weight or width, quantity, application, target price, delivery country and sample requirements when available.",
      category: "Inquiry",
      language: "en"
    },
    {
      id: "faq-samples",
      question: "Can I request fabric samples?",
      answer: "Yes. Share the fabric direction, color, handfeel, application and delivery details so we can discuss suitable sample options.",
      category: "Samples",
      language: "en"
    },
    {
      id: "faq-custom",
      question: "Can you support custom fabric development?",
      answer: "Yes. We can help coordinate development communication based on reference samples, target specifications, color, handfeel and end use.",
      category: "Custom Fabric",
      language: "en"
    },
    {
      id: "faq-quality",
      question: "How do you handle quality checks?",
      answer: "Quality check points can be discussed before delivery, including appearance, color, width, weight, packing and agreed specifications.",
      category: "Quality",
      language: "en"
    },
    {
      id: "faq-export",
      question: "Can you support export communication?",
      answer: "Yes. We can support bilingual communication for quotation details, packing notes, delivery timing and export-related coordination.",
      category: "Export Communication",
      language: "en"
    },
    {
      id: "faq-inquiry-zh",
      question: "询盘应包含哪些信息？",
      answer: "建议提供面料类型、成分、克重或门幅、数量、用途、目标价格、交付国家/地区与样品需求。",
      category: "Inquiry",
      language: "zh"
    },
    {
      id: "faq-samples-zh",
      question: "可以申请面料样品吗？",
      answer: "可以。请提供面料方向、颜色、手感、用途与收样信息，便于讨论合适的样品选项。",
      category: "Samples",
      language: "zh"
    },
    {
      id: "faq-custom-zh",
      question: "可以支持定制面料开发吗？",
      answer: "可以。我们可根据参考样、目标规格、颜色、手感与终端用途协助开发沟通。",
      category: "Custom Fabric",
      language: "zh"
    },
    {
      id: "faq-quality-zh",
      question: "质量检查如何处理？",
      answer: "可在交付前沟通布面、颜色、门幅、克重、包装与约定规格等检查要点。",
      category: "Quality",
      language: "zh"
    },
    {
      id: "faq-export-zh",
      question: "可以支持出口沟通吗？",
      answer: "可以。我们可围绕报价细节、包装要求、交付时间与出口相关事项进行中英文沟通。",
      category: "Export Communication",
      language: "zh"
    }
  ];
}

export async function getContactInfoWithFallback(): Promise<DisplayContactInfo> {
  const sanityContact = await safeFetchOne<SanityContactInfo>(activeContactInfoQuery);
  return {
    ...localContactInfo,
    companyName: sanityContact?.companyName || localContactInfo.company,
    company: sanityContact?.companyName || localContactInfo.company,
    email: sanityContact?.email || localContactInfo.email,
    phone: sanityContact?.phone || localContactInfo.phone,
    whatsapp: sanityContact?.whatsapp || localContactInfo.whatsapp,
    wechat: sanityContact?.wechat || localContactInfo.wechat,
    address: sanityContact?.address || localContactInfo.address,
    mapEmbedUrl: sanityContact?.mapEmbedUrl,
    businessHours: sanityContact?.businessHours
  };
}

export async function getHomepageContentWithFallback(): Promise<DisplayHomepageContent> {
  const sanityHomepage = await safeFetch<SanityHomepageContent>(activeHomepageContentQuery);
  const result: DisplayHomepageContent = {
    en: {
      heroTitle: pages.home.en.heroTitle,
      heroSubtitle: pages.home.en.heroSubtitle,
      primaryButtonText: "Get a Quote",
      secondaryButtonText: "Request Samples",
      finalCtaTitle: pages.home.en.finalCtaTitle,
      finalCtaSubtitle: pages.home.en.finalCtaText
    },
    zh: {
      heroTitle: pages.home.zh.heroTitle,
      heroSubtitle: pages.home.zh.heroSubtitle,
      primaryButtonText: "获取报价",
      secondaryButtonText: "申请样品",
      finalCtaTitle: pages.home.zh.finalCtaTitle,
      finalCtaSubtitle: pages.home.zh.finalCtaText
    }
  };

  sanityHomepage.forEach((item) => {
    const lang = item.language || "en";
    result[lang] = {
      heroTitle: item.heroTitle || result[lang].heroTitle,
      heroSubtitle: item.heroSubtitle || result[lang].heroSubtitle,
      primaryButtonText: item.primaryButtonText || result[lang].primaryButtonText,
      secondaryButtonText: item.secondaryButtonText || result[lang].secondaryButtonText,
      finalCtaTitle: item.finalCtaTitle || result[lang].finalCtaTitle,
      finalCtaSubtitle: item.finalCtaSubtitle || result[lang].finalCtaSubtitle
    };
  });

  return result;
}
