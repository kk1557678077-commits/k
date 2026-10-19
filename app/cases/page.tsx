import { pageSeo } from "@/data/seo";
import { CasesClient } from "./CasesClient";
import { getCasesWithFallback } from "@/sanity/lib/content";

export const metadata = pageSeo("/cases");

export default async function CasesPage() {
  const cases = await getCasesWithFallback();

  return <CasesClient cases={cases} />;
}
