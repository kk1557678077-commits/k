"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// 首页动效：首屏入场、分区滚动浮现、调研数字滚动计数、主视觉缓慢推近。
// 初始状态由 GSAP 设置，未加载脚本或开启“减少动态效果”时内容照常显示。
export function HomeMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-hero-item]", {
          y: 28,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.09,
          delay: 0.1
        });

        gsap.fromTo(
          "[data-hero-media]",
          { scale: 1.08 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: true }
          }
        );

        gsap.set("[data-reveal]", { autoAlpha: 0, y: 36 });
        ScrollTrigger.batch("[data-reveal]", {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.08, overwrite: true })
        });

        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const target = Number(el.dataset.count);
          const decimals = Number(el.dataset.decimals || 0);
          const counter = { value: 0 };
          gsap.to(counter, {
            value: target,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
            onUpdate: () => {
              el.textContent = counter.value.toFixed(decimals);
            }
          });
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return <div ref={root}>{children}</div>;
}
