import { HomeClient } from "../HomeClient";
import { getHomepageContentWithFallback } from "@/sanity/lib/content";

export default async function TextileHomePage() {
  const homepageContent = await getHomepageContentWithFallback();

  return <HomeClient homepageContent={homepageContent} />;
}
