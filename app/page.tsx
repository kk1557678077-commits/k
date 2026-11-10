import Image from "next/image";
import { FloorFinder } from "@/components/FloorFinder";
import { HeroScene } from "@/components/HeroScene";
import { HomeMotion } from "@/components/HomeMotion";
import { InquiryForm } from "@/components/InquiryForm";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import { landline, mobiles } from "@/data/contacts";
import { pageSeo } from "@/data/seo";

export const metadata = pageSeo("/");

const IMG = "/images/ruilong-international";
const NEW = `${IMG}/2026`;

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

// 门店实拍，统一 3:4 竖图；只写招牌上能看到的名称和业态，不写面积、楼层或开业日期
const tenants = [
  { name: "苏宁易购", kind: "家电专业店", src: `${NEW}/tenant-suning.jpg` },
  { name: "煲正点煲仔饭", kind: "餐饮", src: `${NEW}/tenant-baozheng.jpg` },
  { name: "炫8台球俱乐部", kind: "休闲体验", src: `${NEW}/tenant-xuan8.jpg` },
  { name: "柏愉皮肤管理中心", kind: "美容护理", src: `${NEW}/tenant-boyu.jpg` },
  { name: "京东养车", kind: "汽车养护", src: `${NEW}/tenant-jd.jpg` },
  { name: "圆德口腔", kind: "口腔医疗", src: `${NEW}/tenant-yuande.jpg` },
  { name: "德盈汽修", kind: "汽车维修", src: `${NEW}/tenant-deying.jpg` },
  { name: "圣道中医养生会馆", kind: "养生保健", src: `${NEW}/tenant-shengdao.jpg` }
];

const services = ["统一招商", "统一运营", "统一物业", "场地看样", "商务对接", "物业维修", "业态匹配", "资料对接"];

export default function HomePage() {
  return (
    <HomeMotion>
      <div className="rl">
        <HeroScene />

        {/* 一句标题为一幅全景作注；手机用竖图，电脑用通栏横图 */}
        <section id="project" className="pt-[clamp(4.5rem,2.5rem+8vw,11rem)]">
          <div className="rl-frame">
            <h2 className="t-head max-w-[10.5em]" data-reveal>
              4.2万㎡商业综合体
            </h2>
            <div className="t-body mt-6 flex flex-col gap-3 text-[var(--ink)] sm:mt-8 sm:flex-row sm:gap-12" data-reveal>
              <p className="max-w-[20em]">佛山市南海区西樵镇碧霞路10号，立足西樵核心生活圈。运营：佛山瑞龙国际酒店管理有限公司。</p>
              <p className="max-w-[20em]">商业铺面、商务办公、教育培训、餐饮零售、休闲体验与生活服务。</p>
            </div>
          </div>
          <div className="relative mt-8 aspect-[4/5] w-full overflow-hidden sm:mt-10 sm:aspect-[21/9]" data-wipe>
            <Image
              src={`${NEW}/pano-tall.jpg`}
              alt="瑞龙国际写字楼与临街商业"
              fill
              sizes="100vw"
              className="object-cover sm:hidden"
            />
            <Image
              src={`${NEW}/pano-wide.jpg`}
              alt="瑞龙国际招商中心正立面与门前的棕榈树"
              fill
              sizes="100vw"
              className="hidden scale-110 object-cover sm:block"
              data-drift
            />
          </div>
        </section>

        {/* 已入驻门店：深底图墙，手机两列、电脑四列 */}
        <section id="tenants" className="rl-gap bg-[var(--inverse)] text-[var(--ground)]">
          <div className="rl-frame">
            <h2 className="t-head max-w-[11em]" data-reveal>
              这些品牌已经入驻
            </h2>
            <p className="t-body mt-5 max-w-[32em]" data-reveal>
              家电、餐饮、休闲、美容、医疗与汽车服务门店都在项目内。以下是门店实拍，仅列部分入驻品牌。
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-7 sm:mt-14 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4">
              {tenants.map((t) => (
                <li key={t.name}>
                  <div className="relative aspect-[3/4] w-full overflow-hidden" data-wipe>
                    <Image src={t.src} alt={`${t.name}门店实拍`} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                  </div>
                  <h3 className="t-body mt-3 font-semibold leading-snug" data-reveal>
                    {t.name}
                  </h3>
                  <p className="t-small opacity-80" data-reveal>
                    {t.kind}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 现场空间：一张内街横图 + 两张竖图 */}
        <section id="commercial-space" className="rl-gap">
          <div className="rl-frame">
            <h2 className="t-head max-w-[11em]" data-reveal>
              内街、写字楼与临街铺面
            </h2>
            <div className="mt-8 grid grid-cols-2 items-end gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-12">
              <figure className="col-span-2 lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden" data-wipe>
                  <Image src={`${NEW}/space-street.jpg`} alt="瑞龙国际商业内街与临街铺面" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="t-small mt-2 text-[var(--ink-soft)]">商业内街</figcaption>
              </figure>
              <figure className="lg:col-span-3">
                <div className="relative aspect-[3/4] overflow-hidden" data-wipe>
                  <Image src={`${NEW}/space-arcade.jpg`} alt="瑞龙国际大厦入口与临街铺面" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                </div>
                <figcaption className="t-small mt-2 text-[var(--ink-soft)]">瑞龙国际大厦入口</figcaption>
              </figure>
              <figure className="lg:col-span-3">
                <div className="relative aspect-[3/4] overflow-hidden" data-wipe>
                  <Image src={`${IMG}/office-lobby-new-01.jpg`} alt="瑞龙国际大厦写字楼大堂" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                </div>
                <figcaption className="t-small mt-2 text-[var(--ink-soft)]">写字楼大堂</figcaption>
              </figure>
            </div>
            <p className="t-body mt-8 max-w-[34em] text-[var(--ink)]" data-reveal>
              具体可租面积、交付条件、楼层位置、费用方案及合作细节，以项目实际招商方案及现场沟通为准。
            </p>
          </div>
        </section>

        {/* 周边：调研数字 + 双拥主题公园 */}
        <section id="location" className="rl-gap bg-[var(--ground-2)]">
          <div className="rl-frame grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="t-head mb-8 sm:mb-12" data-reveal>
                周边2公里
              </h2>
              <dl className="grid gap-5 sm:gap-6">
                {stats.map((s) => (
                  <div key={s.text} className="grid grid-cols-[6.5rem_1fr] items-baseline gap-4 sm:grid-cols-[8.25rem_1fr] sm:gap-6" data-reveal>
                    <dt className="tabular whitespace-nowrap text-right font-display text-[length:var(--step-lead)] font-bold">
                      {s.pre && <span className="t-small font-normal">{s.pre}</span>}
                      <span data-count={s.count} data-decimals={s.decimals}>
                        {s.count.toFixed(s.decimals)}
                      </span>
                      <span className="t-small font-normal">{s.unit}</span>
                    </dt>
                    <dd className="text-[var(--ink)]">{s.text}</dd>
                  </div>
                ))}
              </dl>
              <p className="t-small mt-8 text-[var(--ink-soft)]" data-reveal>
                数据来自项目周边调研资料，统计口径以招商资料为准。
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <h3 className="t-lead font-semibold" data-reveal>
                瑞龙双拥主题公园
              </h3>
              <p className="t-body mt-2 max-w-[30em] text-[var(--ink)]" data-reveal>
                林荫步道、花木和开阔场地，适合散步与休憩。
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5">
                <div className="relative col-span-2 aspect-[4/3] overflow-hidden" data-wipe>
                  <Image src={`${NEW}/park-sign.jpg`} alt="瑞龙双拥主题公园园名标识" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden" data-wipe>
                  <Image src={`${NEW}/park-flowers.jpg`} alt="公园步道旁盛开的三角梅" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden" data-wipe>
                  <Image src={`${NEW}/park-shade.jpg`} alt="公园林荫下的步道与栏杆" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 楼层表（可按业态筛选） */}
        <section id="opportunities" className="rl-gap">
          <div id="cooperation" className="rl-frame">
            <h2 className="t-head mb-10 max-w-[11em] sm:mb-16" data-reveal>
              按业态，找到合适的楼层
            </h2>
            <FloorFinder />
          </div>
        </section>

        {/* 侧栏事实 + 招商服务 */}
        <section id="resources" className="rl-gap bg-[var(--ground-2)]">
          <div className="rl-frame grid gap-10 lg:grid-cols-[34%_1fr]">
            <dl className="t-body grid grid-cols-2 gap-5 lg:block lg:max-w-[14rem] lg:space-y-5">
              {[
                ["运营公司", "佛山瑞龙国际酒店管理有限公司"],
                ["项目地址", "西樵镇碧霞路10号"],
                ["商业体量", "4.2万㎡"]
              ].map(([k, v]) => (
                <div key={k} data-reveal>
                  <dt className="t-small text-[var(--ink-soft)]">{k}</dt>
                  <dd className="text-[var(--ink)]">{v}</dd>
                </div>
              ))}
            </dl>
            <div>
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
              <ul className="t-body mt-8 grid max-w-[38rem] grid-cols-2 gap-x-10 gap-y-2 text-[var(--ink)] sm:grid-cols-4">
                {services.map((s) => (
                  <li key={s} data-reveal>
                    {s}
                  </li>
                ))}
              </ul>
              <p className="t-small mt-6 max-w-[44ch] text-[var(--ink-soft)]">涉及政策、补贴或特殊条件的信息，以实际沟通和确认文件为准。</p>
            </div>
          </div>
        </section>

        {/* 座机即标题，其下两位招商联系人 */}
        <section id="contact" className="bg-[var(--inverse)] text-[var(--ground)]">
          <div className="rl-frame flex flex-col gap-10 py-16 sm:min-h-[90svh] sm:justify-between sm:py-14">
            <p className="t-lead max-w-[22ch] font-semibold" data-reveal>
              预约看场或咨询入驻，直接拨打招商电话。
            </p>
            <div data-reveal>
              <p className="t-body opacity-80">{landline.label}</p>
              <a
                href={`tel:${landline.tel}`}
                className="tabular focus-ring block whitespace-nowrap font-display text-[clamp(2.5rem,10vw,9.5rem)] font-bold leading-none tracking-[-0.03em] transition-colors duration-300 hover:text-[var(--accent)]"
              >
                {landline.display}
              </a>
              <ul className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-8">
                {mobiles.map((m) => (
                  <li key={m.tel}>
                    <a href={`tel:${m.tel}`} className="focus-ring group block">
                      <span className="t-body block opacity-80">{m.name}</span>
                      <span className="tabular block font-display text-[clamp(1.75rem,1.2rem+2.4vw,3.25rem)] font-bold leading-tight transition-colors duration-300 group-hover:text-[var(--accent)]">
                        {m.display}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="t-small flex flex-col gap-3 opacity-80 sm:flex-row sm:justify-between">
              <p>佛山市南海区西樵镇碧霞路10号瑞龙国际商业中心</p>
              <p className="flex gap-6">
                <a href="#opportunities" className="rl-link">楼层业态</a>
                <a href="#inquiry" className="rl-link">在线留言</a>
              </p>
            </div>
          </div>
          <div id="inquiry" className="rl-frame grid gap-8 pb-28 pt-14 sm:pt-24 lg:grid-cols-12">
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
