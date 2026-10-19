import { pageSeo } from "@/data/seo";

// 页面本身是客户端组件，canonical 放在这里声明
export const metadata = pageSeo("/privacy-policy");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
