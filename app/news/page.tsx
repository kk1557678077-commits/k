import { NewsClient } from "./NewsClient";
import { getNewsWithFallback } from "@/sanity/lib/content";

export default async function NewsPage() {
  const news = await getNewsWithFallback();

  return <NewsClient news={news} />;
}
