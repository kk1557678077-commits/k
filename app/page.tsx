import Image from "next/image";
import { FloorFinder } from "@/components/FloorFinder";
import { HeroScene } from "@/components/HeroScene";
import { HomeMotion } from "@/components/HomeMotion";
import { InquiryForm } from "@/components/InquiryForm";
import { NameIndex } from "@/components/NameIndex";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import { pageSeo } from "@/data/seo";

export const metadata = pageSeo("/");

const HOTLINE = "13929936713";
const IMG = "/images/ruilong-international";

// count / decimals 只用于滚动计数；数据原样来自项目周边调研资料
const stats = [
  { pre: "约", count: 10.2, decimals: 2, unit: "万", text: "周边2公里常驻人口。" },
  { pre: "约", count: 6.84, decimals: 2, unit: "万", text: "周边居住人口，与常驻人口为不同统计口径。" },
  { pre: "", count: 83, decimals: 0, unit: "个", text: "周边小区。" },
  { pre: "", count: 145, decimals: 0, unit: "所", text: "周边教育配套。" },
  { pre: "约", count: 730, decimals: 0, unit: "家", text: "周边餐饮门店。" },
  { pre: "约", count: 2017, decimals: 0, unit: "家", text: "周边零售门店。" },
  { pre: "", count: 48, decimals: 0, unit: "个", text: "周边公交站点，为客流导入和商务往来提供基础。" }
];

const indexGroups: { title: string; summary: string; items: [string, string][] }[] = [
  {
    title: "入驻价值",
    summary: "区位、空间、业态、现场、运营与合作六个方面，帮助品牌判断入驻可行性。",
    items: [
      ["区位客群", "位于西樵镇碧霞路10号，周边居住、办公、教育与日常消费场景集中。"],
      ["空间组合", "商业铺面、内街中庭、写字楼与配套空间组合，可承接不同经营尺度。"],
      ["业态适配", "餐饮、零售、教育、休闲体验、办公服务和生活配套均可沟通匹配。"],
      ["现场基础", "项目已有教育培训、商业铺面及办公场景，便于品牌判断真实经营环境。"],
      ["运营协同", "统一招商、统一运营、统一物业服务，降低品牌入驻后的沟通成本。"],
      ["合作开放", "面向品牌入驻、商业租赁、长期合作和产业资源合作开放洽谈。"]
    ]
  },
  {
    title: "招商业态",
    summary: "餐饮、零售、教育、休闲体验、商务办公与生活配套六个方向开放咨询。",
    items: [
      ["餐饮美食", "特色餐饮、品牌快餐、火锅烧烤、咖啡茶饮、轻食甜品等消费品牌。"],
      ["精品零售", "生活超市、服饰配饰、母婴美妆、家居文创及社区零售。"],
      ["教育培训", "早教启蒙、艺术培训、素质教育、成人技能培训等教育机构。"],
      ["休闲体验", "美容护理、健身运动、亲子娱乐、棋牌桌球、文创体验。"],
      ["商务办公", "企业办公、电商文创、专业服务、咨询机构与轻办公团队。"],
      ["生活配套", "便利店、药房、家政服务、社区便民服务与本地生活品牌。"]
    ]
  },
  {
    title: "空间形态",
    summary: "临街铺面到组合空间，可根据品牌调性、客流需求和经营面积进一步匹配。",
    items: [
      ["临街铺面", "临街展示面，适合需要门头展示与到店客流的品牌。"],
      ["内街商铺", "内街与中庭动线上的铺位，适合社区消费与体验业态。"],
      ["中庭展示", "公共中庭空间，可沟通展示与活动需求。"],
      ["商务办公", "写字楼办公空间，适合企业办公、专业服务与轻办公团队。"],
      ["组合空间", "可结合业态类型、经营面积、展示需求和到访客群进一步沟通匹配。"],
      ["项目合作", "面向产业资源与服务商的合作洽谈。"]
    ]
  }
];

const gallery = [
  { src: `${IMG}/building-front-new-01.jpg`, alt: "瑞龙国际商业中心入口及招牌", caption: "商业中心入口", ratio: "aspect-[3/4]", pos: "50% 50%", place: "col-span-9 sm:col-span-4 sm:col-start-1" },
  { src: `${IMG}/overview-new-01.jpg`, alt: "瑞龙国际商业楼外景", caption: "商业楼外景", ratio: "aspect-[16/10]", pos: "50% 20%", place: "col-span-10 col-start-3 sm:col-span-6 sm:col-start-7 sm:mt-[30vh]" },
  { src: `${IMG}/streetfront-new-02.jpg`, alt: "瑞龙国际临街商业铺面", caption: "临街商业铺面", ratio: "aspect-[3/2]", pos: "50% 50%", place: "col-span-12 sm:col-span-6 sm:col-start-6 sm:mt-[24vh]" },
  { src: `${IMG}/office-lobby-new-01.jpg`, alt: "瑞龙国际大厦入口大堂", caption: "写字楼大堂", ratio: "aspect-[4/5]", pos: "50% 50%", place: "col-span-7 sm:col-span-3 sm:col-start-2 sm:-mt-[18vh]" }
];

// 手机上两行 64/36、36/64；桌面一条 5:2:3:2 的长带，悬停的一格展开
const band = [
  { src: `${IMG}/courtyard-new-01.jpg`, alt: "瑞龙国际商业内街与中庭空间", size: "w-[64%] sm:grow-[5]", pos: "45% 50%" },
  { src: `${IMG}/streetfront-new-01.jpg`, alt: "瑞龙国际写字楼与临街铺面", size: "w-[36%] sm:grow-[2]", pos: "50% 20%" },
  { src: `${IMG}/hero-exterior-new-01.jpg`, alt: "瑞龙国际岭南风格外立面", size: "w-[36%] sm:grow-[3]", pos: "75% 50%" },
  { src: `${IMG}/storefront-02.jpg`, alt: "瑞龙国际商业楼临街立面", size: "w-[64%] sm:grow-[2]", pos: "26% 50%" }
];

const services = ["统一招商", "统一运营", "统一物业", "场地看样", "商务对接", "物业维修", "业态匹配", "资料对接"];

export default function HomePage() {
  return (
    <HomeMotion>
      <div className="rl">
        <HeroScene />

        {/* 一句标题为一幅全景作注 */}
        <section id="project" className="pt-[clamp(6rem,3rem+8vw,11rem)]">
          <div className="rl-frame">
            <h2 className="t-head max-w-[10.5em]" data-reveal>
              4.2万㎡商业综合体
            </h2>
            <div className="t-small mt-8 flex flex-col gap-4 text-[var(--ink)] sm:flex-row sm:gap-12" data-reveal>
              <p className="max-w-[16em]">立足西樵核心生活圈，佛山市南海区西樵镇碧霞路10号。运营：佛山瑞龙国际酒店管理有限公司。</p>
              <p className="max-w-[16em]">商业铺面、商务办公、教育培训、餐饮零售、休闲体验与生活服务。</p>
            </div>
          </div>
          <div className="relative mt-10 aspect-[4/5] w-full overflow-hidden sm:aspect-[21/9]" data-wipe>
            <Image
              src={`${IMG}/building-front-new-02.jpg`}
              alt="瑞龙国际岭南风格商业楼全景，铜色回纹窗花与青砖立柱"
              fill
              sizes="100vw"
              className="scale-110 object-cover"
              data-drift
            />
          </div>
        </section>

        {/* 安静的数字 */}
        <section id="location" className="rl-gap">
          <div className="rl-frame grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6 lg:col-start-2">
              <h2 className="t-lead mb-14 pl-[7rem] font-semibold sm:pl-[9.75rem]" data-reveal>
                周边2公里
              </h2>
              <dl className="grid gap-7">
                {stats.map((s) => (
                  <div key={s.text} className="grid grid-cols-[5.5rem_1fr] items-baseline gap-6 sm:grid-cols-[8.25rem_1fr]" data-reveal>
                    <dt className="tabular whitespace-nowrap text-right font-display text-[length:var(--step-lead)] font-bold">
                      {s.pre && <span className="t-small font-normal">{s.pre}</span>}
                      <span data-count={s.count} data-decimals={s.decimals}>
                        {s.count.toFixed(s.decimals)}
                      </span>
                      <span className="t-small font-normal">{s.unit}</span>
                    </dt>
                    <dd className="max-w-[40ch] text-[var(--ink)]">{s.text}</dd>
                  </div>
                ))}
              </dl>
              <p className="t-small mt-10 pl-[7rem] text-[var(--ink-soft)] sm:pl-[9.75rem]" data-reveal>
                数据来自项目周边调研资料，统计口径以招商资料为准。
              </p>
            </div>
            <div className="relative ml-auto aspect-square w-[56%] overflow-hidden lg:col-span-3 lg:col-start-9 lg:mt-20 lg:w-full lg:self-start" data-wipe>
              <Image src={`${IMG}/courtyard-new-01.jpg`} alt="瑞龙国际内街上的幼儿园与教育业态" fill sizes="(min-width: 1024px) 22vw, 56vw" className="object-cover" />
            </div>
          </div>
        </section>

        {/* 一字号名录 */}
        <section className="rl-gap bg-[var(--ground-2)]">
          <div className="rl-frame">
            <h2 className="t-lead mb-16 font-semibold" data-reveal>
              为品牌准备的条件
            </h2>
            <NameIndex groups={indexGroups} />
          </div>
        </section>

        {/* 交错成对的实景 */}
        <section aria-label="项目实景" className="rl-gap">
          <div className="rl-frame grid grid-cols-12 gap-y-16 sm:gap-y-0">
            {gallery.map((g) => (
              <figure key={g.src} className={g.place}>
                <div className={`relative w-full overflow-hidden ${g.ratio}`} data-wipe>
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width: 640px) 50vw, 90vw" className="object-cover" style={{ objectPosition: g.pos }} />
                </div>
                <figcaption className="t-small mt-2.5 text-[var(--ink-soft)]">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* 陈述 + 推到右侧的楼层表（可按业态筛选） */}
        <section id="opportunities" className="rl-gap bg-[var(--ground-2)]">
          <div id="cooperation" className="rl-frame">
            <h2 className="t-head mb-24 max-w-[11em] sm:indent-[3vw]" data-reveal>
              按业态，找到合适的楼层
            </h2>
            <FloorFinder />
          </div>
        </section>

        {/* 不等宽实景长带 */}
        <section id="commercial-space" className="rl-gap">
          <div className="rl-frame">
            <h2 className="t-lead mb-16 font-semibold lg:ml-[16.66%]" data-reveal>
              现场空间
            </h2>
          </div>
          <div className="flex h-[84svh] flex-wrap sm:h-[68svh] sm:flex-nowrap" data-reveal>
            {band.map((b, i) => (
              <div
                key={b.src}
                className={`relative h-1/2 overflow-hidden transition-[flex-grow] duration-500 ease-out sm:h-full sm:w-auto sm:basis-0 sm:hover:grow-[6] ${b.size}`}
              >
                <Image src={b.src} alt={b.alt} fill sizes="(min-width: 640px) 40vw, 64vw" className="object-cover" style={{ objectPosition: b.pos }} />
                {i === 0 && (
                  <p className="t-lead absolute left-0 top-0 bg-[var(--inverse)] px-6 py-5 font-semibold text-[var(--ground)]">
                    内街、中庭
                    <br />
                    与临街铺面
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="rl-frame t-body mt-6 text-[var(--ink)]" data-reveal>
            具体可租面积、交付条件、楼层位置、费用方案及合作细节，以项目实际招商方案及现场沟通为准。
          </p>
        </section>

        {/* 侧栏事实 + 宽段落 */}
        <section id="resources" className="rl-gap bg-[var(--ground-2)]">
          <div className="rl-frame grid gap-12 lg:grid-cols-[34%_1fr]">
            <dl className="t-small grid grid-cols-2 gap-5 lg:block lg:max-w-[12rem] lg:space-y-5">
              {[
                ["运营公司", "佛山瑞龙国际酒店管理有限公司"],
                ["项目地址", "西樵镇碧霞路10号"],
                ["商业体量", "4.2万㎡"]
              ].map(([k, v]) => (
                <div key={k} data-reveal>
                  <dt className="text-[var(--ink-soft)]">{k}</dt>
                  <dd className="text-[var(--ink)]">{v}</dd>
                </div>
              ))}
            </dl>
            <ScrollReveal
              splitBy="chars"
              baseOpacity={0.15}
              blurStrength={3}
              stagger={0.012}
              containerClassName="max-w-[20em] text-[var(--ink)]"
              textClassName="text-[length:var(--step-lead)] leading-[1.45] font-semibold"
            >
              项目以“真实空间、清晰业态、统一运营”为招商基础。
            </ScrollReveal>

            <p className="t-body max-w-[32em] text-[var(--ink)] lg:col-start-2 lg:-mt-4" data-reveal>
              既适合餐饮、零售、教育、休闲与生活服务品牌入驻，也可承接企业办公、服务机构、项目合作及产业资源对接。具体面积、楼层、价格和合作条件以现场沟通为准。
            </p>

            <p className="t-small font-semibold text-[var(--ink)] lg:pt-24">招商服务</p>
            <div className="lg:pt-24">
              <ul className="t-small grid max-w-[38rem] grid-cols-2 gap-x-16 gap-y-2.5 text-[var(--ink)]">
                {services.map((s) => (
                  <li key={s} data-reveal>
                    {s}
                  </li>
                ))}
              </ul>
              <p className="t-small mt-8 max-w-[44ch] text-[var(--ink-soft)]">
                涉及政策、补贴或特殊条件的信息，以实际沟通和确认文件为准。
              </p>
            </div>
          </div>
        </section>

        {/* 热线即标题 */}
        <section id="contact" className="bg-[var(--inverse)] text-[var(--ground)]">
          <div className="rl-frame flex min-h-[86svh] flex-col justify-between py-16 sm:min-h-[100svh] sm:py-12">
            <p className="t-lead max-w-[22ch] font-semibold" data-reveal>
              预约看场或咨询入驻，直接拨打招商热线。
            </p>
            <a
              href={`tel:${HOTLINE}`}
              className="tabular focus-ring block font-display text-[clamp(3rem,11.5vw,11rem)] font-bold leading-none tracking-[-0.03em] transition-colors duration-300 hover:text-[var(--accent)]"
              data-reveal
            >
              139 2993 6713
            </a>
            <div className="t-small flex flex-col gap-3 opacity-80 sm:flex-row sm:justify-between">
              <p>佛山市南海区西樵镇碧霞路10号瑞龙国际商业中心</p>
              <p className="flex gap-6">
                <a href="#opportunities" className="rl-link">楼层业态</a>
                <a href="#inquiry" className="rl-link">在线留言</a>
              </p>
            </div>
          </div>
          <div id="inquiry" className="rl-frame grid gap-10 pb-28 pt-24 lg:grid-cols-12">
            <p className="t-lead font-semibold lg:col-span-4" data-reveal>
              也可以留下需求，我们安排项目沟通、资料对接或现场看样。
            </p>
            <div className="lg:col-span-7 lg:col-start-6" data-reveal>
              <InquiryForm formType="Investment Inquiry" title="招商合作咨询" />
            </div>
          </div>
        </section>
      </div>
    </HomeMotion>
  );
}
