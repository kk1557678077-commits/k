import { pageSeo } from "@/data/seo";
import { NewsClient } from "./NewsClient";
import { getNewsWithFallback } from "@/sanity/lib/content";

export const metadata = pageSeo("/news");

export default async function NewsPage() {
  const news = await getNewsWithFallback();

  return <NewsClient news={news} />;
}
