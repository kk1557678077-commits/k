import {
  Building2,
  CheckCircle2,
  Handshake,
  Landmark,
  MapPin,
  Phone,
  Store,
  TrainFront,
  Users
} from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeading } from "@/components/SectionHeading";
import { SHOW_TEXTILE_ENTRY } from "@/components/siteFlags";

const badges = ["4.2万㎡商业体量", "西樵核心区域", "多元业态组合", "统一招商运营", "招商热线：13929936713"];

const coreValues = [
  ["地段价值", "政务、商业、居住多重核心，坐享成熟商圈基础。"],
  ["交通价值", "周边道路连接便捷，利于客流导入与商务往来。"],
  ["规划价值", "多业态组合，满足一站式消费与办公需求。"],
  ["产品价值", "商业空间与商务办公空间组合，适配多类品牌与企业。"],
  ["运营价值", "统一招商、统一运营、统一物业管理，提升商业秩序与经营稳定性。"],
  ["合作价值", "面向品牌入驻、商业租赁、项目合作与产业资源合作开放。"]
];

const researchStats = [
  ["约10.20万人", "周边2km常驻人口"],
  ["83个", "周边小区"],
  ["约6.84万人", "周边居住人口"],
  ["48个", "周边公交站点"],
  ["145所", "周边教育配套"],
  ["约730家", "周边餐饮门店"],
  ["约2017家", "周边零售门店"]
];

const businessTypes = [
  ["餐饮美食", "特色中餐、品牌快餐、火锅烧烤、咖啡茶饮、轻食甜品"],
  ["精品零售", "生活超市、时尚服饰、母婴美妆、家居文创"],
  ["教育培训", "早教启蒙、艺术培训、学科辅导、成人技能培训"],
  ["休闲体验", "美容SPA、健身塑形、亲子娱乐、文创体验"],
  ["商务办公", "企业办公、电商文创、金融咨询、专业服务"],
  ["生活配套", "便利店、药房、家政服务、社区便民服务"]
];

const spaceTypes = ["商业铺面", "商务办公", "灵活组合空间", "品牌入驻", "长期租赁", "项目合作"];

const cooperationModels = [
  "品牌入驻",
  "商业租赁",
  "联营合作",
  "办公空间合作",
  "产业资源合作",
  "服务商合作"
];

const supportItems = [
  "统一招商",
  "统一运营",
  "统一物业",
  "活动推广",
  "商务对接",
  "物业维修",
  "工商注册咨询",
  "政策信息对接"
];

const floorPlans = [
  ["1F", "餐饮、咖啡茶饮、精品零售、生活精品"],
  ["2F", "休闲娱乐、体验业态、棋牌桌球、电玩娱乐等方向"],
  ["3F", "健身运动、办公服务、综合配套等方向"]
];

const galleryImages = [
  {
    src: "/images/ruilong-international/hero-exterior-01.jpg",
    alt: "瑞龙国际招商中心外立面",
    caption: "项目外立面"
  },
  {
    src: "/images/ruilong-international/building-front-01.jpg",
    alt: "瑞龙国际商业中心临街展示面",
    caption: "临街展示面"
  },
  {
    src: "/images/ruilong-international/commercial-center-entrance-01.jpg",
    alt: "瑞龙国际商业中心入口及招牌",
    caption: "商业中心入口"
  },
  {
    src: "/images/ruilong-international/office-tower-01.jpg",
    alt: "瑞龙国际写字楼外景",
    caption: "写字楼外景"
  },
  {
    src: "/images/ruilong-international/office-lobby-01.jpg",
    alt: "瑞龙国际写字楼大堂",
    caption: "写字楼大堂"
  },
  {
    src: "/images/ruilong-international/commercial-courtyard-02.jpg",
    alt: "瑞龙国际商业内街和中庭空间",
    caption: "商业内街 / 中庭空间"
  },
  {
    src: "/images/ruilong-international/education-tenant-01.jpg",
    alt: "瑞龙国际教育培训业态门头",
    caption: "教育培训业态"
  },
  {
    src: "/images/ruilong-international/commercial-streetfront-01.jpg",
    alt: "瑞龙国际商业铺面展示",
    caption: "商业铺面展示"
  }
];

const spaceImages = [
  {
    src: "/images/ruilong-international/commercial-courtyard-02.jpg",
    alt: "瑞龙国际中庭与内街空间",
    title: "中庭 / 内街空间"
  },
  {
    src: "/images/ruilong-international/office-tower-01.jpg",
    alt: "瑞龙国际写字楼外景",
    title: "写字楼外景"
  },
  {
    src: "/images/ruilong-international/office-lobby-01.jpg",
    alt: "瑞龙国际写字楼大堂",
    title: "写字楼大堂"
  },
  {
    src: "/images/ruilong-international/education-tenant-02.jpg",
    alt: "瑞龙国际教育培训现有业态",
    title: "教育培训现有业态"
  }
];

const sceneImages = [
  {
    src: "/images/ruilong-international/education-tenant-01.jpg",
    alt: "瑞龙国际教育培训门店场景",
    title: "教育培训场景"
  },
  {
    src: "/images/ruilong-international/education-tenant-02.jpg",
    alt: "瑞龙国际教育培训室内展示",
    title: "教育培训室内"
  },
  {
    src: "/images/ruilong-international/commercial-shopfront-01.jpg",
    alt: "瑞龙国际商业铺面现状",
    title: "商业铺面场景"
  }
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#111c2e]">
        <Image
          src="/images/ruilong-international/hero-exterior-01.jpg"
          alt="瑞龙国际招商中心建筑外立面"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#07111f]/72" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.95)_0%,rgba(7,17,31,0.72)_46%,rgba(7,17,31,0.38)_100%)]" />
        <div className="container-page relative grid min-h-[calc(100vh-5rem)] items-center gap-10 py-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="text-white">
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[#d6b46a]">
              佛山市南海区西樵镇碧霞路10号
            </p>
            <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              瑞龙国际招商合作平台
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/80">
              佛山市南海区西樵镇碧霞路10号
            </p>
            <p className="mt-2 max-w-2xl text-xl font-semibold leading-9 text-[#f3d98f]">
              4.2万㎡商业体量｜多元业态招商中
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#project">了解招商信息</ButtonLink>
              <ButtonLink href="#contact" variant="secondary">提交合作咨询</ButtonLink>
              {SHOW_TEXTILE_ENTRY && (
                <ButtonLink href="/textile" variant="secondary">进入瑞龙纺织</ButtonLink>
              )}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span key={badge} className="rounded-full border border-[#d6b46a]/50 bg-white/10 px-4 py-2 text-sm font-semibold text-[#f3d98f]">
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {[
              ["项目定位", "综合性商业综合体 / 城市级综合体"],
              ["运营主体", "佛山瑞龙国际酒店管理有限公司"],
              ["招商热线", "13929936713"]
            ].map(([title, text]) => (
              <article key={title} className="rounded-lg border border-[#d6b46a]/70 bg-[#081220]/90 p-7 shadow-soft shadow-black/20 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-amber-300 drop-shadow-sm">{title}</h2>
                <p className="mt-3 text-lg font-bold leading-8 text-slate-50 drop-shadow-sm">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="project" className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading
            eyebrow="项目概况"
            title="4.2万㎡城市级商业综合体"
            text="瑞龙国际立足佛山市南海区西樵镇核心区域，集商务办公、精品零售、特色餐饮、休闲体验、教育培训与生活配套等多元业态于一体，致力于打造区域商业综合体与招商合作平台。"
          />
          <div className="rounded-lg border border-[#e6d8b8] bg-[#fffaf0] p-6 shadow-sm">
            <p className="text-base leading-8 text-muted">
              瑞龙国际位于佛山市南海区西樵镇碧霞路10号，项目定位为综合性商业综合体，围绕商业空间、商务办公、餐饮零售、休闲体验、教育培训及生活服务等方向开展招商合作。
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["招商合作", "商业空间", "商务办公"].map((item) => (
                <div key={item} className="rounded-lg bg-white px-4 py-3 text-center text-sm font-semibold text-navy">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#f7f3ea]">
        <div className="container-page">
          <SectionHeading
            eyebrow="项目视频"
            title="项目实景视频"
            text="通过项目实景视频，了解瑞龙国际商业空间、楼宇外立面、现有业态与整体招商环境。"
          />
          <div className="overflow-hidden rounded-lg border border-[#e6d8b8] bg-[#111c2e] shadow-soft">
            <video
              controls
              preload="metadata"
              poster="/images/ruilong-international/hero-exterior-01.jpg"
              className="aspect-video w-full bg-black object-cover"
            >
              <source src="/videos/project-video.mp4" type="video/mp4" />
              您的浏览器暂不支持视频播放。
            </video>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="核心价值"
            title="面向品牌与企业的综合商业价值"
            text="项目以地段、交通、规划、产品、运营与合作价值为招商基础，适配多类商业品牌与商务办公需求。"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map(([title, text]) => (
              <article key={title} className="rounded-lg border border-[#e6d8b8] bg-white p-6 shadow-sm">
                <CheckCircle2 className="text-gold" size={26} />
                <h3 className="mt-4 text-xl font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="区位与周边配套"
            title="覆盖居住、教育、餐饮、零售与公共服务资源"
            text="据项目周边调研资料显示，瑞龙国际周边2公里范围内覆盖居住、教育、餐饮、零售、酒店及公共服务等多类配套资源，为商业运营与品牌入驻提供现实客群与消费场景基础。"
          />
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {researchStats.map(([value, label]) => (
              <article key={label} className="rounded-lg border border-[#e6d8b8] bg-[#fffaf0] p-5 shadow-sm">
                <div className="text-2xl font-bold text-navy">{value}</div>
                <p className="mt-2 text-sm leading-6 text-muted">{label}</p>
              </article>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [MapPin, "核心区位", "位于佛山市南海区西樵镇碧霞路10号，连接周边政务、商业与居住场景。"],
              [Landmark, "成熟配套", "周边商业、酒店、公共服务及教育资源较为完善。"],
              [TrainFront, "便捷连接", "周边道路与公交站点为客流导入、商务往来和日常消费提供基础。"]
            ].map(([Icon, title, text]) => {
              const CardIcon = Icon as typeof MapPin;
              return (
                <article key={String(title)} className="rounded-lg border border-[#e6d8b8] bg-white p-6 shadow-sm">
                  <CardIcon className="text-gold" size={28} />
                  <h3 className="mt-4 text-xl font-bold text-navy">{String(title)}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{String(text)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-[#f7f3ea]">
        <div className="container-page">
          <SectionHeading
            eyebrow="实景图册"
            title="项目实景展示"
            text="以下图片展示瑞龙国际外立面、临街展示面、商业中心入口、写字楼空间、商业内街与现有业态场景。"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-lg border border-[#e6d8b8] bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm font-semibold text-navy">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="opportunities" className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="招商业态"
            title="多元业态组合，服务一站式消费与办公需求"
            text="围绕餐饮、零售、教育、体验、办公与生活配套等方向，面向品牌入驻、商业租赁和项目合作开放咨询。"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {businessTypes.map(([title, text]) => (
              <article key={title} className="rounded-lg border border-[#e6d8b8] bg-white p-6 shadow-sm">
                <Store className="text-gold" size={28} />
                <h3 className="mt-4 text-xl font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="commercial-space" className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="商业空间"
              title="4.2万㎡商业体量，支持灵活合作"
              text="项目面向商业铺面、商务办公、灵活组合空间、品牌入驻、长期租赁与项目合作等多种需求开放沟通。"
            />
            <div className="rounded-lg border border-[#d6b46a] bg-[#fff8e7] p-5 text-sm leading-7 text-[#765b22]">
              具体空间面积、楼层条件、租赁方案及合作细节，以项目实际招商方案及现场沟通为准。
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {spaceTypes.map((item) => (
              <article key={item} className="rounded-lg border border-[#e6d8b8] bg-[#fffaf0] p-5 shadow-sm">
                <Building2 className="text-gold" size={26} />
                <h3 className="mt-4 text-lg font-bold text-navy">{item}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">可根据品牌和企业需求进一步沟通匹配。</p>
              </article>
            ))}
          </div>
          <div className="lg:col-span-2">
            <p className="mb-5 max-w-3xl text-sm leading-7 text-muted">
              瑞龙国际具备商业铺面、商务办公、教育培训、休闲体验等多类空间形态，可根据不同品牌与经营需求进行沟通匹配。
            </p>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {spaceImages.map((image) => (
                <figure key={image.src} className="overflow-hidden rounded-lg border border-[#e6d8b8] bg-white shadow-sm">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-sm font-semibold text-navy">{image.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cooperation" className="section bg-[#f7f3ea]">
        <div className="container-page">
          <SectionHeading
            eyebrow="合作模式"
            title="开放多类型合作洽谈"
            text="瑞龙国际面向品牌方、企业客户、服务机构与产业资源伙伴，提供清晰的招商咨询入口。"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cooperationModels.map((item, index) => (
              <article key={item} className="rounded-lg border border-[#e6d8b8] bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">{item}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">提交需求后，可根据实际情况进一步沟通合作方式与支持内容。</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="运营与服务支持"
            title="统一招商、统一运营、统一物业"
            text="围绕招商运营、物业服务、活动推广和商务对接提供支持。政策信息可根据实际情况沟通相关支持，不作未经确认的承诺。"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-[#e6d8b8] bg-[#fffaf0] p-4 shadow-sm">
                <Users className="shrink-0 text-gold" size={22} />
                <span className="font-semibold text-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#f7f3ea]">
        <div className="container-page">
          <SectionHeading
            eyebrow="经营场景"
            title="现有业态与经营场景"
            text="项目现场已具备教育培训、生活服务、商业铺面等实际经营与展示场景，后续招商可围绕餐饮、零售、教育、休闲、办公及生活配套等方向持续完善。"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {sceneImages.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-lg border border-[#e6d8b8] bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm font-semibold text-navy">{image.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="空间规划方向"
            title="楼层业态规划参考"
            text="以下为招商方向展示，具体规划以项目实际招商方案及现场沟通为准。"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {floorPlans.map(([floor, text]) => (
              <article key={floor} className="rounded-lg border border-[#e6d8b8] bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-gold">{floor}</div>
                <p className="mt-4 text-base font-semibold leading-8 text-navy">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-[#111c2e] text-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-[#d6b46a]">联系咨询</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">提交招商合作咨询</h2>
            <p className="mt-4 text-sm leading-8 text-white/75">
              请留下合作类型、空间需求和业态类型。瑞龙国际将根据您提交的信息进行项目沟通，相关信息仅用于招商合作联系。
            </p>
            <div className="mt-6 grid gap-3 rounded-lg bg-white/10 p-5 text-sm leading-7 text-white/78">
              <div className="flex gap-3"><MapPin className="mt-1 shrink-0 text-[#d6b46a]" size={20} />佛山市南海区西樵镇碧霞路10号瑞龙国际商业中心</div>
              <div className="flex gap-3"><Phone className="mt-1 shrink-0 text-[#d6b46a]" size={20} />招商热线：13929936713</div>
              <div className="flex gap-3"><Handshake className="mt-1 shrink-0 text-[#d6b46a]" size={20} />运营公司：佛山瑞龙国际酒店管理有限公司</div>
            </div>
          </div>
          <InquiryForm formType="Investment Inquiry" title="招商合作咨询" />
        </div>
      </section>
    </>
  );
}
