"use client";

import { useState } from "react";

// 页面上唯一可操作的“活件”：选一个业态，看它适合的楼层。数据全部来自楼层规划参考。
const floors = [
  { floor: "3F", text: "健身运动、商务办公、专业服务、综合配套" },
  { floor: "2F", text: "教育培训、休闲娱乐、体验业态、棋牌桌球" },
  { floor: "1F", text: "餐饮、咖啡茶饮、精品零售、生活服务及临街展示型品牌" }
];

const categories: { name: string; floors: string[] }[] = [
  { name: "餐饮美食", floors: ["1F"] },
  { name: "精品零售", floors: ["1F"] },
  { name: "生活配套", floors: ["1F"] },
  { name: "教育培训", floors: ["2F"] },
  { name: "休闲体验", floors: ["2F", "3F"] },
  { name: "商务办公", floors: ["3F"] }
];

const modes = ["品牌入驻", "商业租赁", "联营合作", "办公空间合作", "产业资源合作", "服务商合作"];

export function FloorFinder() {
  const [picked, setPicked] = useState<string | null>(null);
  const match = categories.find((c) => c.name === picked)?.floors ?? [];

  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5" data-reveal>
        <p className="t-body text-[var(--ink)]">选一个业态，看它适合的楼层：</p>
        <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="按业态筛选楼层">
          {categories.map((c) => {
            const on = c.name === picked;
            return (
              <button
                key={c.name}
                type="button"
                aria-pressed={on}
                onClick={() => setPicked(on ? null : c.name)}
                className={`focus-ring t-body min-h-12 px-5 font-semibold transition duration-300 active:scale-[0.97] ${
                  on ? "bg-[var(--ink)] text-[var(--ground)]" : "bg-[var(--ground-2)] text-[var(--ink)] hover:bg-[#d6d3cb]"
                }`}
              >
                {c.name}
              </button>
            );
          })}
        </div>
        <p className="t-small mt-6 max-w-[40ch] text-[var(--ink-soft)]" aria-live="polite">
          {picked ? `${picked}：建议优先了解 ${match.join("、")}。` : "楼层方向仅供参考，具体楼层组合、面积划分和入驻条件以项目实际招商方案及现场沟通为准。"}
        </p>
      </div>

      <div className="lg:col-span-6 lg:col-start-7" data-reveal>
        <table className="t-body w-full border-separate border-spacing-y-0">
          <caption className="sr-only">楼层业态规划参考与合作方式</caption>
          <tbody>
            {floors.map((f) => {
              const lit = !picked || match.includes(f.floor);
              return (
                <tr key={f.floor} className={`transition-opacity duration-500 ${lit ? "opacity-100" : "opacity-30"}`}>
                  <th scope="row" className="w-20 pb-6 pr-6 text-left align-top font-display text-[length:var(--step-lead)] font-bold leading-none">
                    {f.floor}
                  </th>
                  <td className="pb-6 align-top text-[var(--ink)]">{f.text}</td>
                </tr>
              );
            })}
            {modes.map((m, i) => (
              <tr key={m}>
                <th scope="row" className={`w-20 pr-6 text-left align-top font-normal text-[var(--ink-soft)] ${i === 0 ? "pt-10" : "pt-0"}`}>
                  {i === 0 ? "合作" : ""}
                </th>
                <td className={`pb-3 ${i === 0 ? "pt-10" : ""}`}>
                  <a href="#contact" className="group flex items-center justify-between gap-4 text-[var(--ink)]">
                    <span className="rl-link">{m}</span>
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
