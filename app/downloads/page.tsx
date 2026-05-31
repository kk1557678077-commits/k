import { DownloadsClient } from "./DownloadsClient";
import { getDownloadsWithFallback } from "@/sanity/lib/content";

export default async function DownloadsPage() {
  const downloads = await getDownloadsWithFallback();

  return <DownloadsClient downloads={downloads} />;
}
