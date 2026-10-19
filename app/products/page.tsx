import { pageSeo } from "@/data/seo";
import { ProductsClient } from "./ProductsClient";
import { getProductsWithFallback } from "@/sanity/lib/content";

export const metadata = pageSeo("/products");

export default async function ProductsPage() {
  const products = await getProductsWithFallback();

  return <ProductsClient products={products} />;
}
