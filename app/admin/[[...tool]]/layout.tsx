import type { Metadata } from "next";

// Sanity 后台不应被搜索引擎收录
export const metadata: Metadata = {
  robots: { index: false, follow: false }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
