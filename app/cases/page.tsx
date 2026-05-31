import { CasesClient } from "./CasesClient";
import { getCasesWithFallback } from "@/sanity/lib/content";

export default async function CasesPage() {
  const cases = await getCasesWithFallback();

  return <CasesClient cases={cases} />;
}
