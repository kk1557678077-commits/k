import { pageSeo } from "@/data/seo";
import { DownloadsClient } from "./DownloadsClient";
import { getDownloadsWithFallback } from "@/sanity/lib/content";

export const metadata = pageSeo("/downloads");

export default async function DownloadsPage() {
  const downloads = await getDownloadsWithFallback();

  return <DownloadsClient downloads={downloads} />;
}
