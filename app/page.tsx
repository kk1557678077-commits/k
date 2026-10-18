import { ArrowDown, ArrowUpRight, Handshake, Landmark, MapPin, Phone, TrainFront } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HomeMotion } from "@/components/HomeMotion";
import { InquiryForm } from "@/components/InquiryForm";
import { LuxHeading } from "@/components/LuxHeading";
import { ProjectVideoCard } from "@/components/ProjectVideoCard";
import { SHOW_TEXTILE_ENTRY } from "@/components/siteFlags";

const HOTLINE = "13929936713";

const coreValues = [
  ["区位客群", "位于西樵镇碧霞路10号，周边居住、办公、教育与日常消费场景集中。"],
  ["空间组合", "商业铺面、内街中庭、写字楼与配套空间组合，可承接不同经营尺度。"],
  ["业态适配", "餐饮、零售、教育、休闲体验、办公服务和生活配套均可沟通匹配。"],
  ["现场基础", "项目已有教育培训、商业铺面及办公场景，便于品牌判断真实经营环境。"],
  ["运营协同", "统一招商、统一运营、统一物业服务，降低品牌入驻后的沟通成本。"],
  ["合作开放", "面向品牌入驻、商业租赁、长期合作和产业资源合作开放洽谈。"]
];

// value 原样展示，count / decimals 只用于滚动计数动效
const researchStats = [
  { prefix: "约", count: 10.2, decimals: 2, unit: "万人", label: "周边2km常驻人口" },
  { prefix: "", count: 83, decimals: 0, unit: "个", label: "周边小区" },
  { prefix: "约", count: 6.84, decimals: 2, unit: "万人", label: "周边居住人口" },
  { prefix: "", count: 48, decimals: 0, unit: "个", label: "周边公交站点" },
  { prefix: "", count: 145, decimals: 0, unit: "所", label: "周边教育配套" },
  { prefix: "约", count: 730, decimals: 0, unit: "家", label: "周边餐饮门店" },
  { prefix: "约", count: 2017, decimals: 0, unit: "家", label: "周边零售门店" }
];

const businessTypes = [
  ["餐饮美食", "特色餐饮、品牌快餐、火锅烧烤、咖啡茶饮、轻食甜品等消费品牌"],
  ["精品零售", "生活超市、服饰配饰、母婴美妆、家居文创及社区零售"],
  ["教育培训", "早教启蒙、艺术培训、素质教育、成人技能培训等教育机构"],
  ["休闲体验", "美容护理、健身运动、亲子娱乐、棋牌桌球、文创体验"],
  ["商务办公", "企业办公、电商文创、专业服务、咨询机构与轻办公团队"],
  ["生活配套", "便利店、药房、家政服务、社区便民服务与本地生活品牌"]
];

const spaceTypes = ["临街铺面", "内街商铺", "中庭展示", "商务办公", "组合空间", "项目合作"];

const cooperationModels = ["品牌入驻", "商业租赁", "联营合作", "办公空间合作", "产业资源合作", "服务商合作"];

const supportItems = ["统一招商", "统一运营", "统一物业", "场地看样", "商务对接", "物业维修", "业态匹配", "资料对接"];

const floorPlans = [
  ["1F", "餐饮、咖啡茶饮、精品零售、生活服务及临街展示型品牌"],
  ["2F", "教育培训、休闲娱乐、体验业态、棋牌桌球等消费方向"],
  ["3F", "健身运动、商务办公、专业服务、综合配套等方向"]
];

const galleryImages = [
  { src: "/images/ruilong-international/streetfront-new-01.jpg", alt: "瑞龙国际商业中心临街展示面", caption: "临街展示面" },
  { src: "/images/ruilong-international/building-front-new-01.jpg", alt: "瑞龙国际商业中心入口及招牌", caption: "商业中心入口" },
  { src: "/images/ruilong-international/overview-new-01.jpg", alt: "瑞龙国际写字楼外景", caption: "写字楼外景" },
  { src: "/images/ruilong-international/office-lobby-new-01.jpg", alt: "瑞龙国际写字楼大堂", caption: "写字楼大堂" },
  { src: "/images/ruilong-international/courtyard-new-01.jpg", alt: "瑞龙国际商业内街和中庭空间", caption: "商业内街 / 中庭空间" },
  { src: "/images/ruilong-international/tenant-scene-new-01.jpg", alt: "瑞龙国际教育培训业态门头", caption: "教育培训业态" },
  { src: "/images/ruilong-international/streetfront-new-02.jpg", alt: "瑞龙国际商业铺面展示", caption: "商业铺面展示" },
  { src: "/images/ruilong-international/hero-exterior-new-01.jpg", alt: "瑞龙国际招商中心外立面", caption: "项目外立面" }
];

const spaceImages = [
  { src: "/images/ruilong-international/courtyard-new-01.jpg", alt: "瑞龙国际中庭与内街空间", title: "中庭 / 内街空间" },
  { src: "/images/ruilong-international/overview-new-01.jpg", alt: "瑞龙国际写字楼外景", title: "写字楼外景" },
  { src: "/images/ruilong-international/office-lobby-new-01.jpg", alt: "瑞龙国际写字楼大堂", title: "写字楼大堂" },
  { src: "/images/ruilong-international/streetfront-new-02.jpg", alt: "瑞龙国际临街商业铺面", title: "临街商业铺面" }
];

const sceneImages = [
  { src: "/images/ruilong-international/tenant-scene-new-01.jpg", alt: "瑞龙国际教育培训门店场景", title: "教育培训场景" },
  { src: "/images/ruilong-international/courtyard-new-01.jpg", alt: "瑞龙国际教育培训室内展示", title: "幼儿园 / 培训机构" },
  { src: "/images/ruilong-international/tenant-scene-new-02.jpg", alt: "瑞龙国际商业铺面现状", title: "商业铺面场景" }
];

function PhotoTile({ src, alt, caption, sizes, className = "" }: { src: string; alt: string; caption: string; sizes: string; className?: string }) {
  return (
    <figure className={`group relative isolate overflow-hidden rounded-2xl bg-sand ${className}`} data-reveal>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,26,42,0)_55%,rgba(13,26,42,0.78)_100%)]" />
      <figcaption className="absolute bottom-0 left-0 p-4 text-sm font-semibold text-white sm:p-5">{caption}</figcaption>
    </figure>
  );
}

const primaryBtn =
  "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-7 text-sm font-semibold text-ink shadow-warm transition duration-300 hover:-translate-y-0.5 hover:bg-[#c9a25f] active:translate-y-0 active:scale-[0.98]";
const glassBtn =
  "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/20 active:translate-y-0 active:scale-[0.98]";

export default function HomePage() {
  return (
    <HomeMotion>
      {/* 首屏 */}
      <section data-hero className="grain relative isolate overflow-hidden bg-ink">
        <div data-hero-media className="absolute inset-0 -z-10">
          <Image
            src="/images/ruilong-international/hero-exterior-new-01.jpg"
            alt="瑞龙国际招商中心建筑外立面"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_40%]"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(13,26,42,0.94)_0%,rgba(13,26,42,0.78)_38%,rgba(13,26,42,0.25)_75%,rgba(13,26,42,0.1)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-[linear-gradient(180deg,rgba(13,26,42,0)_0%,rgba(13,26,42,0.85)_100%)]" />

        <div className="container-page flex min-h-[calc(100dvh-5rem)] flex-col justify-end pb-10 pt-24 sm:pb-12">
          <div className="max-w-3xl text-white">
            <p data-hero-item className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-gold">
              <span className="h-px w-10 bg-gold/80" aria-hidden />
              佛山市南海区西樵镇碧霞路10号
            </p>
            <h1 data-hero-item className="mt-6 font-display text-5xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">瑞龙国际</span>
              <span className="block text-[#f1dfb6]">商业综合体招商</span>
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
          </div>

          <dl data-hero-item className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-3">
            {[
              ["项目定位", "商业、办公、教育、休闲与生活配套复合型项目"],
              ["运营主体", "佛山瑞龙国际酒店管理有限公司"],
              ["招商热线", HOTLINE]
            ].map(([title, text]) => (
              <div key={title} className="bg-ink/40 px-6 py-5">
                <dt className="text-xs font-semibold tracking-[0.2em] text-gold">{title}</dt>
                <dd className="mt-2 text-[15px] font-medium leading-7 text-white">
                  {title === "招商热线" ? (
                    <a href={`tel:${text}`} className="tabular hover:text-gold">{text}</a>
                  ) : (
                    text
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 项目概况 */}
      <section id="project" className="section-lux bg-paper">
        <div className="container-page grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <LuxHeading
              eyebrow="项目概况"
              title="4.2万㎡复合型商业招商项目"
              text="瑞龙国际位于佛山市南海区西樵镇碧霞路10号，以商业铺面、商务办公、教育培训、餐饮零售、休闲体验与生活服务为主要招商方向，服务周边社区消费、办公配套与品牌落地需求。"
              className="mb-8"
            />
            <p className="max-w-[42rem] text-base leading-8 text-stone" data-reveal>
              项目以“真实空间、清晰业态、统一运营”为招商基础，既适合餐饮、零售、教育、休闲与生活服务品牌入驻，也可承接企业办公、服务机构、项目合作及产业资源对接。具体面积、楼层、价格和合作条件以现场沟通为准。
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-sand pt-6" data-reveal>
              {["品牌入驻", "商业租赁", "商务办公"].map((item) => (
                <li key={item} className="flex items-center gap-2 font-display text-lg font-semibold text-navy">
                  <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative" data-reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-warm sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/ruilong-international/overview-new-01.jpg"
                alt="瑞龙国际写字楼外景"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="lattice absolute -bottom-6 -left-4 hidden h-28 w-28 rounded-xl opacity-40 sm:block" aria-hidden />
            <div className="absolute -bottom-8 right-4 rounded-2xl bg-ink px-7 py-5 text-white shadow-warm sm:right-8">
              <div className="font-display text-4xl font-bold text-[#f1dfb6]">4.2万㎡</div>
              <div className="mt-1 text-sm text-white/70">商业体量</div>
            </div>
          </div>
        </div>
      </section>

      {/* 招商优势 */}
      <section className="section-lux bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <LuxHeading
              eyebrow="招商优势"
              title="面向品牌与企业的六项入驻价值"
              text="瑞龙国际以区位客群、空间组合、业态适配、现场基础、运营协同与合作开放为核心优势，帮助品牌更高效判断入驻可行性。"
              className="mb-0"
            />
          </div>
          <ol className="grid gap-x-10 sm:grid-cols-2">
            {coreValues.map(([title, text], index) => (
              <li key={title} className="border-t border-sand py-7" data-reveal>
                <div className="flex items-baseline gap-4">
                  <span className="tabular font-display text-sm font-bold text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl font-bold text-navy">{title}</h3>
                </div>
                <p className="mt-3 pl-9 text-sm leading-7 text-stone">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 区位与周边配套 */}
      <section id="location" className="section-lux relative overflow-hidden bg-paper-deep">
        <div className="lattice pointer-events-none absolute -right-10 top-10 h-64 w-64 opacity-[0.18]" aria-hidden />
        <div className="container-page relative">
          <LuxHeading
            eyebrow="区位与周边配套"
            title="覆盖居住、教育、餐饮、零售与公共服务资源"
            text="据项目周边调研资料显示，瑞龙国际周边2公里范围内覆盖居住、教育、餐饮、零售、酒店及公共服务等多类配套资源，为日常消费、亲子教育、商务往来和社区服务提供客群基础。"
          />
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 border-y border-sand py-10 sm:grid-cols-4 lg:grid-cols-7">
            {researchStats.map((stat) => (
              <div key={stat.label} data-reveal>
                <dd className="tabular whitespace-nowrap font-display text-navy">
                  {stat.prefix && <span className="mr-0.5 text-base font-semibold text-stone">{stat.prefix}</span>}
                  <span className="text-3xl font-bold sm:text-4xl lg:text-[2rem]" data-count={stat.count} data-decimals={stat.decimals}>
                    {stat.count.toFixed(stat.decimals)}
                  </span>
                  <span className="ml-0.5 text-base font-semibold text-stone">{stat.unit}</span>
                </dd>
                <dt className="mt-2 text-sm leading-6 text-stone">{stat.label}</dt>
              </div>
            ))}
          </dl>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              [MapPin, "西樵核心生活圈", "位于佛山市南海区西樵镇碧霞路10号，连接周边社区、办公、教育和公共服务场景。"],
              [Landmark, "多类配套聚集", "周边商业、酒店、公共服务及教育资源较为完善，适合承接复合型消费需求。"],
              [TrainFront, "到达条件清晰", "周边道路与公交站点为客流导入、商务往来和日常消费提供基础。"]
            ].map(([Icon, title, text]) => {
              const CardIcon = Icon as typeof MapPin;
              return (
                <article key={String(title)} data-reveal>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-bronze shadow-sm">
                    <CardIcon size={22} strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy">{String(title)}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone">{String(text)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 实景图册（含项目实景视频位） */}
      <section className="section-lux bg-white">
        <div className="container-page">
          <LuxHeading
            eyebrow="项目实景"
            title="现场空间与招商环境展示"
            text="以下实景展示瑞龙国际外立面、临街展示面、商业中心入口、写字楼大堂、商业内街、中庭空间与现有业态场景，辅助品牌进行初步选址判断。"
          />
          <div className="grid auto-rows-[13rem] gap-4 sm:grid-cols-2 sm:auto-rows-[15rem] lg:grid-cols-4">
            <div className="sm:col-span-2 sm:row-span-2" data-reveal>
              <ProjectVideoCard
                className="h-full"
                title="外立面与整体项目实景"
                description="瑞龙国际建筑外立面、临街展示面与整体招商环境。"
                videoSrc="/videos/ruilong-exterior-01.mp4"
                posterSrc="/images/ruilong-international/hero-exterior-new-01.jpg"
              />
            </div>
            {galleryImages.slice(0, 7).map((image, index) => (
              <PhotoTile
                key={image.src}
                src={image.src}
                alt={image.alt}
                caption={image.caption}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className={index === 4 ? "lg:col-span-2" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 招商业态 + 楼层规划 */}
      <section id="opportunities" className="section-lux bg-paper">
        <div className="container-page">
          <LuxHeading
            eyebrow="招商业态"
            title="多元业态招商，补充区域消费与办公配套"
            text="围绕餐饮、零售、教育、休闲体验、商务办公与生活配套等方向开放咨询，适合品牌门店、服务机构、轻办公团队及长期合作伙伴洽谈。"
          />
          <div className="grid gap-px overflow-hidden rounded-2xl bg-sand sm:grid-cols-2 lg:grid-cols-3">
            {businessTypes.map(([title, text]) => (
              <article key={title} className="group relative bg-paper p-7 transition duration-300 hover:bg-white" data-reveal>
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition duration-500 group-hover:scale-x-100" aria-hidden />
                <h3 className="font-display text-xl font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <LuxHeading
              eyebrow="空间规划方向"
              title="楼层业态规划参考"
              text="以下为招商方向参考，具体楼层组合、面积划分和入驻条件以项目实际招商方案及现场沟通为准。"
              className="mb-0"
            />
            <ol className="grid gap-3">
              {[...floorPlans].reverse().map(([floor, text]) => (
                <li key={floor} className="flex items-center gap-6 rounded-2xl border border-sand bg-white px-6 py-5 transition duration-300 hover:border-gold/60 hover:shadow-warm" data-reveal>
                  <span className="font-display text-3xl font-bold text-gold">{floor}</span>
                  <span className="h-8 w-px bg-sand" aria-hidden />
                  <p className="text-base font-medium leading-7 text-navy">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 商业空间 */}
      <section id="commercial-space" className="section-lux bg-white">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <LuxHeading
              eyebrow="商业空间"
              title="4.2万㎡商业体量，覆盖多类空间需求"
              text="项目具备临街铺面、内街商铺、中庭展示、商务办公和组合空间等形态，可根据品牌调性、客流需求和经营面积进一步沟通匹配。"
              className="mb-0"
            />
            <div data-reveal>
              <ul className="flex flex-wrap gap-2">
                {spaceTypes.map((item) => (
                  <li key={item} className="rounded-lg border border-sand bg-paper px-4 py-2 text-sm font-semibold text-navy">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-2 border-gold pl-4 text-sm leading-7 text-stone">
                具体可租面积、交付条件、楼层位置、费用方案及合作细节，以项目实际招商方案及现场沟通为准。
              </p>
            </div>
          </div>
          <p className="mt-12 max-w-3xl text-sm leading-7 text-stone" data-reveal>
            招商沟通可围绕楼层位置、门头展示、动线条件、用电用水、停车到达和物业服务等要点展开。
          </p>
          <div className="mt-6 grid auto-rows-[13rem] gap-4 sm:grid-cols-2 sm:auto-rows-[14rem] lg:grid-cols-4">
            <div className="sm:col-span-2 sm:row-span-2" data-reveal>
              <ProjectVideoCard
                className="h-full"
                title="商业空间与公共动线"
                description="临街铺面、内街、中庭、大堂等空间条件。"
                videoSrc="/videos/ruilong-commercial-01.mp4"
                posterSrc="/images/ruilong-international/courtyard-new-01.jpg"
              />
            </div>
            {spaceImages.map((image) => (
              <PhotoTile
                key={image.src}
                src={image.src}
                alt={image.alt}
                caption={image.title}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 合作模式 + 招商服务 */}
      <section className="section-lux bg-paper-deep">
        <div className="container-page grid gap-16 lg:grid-cols-2">
          <div id="cooperation">
            <LuxHeading
              eyebrow="合作模式"
              title="开放品牌入驻、租赁与项目合作洽谈"
              text="瑞龙国际面向品牌方、企业客户、服务机构与产业资源伙伴，提供招商咨询、现场看样、空间匹配与后续合作沟通入口。"
              className="mb-8"
            />
            <ol className="grid gap-x-6 sm:grid-cols-2">
              {cooperationModels.map((item, index) => (
                <li key={item} className="flex items-center gap-4 border-t border-sand py-4" data-reveal>
                  <span className="tabular flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy text-xs font-bold text-[#f1dfb6]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-navy">{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-7 text-stone" data-reveal>
              提交需求后，可进一步沟通合作方式、空间条件、入驻节奏与运营支持内容。
            </p>
          </div>
          <div id="resources">
            <LuxHeading
              eyebrow="招商服务"
              title="统一招商、统一运营、统一物业服务"
              text="项目围绕招商对接、现场看样、物业服务、业态匹配和商务沟通提供支持。涉及政策、补贴或特殊条件的信息，以实际沟通和确认文件为准。"
              className="mb-8"
            />
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {supportItems.map((item) => (
                <li key={item} className="rounded-xl bg-white px-3 py-4 text-center text-sm font-semibold text-navy shadow-sm" data-reveal>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 经营场景 */}
      <section className="section-lux bg-white">
        <div className="container-page">
          <LuxHeading
            eyebrow="经营场景"
            title="现有业态与经营场景"
            text="项目现场已具备教育培训、生活服务、商业铺面等实际经营与展示场景。后续招商可围绕餐饮、零售、教育、休闲、办公及生活配套等方向持续丰富，形成更完整的消费与服务组合。"
          />
          <div className="grid auto-rows-[14rem] gap-4 md:grid-cols-3 md:auto-rows-[15rem]">
            <div className="md:col-span-2 md:row-span-2" data-reveal>
              <ProjectVideoCard
                className="h-full"
                title="现有业态与运营场景"
                description="教育培训、幼儿园 / 培训机构和商铺的实际经营画面。"
                videoSrc="/videos/ruilong-tenant-01.mp4"
                posterSrc="/images/ruilong-international/tenant-scene-new-01.jpg"
              />
            </div>
            {sceneImages.slice(1).map((image) => (
              <PhotoTile key={image.src} src={image.src} alt={image.alt} caption={image.title} sizes="(min-width: 768px) 33vw, 100vw" />
            ))}
          </div>
        </div>
      </section>

      {/* 招商联系 */}
      <section id="contact" className="section-lux relative isolate overflow-hidden bg-ink text-white">
        <div className="lattice pointer-events-none absolute inset-0 -z-10 opacity-[0.035]" aria-hidden />
        <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-3xl" aria-hidden />
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <LuxHeading
              tone="dark"
              eyebrow="招商联系"
              title="预约看场与合作洽谈"
              text="请留下合作类型、意向面积、业态方向和联系方式。瑞龙国际将根据您提交的信息安排项目沟通、资料对接或现场看样，相关信息仅用于招商合作联系。"
              className="mb-10"
            />
            <a
              href={`tel:${HOTLINE}`}
              className="focus-ring group flex items-center justify-between gap-4 rounded-2xl border border-gold/40 bg-white/5 px-6 py-5 transition duration-300 hover:border-gold hover:bg-white/10"
              data-reveal
            >
              <span>
                <span className="block text-xs font-semibold tracking-[0.2em] text-gold">招商热线 · 点击拨打</span>
                <span className="tabular mt-1 block font-display text-3xl font-bold text-white">{HOTLINE}</span>
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink transition duration-300 group-hover:scale-105">
                <Phone size={20} />
              </span>
            </a>
            <div className="mt-6 grid gap-4 text-sm leading-7 text-white/70" data-reveal>
              <div className="flex gap-3"><MapPin className="mt-1 shrink-0 text-gold" size={18} />佛山市南海区西樵镇碧霞路10号瑞龙国际商业中心</div>
              <div className="flex gap-3"><Handshake className="mt-1 shrink-0 text-gold" size={18} />运营公司：佛山瑞龙国际酒店管理有限公司</div>
            </div>
          </div>
          <div data-reveal>
            <InquiryForm formType="Investment Inquiry" title="招商合作咨询" />
          </div>
        </div>
      </section>
    </HomeMotion>
  );
}
