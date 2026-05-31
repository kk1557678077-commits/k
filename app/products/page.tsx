import { ProductsClient } from "./ProductsClient";
import { getProductsWithFallback } from "@/sanity/lib/content";

export default async function ProductsPage() {
  const products = await getProductsWithFallback();

  return <ProductsClient products={products} />;
}
