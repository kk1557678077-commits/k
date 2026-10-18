"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown, ArrowUpRight, Phone } from "lucide-react";
import { SHOW_TEXTILE_ENTRY } from "@/components/siteFlags";

gsap.registerPlugin(useGSAP);

const HOTLINE = "13929936713";
const TITLE_LINES = ["瑞龙国际", "商业综合体招商"];

const primaryBtn =
  "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-7 text-sm font-semibold text-ink shadow-warm transition duration-300 hover:-translate-y-0.5 hover:bg-[#c9a25f] active:translate-y-0 active:scale-[0.98]";
const glassBtn =
  "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/20 active:translate-y-0 active:scale-[0.98]";

// 金色光尘：轻量 canvas，离开视口或开启“减少动态效果”时不运行
function GoldDust() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let frame = 0;
    let running = true;
    const count = window.innerWidth < 768 ? 28 : 64;
    const dots = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.6 + Math.random() * 1.8,
      speed: 0.00012 + Math.random() * 0.00035,
      drift: (Math.random() - 0.5) * 0.00012,
      phase: Math.random() * Math.PI * 2
    }));

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const d of dots) {
        d.y -= d.speed;
        d.x += d.drift;
        if (d.y < -0.05) {
          d.y = 1.05;
          d.x = Math.random();
        }
        const alpha = 0.25 + 0.45 * (0.5 + 0.5 * Math.sin(t * 0.0015 + d.phase));
        ctx.beginPath();
        ctx.arc(d.x * width, d.y * height, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(241, 214, 150, ${alpha})`;
        ctx.shadowColor = "rgba(241, 214, 150, 0.8)";
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      if (running) frame = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting;
      if (visible && !running) {
        running = true;
        frame = requestAnimationFrame(draw);
      } else if (!visible) {
        running = false;
        cancelAnimationFrame(frame);
      }
    });

    resize();
    window.addEventListener("resize", resize);
    observer.observe(canvas);
    frame = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden />;
}

export function HeroScene() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 标题逐字立体翻起
        gsap.from("[data-char]", {
          yPercent: 110,
          rotationX: -75,
          autoAlpha: 0,
          transformOrigin: "50% 100%",
          duration: 1,
          ease: "power4.out",
          stagger: 0.05,
          delay: 0.15
        });

        // 右侧 3D 卡片依次飞入，然后各自缓慢悬浮
        gsap.from("[data-card]", {
          z: -260,
          y: 60,
          autoAlpha: 0,
          duration: 1.3,
          ease: "power3.out",
          stagger: 0.15,
          delay: 0.45
        });
        gsap.utils.toArray<HTMLElement>("[data-card-float]").forEach((el, i) => {
          gsap.to(el, { y: i % 2 ? 10 : -12, duration: 3.2 + i * 0.6, ease: "sine.inOut", yoyo: true, repeat: -1 });
        });

        // 掠过画面的一道金色光带
        gsap.fromTo(
          "[data-sweep]",
          { xPercent: -120 },
          { xPercent: 220, duration: 2.6, ease: "power2.inOut", repeat: -1, repeatDelay: 4.5, delay: 1.2 }
        );

        gsap.from("[data-scroll-cue]", { autoAlpha: 0, y: -10, duration: 0.8, delay: 1.4 });
        gsap.to("[data-scroll-line]", { scaleY: 1, transformOrigin: "50% 0%", duration: 1.2, ease: "power2.inOut", repeat: -1, yoyo: true });
      });

      // 鼠标视差：只在有精确指针的大屏上启用
      mm.add("(prefers-reduced-motion: no-preference) and (pointer: fine) and (min-width: 1024px)", () => {
        const section = root.current;
        if (!section) return;
        const photoX = gsap.quickTo("[data-parallax-photo]", "x", { duration: 1.2, ease: "power3.out" });
        const photoY = gsap.quickTo("[data-parallax-photo]", "y", { duration: 1.2, ease: "power3.out" });
        const gridX = gsap.quickTo("[data-parallax-grid]", "x", { duration: 1.4, ease: "power3.out" });
        const stackRY = gsap.quickTo("[data-card-stack]", "rotationY", { duration: 1, ease: "power3.out" });
        const stackRX = gsap.quickTo("[data-card-stack]", "rotationX", { duration: 1, ease: "power3.out" });

        const onMove = (event: PointerEvent) => {
          const rect = section.getBoundingClientRect();
          const nx = (event.clientX - rect.left) / rect.width - 0.5;
          const ny = (event.clientY - rect.top) / rect.height - 0.5;
          photoX(nx * -28);
          photoY(ny * -18);
          gridX(nx * 60);
          stackRY(-14 + nx * 16);
          stackRX(6 - ny * 10);
        };
        const onLeave = () => {
          photoX(0);
          photoY(0);
          gridX(0);
          stackRY(-14);
          stackRX(6);
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
    <section ref={root} data-hero className="grain relative isolate overflow-hidden bg-ink">
      {/* 实景照片（鼠标视差 + 滚动推近） */}
      <div data-parallax-photo className="absolute -inset-8 -z-30">
        <div data-hero-media className="absolute inset-0">
          <Image
            src="/images/ruilong-international/hero-exterior-new-01.jpg"
            alt="瑞龙国际招商中心建筑外立面"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_40%]"
          />
        </div>
      </div>
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,rgba(13,26,42,0.95)_0%,rgba(13,26,42,0.84)_40%,rgba(13,26,42,0.6)_70%,rgba(13,26,42,0.55)_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_78%_30%,rgba(184,144,77,0.22),transparent_55%)]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 h-1/2 bg-[linear-gradient(180deg,rgba(13,26,42,0)_0%,rgba(13,26,42,0.92)_70%)]" aria-hidden />

      {/* 透视金色网格地面：缓慢向前推进，营造纵深 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[46%] [perspective:700px]" aria-hidden>
        <div data-parallax-grid className="absolute inset-0">
          <div className="hero-grid absolute -left-1/2 bottom-0 h-[160%] w-[200%] origin-bottom [transform:rotateX(68deg)]" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <GoldDust />
      </div>

      {/* 掠光 */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <div data-sweep className="absolute -top-1/4 left-0 h-[150%] w-1/3 rotate-[14deg] bg-[linear-gradient(90deg,transparent,rgba(241,223,182,0.10),transparent)]" />
      </div>

      <div className="container-page grid min-h-[calc(100dvh-5rem)] items-center gap-12 pb-24 pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
        <div className="max-w-3xl text-white">
          <p data-hero-item className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-gold">
            <span className="h-px w-10 bg-gold/80" aria-hidden />
            佛山市南海区西樵镇碧霞路10号
          </p>
          <h1
            aria-label={TITLE_LINES.join("")}
            className="mt-6 font-display text-5xl font-bold leading-[1.15] tracking-tight [perspective:600px] sm:text-6xl lg:text-7xl"
          >
            {TITLE_LINES.map((line, lineIndex) => (
              <span key={line} aria-hidden className={`block overflow-hidden pb-1 ${lineIndex === 1 ? "text-[#f1dfb6]" : ""}`}>
                {Array.from(line).map((char, i) => (
                  <span key={i} data-char className="inline-block">
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p data-hero-item className="mt-7 max-w-xl text-lg leading-9 text-white/80">
            立足佛山南海西樵核心生活圈，面向品牌入驻、商业租赁、商务办公与项目合作开放招商。
          </p>
          <p data-hero-item className="mt-3 text-base font-semibold tracking-wide text-[#f1dfb6]">
            4.2万㎡商业体量 · 实景空间可看样 · 多元业态招商中
          </p>
          <div data-hero-item className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="#contact" className={primaryBtn}>
              预约看场
              <ArrowUpRight size={18} />
            </Link>
            <a href={`tel:${HOTLINE}`} className={glassBtn}>
              <Phone size={17} />
              电话咨询 {HOTLINE}
            </a>
            <Link href="#project" className="focus-ring inline-flex min-h-12 items-center gap-2 px-2 text-sm font-semibold text-white/75 transition hover:text-white">
              查看项目定位
              <ArrowDown size={16} />
            </Link>
            {SHOW_TEXTILE_ENTRY && (
              <Link href="/textile" className={glassBtn}>进入瑞龙纺织</Link>
            )}
          </div>

          {/* 手机 / 平板：信息条 */}
          <dl data-hero-item className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-3 lg:hidden">
            {[
              ["项目定位", "商业、办公、教育、休闲与生活配套复合型项目"],
              ["运营主体", "佛山瑞龙国际酒店管理有限公司"],
              ["招商热线", HOTLINE]
            ].map(([title, text]) => (
              <div key={title} className="bg-ink/40 px-5 py-4">
                <dt className="text-xs font-semibold tracking-[0.2em] text-gold">{title}</dt>
                <dd className="mt-1.5 text-[15px] font-medium leading-7 text-white">
                  {title === "招商热线" ? <a href={`tel:${text}`} className="tabular hover:text-gold">{text}</a> : text}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 桌面：3D 悬浮卡片组 */}
        <div className="relative hidden h-[30rem] [perspective:1200px] lg:block" aria-label="项目要点">
          <div data-card-stack className="relative h-full w-full [transform-style:preserve-3d] [transform:rotateY(-14deg)_rotateX(6deg)]">
            <div data-card className="absolute right-6 top-0 w-[22rem] [transform:translateZ(60px)]">
              <div data-card-float className="rounded-[1.6rem] border border-white/20 bg-ink/55 p-7 text-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl">
                <p className="text-xs font-semibold tracking-[0.25em] text-gold">商业体量</p>
                <p className="mt-3 font-display text-6xl font-bold text-[#f1dfb6]">4.2万㎡</p>
                <p className="mt-4 text-sm leading-7 text-white/75">商业、办公、教育、休闲与生活配套复合型项目</p>
              </div>
            </div>
            <div data-card className="absolute left-0 top-[13.5rem] w-[17rem] [transform:translateZ(130px)]">
              <div data-card-float className="rounded-[1.4rem] border border-gold/40 bg-ink/80 p-6 text-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(241,223,182,0.25)] backdrop-blur-xl">
                <p className="text-xs font-semibold tracking-[0.25em] text-gold">楼层业态</p>
                <ul className="mt-3 grid gap-2 text-sm">
                  {[
                    ["3F", "健身运动 · 商务办公"],
                    ["2F", "教育培训 · 休闲体验"],
                    ["1F", "餐饮茶饮 · 精品零售"]
                  ].map(([floor, text]) => (
                    <li key={floor} className="flex items-center gap-3">
                      <span className="font-display text-lg font-bold text-[#f1dfb6]">{floor}</span>
                      <span className="text-white/75">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div data-card className="absolute bottom-0 right-0 w-[19rem] [transform:translateZ(20px)]">
              <div data-card-float className="rounded-[1.4rem] border border-white/15 bg-ink/65 p-6 text-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-xl">
                <p className="text-xs font-semibold tracking-[0.25em] text-gold">招商热线</p>
                <a href={`tel:${HOTLINE}`} className="tabular mt-2 block font-display text-3xl font-bold transition hover:text-gold">
                  {HOTLINE}
                </a>
                <p className="mt-3 text-xs leading-6 text-white/60">运营主体：佛山瑞龙国际酒店管理有限公司</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 下滑提示 */}
      <a
        href="#project"
        data-scroll-cue
        className="focus-ring absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-[0.3em] text-white/60 transition hover:text-white lg:flex"
      >
        向下了解项目
        <span className="relative h-10 w-px overflow-hidden bg-white/15">
          <span data-scroll-line className="absolute inset-0 origin-top scale-y-0 bg-gold" />
        </span>
      </a>
    </section>
  );
}
