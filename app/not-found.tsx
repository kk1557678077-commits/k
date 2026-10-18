import Link from "next/link";

export default function NotFound() {
  return (
    <section className="rl flex min-h-[70svh] items-center">
      <div className="rl-frame py-24">
        <h1 className="t-head max-w-[12em]">这个页面不存在</h1>
        <p className="t-body mt-6 max-w-[32em] text-[var(--ink)]">
          链接可能已经变更。可以回到首页查看瑞龙国际的项目与楼层业态，或直接拨打招商热线{" "}
          <a href="tel:13929936713" className="tabular font-semibold underline underline-offset-4">
            13929936713
          </a>
          。
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="rl-btn rl-btn-ink focus-ring">
            回到首页
          </Link>
          <Link href="/#contact" className="rl-btn rl-btn-accent focus-ring">
            预约看场
          </Link>
        </div>
      </div>
    </section>
  );
}
