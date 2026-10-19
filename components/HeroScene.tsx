"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Magnet from "@/components/reactbits/Magnet";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HOTLINE = "13929936713";

// 钉住的“瑞龙国际”下，实景竖幅依次翻入；每张照片带一块取自照片本身的平涂底色
const portraits = [
  { src: "/images/ruilong-international/hero-exterior-new-01.jpg", alt: "瑞龙国际写字楼与岭南风格商业外立面", pos: "38% 50%", ground: "#dfe4e8" },
  { src: "/images/ruilong-international/streetfront-new-01.jpg", alt: "瑞龙国际写字楼与临街商业", pos: "30% 50%", ground: "#e2e2df" },
  { src: "/images/ruilong-international/office-lobby-new-01.jpg", alt: "瑞龙国际大厦入口大堂", pos: "52% 50%", ground: "#e9e2d6" },
  { src: "/images/ruilong-international/courtyard-new-01.jpg", alt: "瑞龙国际商业内街与教育业态", pos: "48% 50%", ground: "#dde5ec" },
  { src: "/images/ruilong-international/storefront-02.jpg", alt: "瑞龙国际商业楼的铜色回纹窗花与招商中心", pos: "74% 50%", ground: "#e6e3dc" }
];

// 电脑宽屏两侧的实景，错落放置，让首屏不只中间一张图
const flanks = [
  { src: "/images/ruilong-international/streetfront-new-02.jpg", alt: "瑞龙国际商业楼的铜色回纹窗花与青砖立柱", pos: "12% 50%", side: "left" },
  { src: "/images/ruilong-international/overview-new-01.jpg", alt: "瑞龙国际商业楼外景", pos: "20% 25%", side: "right" }
] as const;

export function HeroScene() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 入场：名字自下而上立起，第一张照片从纵深处翻正
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from("[data-mono-char]", { yPercent: 105, rotationX: -70, transformOrigin: "50% 100%", duration: 1.2, stagger: 0.08 })
          .from("[data-portrait='0']", { rotationX: 22, transformPerspective: 1400, y: 80, autoAlpha: 0, duration: 1.4 }, 0.15)
          .from("[data-hero-foot]", { y: 24, autoAlpha: 0, duration: 0.9, stagger: 0.08 }, 0.6)
          .from(
            "[data-flank-img]",
            { y: 120, rotationY: (i: number) => (i === 0 ? 28 : -28), transformPerspective: 1200, autoAlpha: 0, duration: 1.5, stagger: 0.12 },
            0.35
          );

        // 钉住的故事：每滚过一屏，下一张照片从底部擦入并翻正，底色随之换成该照片的颜色
        const stage = root.current?.querySelector<HTMLElement>("[data-stage]");
        const story = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: root.current,
            start: "top top+=80",
            end: () => `+=${window.innerHeight * 0.75 * (portraits.length - 1)}`,
            pin: stage,
            scrub: 0.6
          }
        });
        portraits.slice(1).forEach((p, i) => {
          story
            .fromTo(
              `[data-portrait='${i + 1}']`,
              { autoAlpha: 1, clipPath: "inset(100% 0% 0% 0%)", rotationX: 16, transformPerspective: 1400, y: 60, scale: 1.06 },
              { clipPath: "inset(0% 0% 0% 0%)", rotationX: 0, y: 0, scale: 1, duration: 1 },
              i
            )
            .to(`[data-portrait='${i}']`, { scale: 0.92, y: -30, duration: 1 }, i)
            .to(stage ?? {}, { backgroundColor: p.ground, duration: 1 }, i);
        });
        // 两侧照片以不同速度上浮，和中间的翻页拉开纵深
        story
          .to("[data-flank='left']", { yPercent: -18, ease: "none", duration: portraits.length - 1 }, 0)
          .to("[data-flank='right']", { yPercent: -34, ease: "none", duration: portraits.length - 1 }, 0);
      });

      // 桌面：照片组随鼠标轻微倾斜，名字反向平移，形成纵深
      mm.add("(prefers-reduced-motion: no-preference) and (pointer: fine) and (min-width: 1024px)", () => {
        const section = root.current;
        if (!section) return;
        const ry = gsap.quickTo("[data-portrait-stack]", "rotationY", { duration: 1, ease: "power3.out" });
        const rx = gsap.quickTo("[data-portrait-stack]", "rotationX", { duration: 1, ease: "power3.out" });
        const tx = gsap.quickTo("[data-mono]", "x", { duration: 1.4, ease: "power3.out" });
        const fx = gsap.quickTo("[data-flank-img]", "x", { duration: 1.2, ease: "power3.out" });
        const fry = gsap.quickTo("[data-flank-img]", "rotationY", { duration: 1.2, ease: "power3.out" });
        const onMove = (e: PointerEvent) => {
          const r = section.getBoundingClientRect();
          const nx = (e.clientX - r.left) / r.width - 0.5;
          const ny = (e.clientY - Math.max(r.top, 0)) / window.innerHeight - 0.5;
          ry(nx * 10);
          rx(-ny * 6);
          tx(nx * -24);
          fx(nx * 44);
          fry(nx * 12);
        };
        const onLeave = () => {
          ry(0);
          rx(0);
          tx(0);
          fx(0);
          fry(0);
        };
        section.addEventListener("pointermove", onMove);
        section.addEventListener("pointerleave", onLeave);
        return () => {
          section.removeEventListener("pointermove", onMove);
          section.removeEventListener("pointerleave", onLeave);
        };
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} data-hero className="relative bg-[var(--ground)]">
      <div
        data-stage
        className="relative h-[calc(100svh-5rem)] min-h-[34rem] overflow-hidden"
        style={{ backgroundColor: portraits[0].ground }}
      >
        {/* 电脑宽屏：两侧错落的实景 */}
        {flanks.map((f) => (
          <div
            key={f.src}
            data-flank={f.side}
            className={`absolute hidden aspect-[3/4] w-[min(20vw,24rem)] lg:block ${
              f.side === "left"
                ? "left-[calc(50%-min(37vw,34rem)/2-2.5vw-min(20vw,24rem))] top-[22vh]"
                : "left-[calc(50%+min(37vw,34rem)/2+2.5vw)] top-[30vh]"
            }`}
          >
            <div data-flank-img className="relative h-full w-full overflow-hidden">
              <Image src={f.src} alt={f.alt} fill sizes="20vw" className="object-cover" style={{ objectPosition: f.pos }} />
            </div>
          </div>
        ))}

        {/* 竖幅照片组 */}
        <div className="absolute inset-x-4 top-[12.5vw] aspect-[2/3] [perspective:1400px] sm:inset-x-auto sm:bottom-0 sm:left-1/2 sm:top-[6vh] sm:aspect-auto sm:w-[min(37vw,34rem)] sm:-translate-x-1/2">
          <div data-portrait-stack className="relative h-full w-full">
            {portraits.map((p, i) => (
              <div key={p.src} data-portrait={i} className={`absolute inset-0 overflow-hidden ${i > 0 ? "invisible" : ""}`}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 640px) 37vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: p.pos }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 名字：钉在照片上方，横贯画面 */}
        <h1
          data-mono
          className="t-mono pointer-events-none absolute inset-x-0 top-3 z-10 flex justify-center overflow-hidden pb-[0.06em] text-[22vw] text-[var(--ink)] [perspective:800px] sm:top-[3vh] sm:text-[length:var(--step-mono)]"
        >
          {Array.from("瑞龙国际").map((c, i) => (
            <span key={i} data-mono-char className="inline-block">
              {c}
            </span>
          ))}
          <span className="sr-only">：佛山西樵商业综合体招商</span>
        </h1>

        {/* 左下：一句话；右下：唯一的主操作 */}
        <div className="rl-frame absolute inset-x-0 bottom-20 z-10 flex items-end justify-between gap-6 sm:bottom-8">
          <div data-hero-foot className="max-w-[26ch] bg-[var(--ground)] px-4 py-3 sm:bg-transparent sm:p-0">
            <p className="t-body font-semibold text-[var(--ink)]">
              佛山西樵碧霞路10号，4.2万㎡商业与写字楼综合体，面向品牌入驻、商业租赁与商务办公开放招商。
            </p>
            <a href={`tel:${HOTLINE}`} className="rl-link t-small mt-2 inline-block font-semibold text-[var(--ink)]">
              招商热线 <span className="tabular">{HOTLINE}</span>
            </a>
          </div>
          <div data-hero-foot className="hidden sm:block">
            <Magnet padding={80} magnetStrength={3} tilt={8} maxOffset={18}>
              <a href="#contact" className="rl-btn rl-btn-accent focus-ring">
                预约看场
              </a>
            </Magnet>
          </div>
        </div>
      </div>
    </section>
  );
}
