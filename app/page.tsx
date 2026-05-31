import { HomeClient } from "./HomeClient";
import { getHomepageContentWithFallback } from "@/sanity/lib/content";

export default async function HomePage() {
  const homepageContent = await getHomepageContentWithFallback();

  return <HomeClient homepageContent={homepageContent} />;
}
