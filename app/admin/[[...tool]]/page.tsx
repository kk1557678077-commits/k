"use client";

import dynamic from "next/dynamic";

const SanityStudioClient = dynamic(() => import("./SanityStudioClient"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-center text-sm font-medium text-muted">
      Loading Ruilong International CMS...
    </div>
  )
});

export default function AdminPage() {
  return <SanityStudioClient />;
}
