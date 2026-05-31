import { createClient } from "next-sanity";

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const isSanityConfigured = Boolean(
  sanityProjectId && sanityProjectId !== "your_project_id" && sanityProjectId !== "dummyprojectid" && sanityDataset
);

export const client = createClient({
  projectId: sanityProjectId || "drqtm4iz",
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: true,
  perspective: "published"
});
