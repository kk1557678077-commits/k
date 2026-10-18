"use client";

import { useState } from "react";

type Group = { title: string; summary: string; items: [string, string][] };

// 一字号名录：三栏名字，悬停时在右侧固定位置显示一句说明；手机上每组以一句总结收尾
export function NameIndex({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState<string>(groups[0].items[0][1]);

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      {groups.map((g, gi) => (
        <div key={g.title} className={`lg:col-span-3 ${gi === 0 ? "" : ""}`} data-reveal>
          <p className="t-body font-semibold text-[var(--ink)]">{g.title}</p>
          <ul className="t-body mt-6 grid gap-1.5 leading-tight">
            {g.items.map(([name, desc]) => (
              <li key={name}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(desc)}
                  onFocus={() => setActive(desc)}
                  className="focus-ring text-left text-[var(--ink-soft)] transition-colors duration-300 hover:text-[var(--ink)] focus:text-[var(--ink)]"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
          <p className="t-small mt-5 max-w-[34ch] text-[var(--ink-soft)] lg:hidden">{g.summary}</p>
        </div>
      ))}
      <p className="t-body hidden text-[var(--ink)] lg:col-span-3 lg:block" aria-live="polite" data-reveal>
        {active}
      </p>
    </div>
  );
}
