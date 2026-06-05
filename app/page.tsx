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
import { RuilongInternationalLogo } from "@/components/RuilongInternationalLogo";
import { SectionHeading } from "@/components/SectionHeading";
import { SHOW_TEXTILE_ENTRY } from "@/components/siteFlags";

const badges = ["4.2万㎡商业体量", "西樵碧霞路10号", "商业+办公复合空间", "统一招商运营", "招商热线：13929936713"];

const coreValues = [
  ["区位客群", "位于西樵镇碧霞路10号，周边居住、办公、教育与日常消费场景集中。"],
  ["空间组合", "商业铺面、内街中庭、写字楼与配套空间组合，可承接不同经营尺度。"],
  ["业态适配", "餐饮、零售、教育、休闲体验、办公服务和生活配套均可沟通匹配。"],
  ["现场基础", "项目已有教育培训、商业铺面及办公场景，便于品牌判断真实经营环境。"],
  ["运营协同", "统一招商、统一运营、统一物业服务，降低品牌入驻后的沟通成本。"],
  ["合作开放", "面向品牌入驻、商业租赁、长期合作和产业资源合作开放洽谈。"]
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
  ["餐饮美食", "特色餐饮、品牌快餐、火锅烧烤、咖啡茶饮、轻食甜品等消费品牌"],
  ["精品零售", "生活超市、服饰配饰、母婴美妆、家居文创及社区零售"],
  ["教育培训", "早教启蒙、艺术培训、素质教育、成人技能培训等教育机构"],
  ["休闲体验", "美容护理、健身运动、亲子娱乐、棋牌桌球、文创体验"],
  ["商务办公", "企业办公、电商文创、专业服务、咨询机构与轻办公团队"],
  ["生活配套", "便利店、药房、家政服务、社区便民服务与本地生活品牌"]
];

const spaceTypes = ["临街铺面", "内街商铺", "中庭展示", "商务办公", "组合空间", "项目合作"];

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
  "场地看样",
  "商务对接",
  "物业维修",
  "业态匹配",
  "资料对接"
];

const floorPlans = [
  ["1F", "餐饮、咖啡茶饮、精品零售、生活服务及临街展示型品牌"],
  ["2F", "教育培训、休闲娱乐、体验业态、棋牌桌球等消费方向"],
  ["3F", "健身运动、商务办公、专业服务、综合配套等方向"]
];

const galleryImages = [
  {
    src: "/images/ruilong-international/hero-exterior-03.jpg",
    alt: "瑞龙国际招商中心外立面",
    caption: "项目外立面"
  },
  {
    src: "/images/ruilong-international/storefront-02.jpg",
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
    src: "/images/ruilong-international/office-lobby-02.jpg",
    alt: "瑞龙国际写字楼大堂",
    caption: "写字楼大堂"
  },
  {
    src: "/images/ruilong-international/commercial-courtyard-02.jpg",
    alt: "瑞龙国际商业内街和中庭空间",
    caption: "商业内街 / 中庭空间"
  },
  {
    src: "/images/ruilong-international/education-tenant-03.jpg",
    alt: "瑞龙国际教育培训业态门头",
    caption: "教育培训业态"
  },
  {
    src: "/images/ruilong-international/education-tenant-04.jpg",
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
    src: "/images/ruilong-international/office-lobby-02.jpg",
    alt: "瑞龙国际写字楼大堂",
    title: "写字楼大堂"
  },
  {
    src: "/images/ruilong-international/education-tenant-04.jpg",
    alt: "瑞龙国际教育培训现有业态",
    title: "教育培训现有业态"
  }
];

const sceneImages = [
  {
    src: "/images/ruilong-international/education-tenant-03.jpg",
    alt: "瑞龙国际教育培训门店场景",
    title: "教育培训场景"
  },
  {
    src: "/images/ruilong-international/education-tenant-04.jpg",
    alt: "瑞龙国际教育培训室内展示",
    title: "教育培训室内"
  },
  {
    src: "/images/ruilong-international/storefront-02.jpg",
    alt: "瑞龙国际商业铺面现状",
    title: "商业铺面场景"
  }
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#111c2e]">
        <Image
          src="/images/ruilong-international/hero-exterior-03.jpg"
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
            <RuilongInternationalLogo className="mb-6 shadow-lg shadow-black/20" imageClassName="h-20 w-auto sm:h-24" priority />
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[#d6b46a]">
              佛山市南海区西樵镇碧霞路10号
            </p>
            <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              瑞龙国际商业综合体招商
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/80">
              立足佛山南海西樵核心生活圈，面向品牌入驻、商业租赁、商务办公与项目合作开放招商。
            </p>
            <p className="mt-2 max-w-2xl text-xl font-semibold leading-9 text-[#f3d98f]">
              4.2万㎡商业体量｜实景空间可看样｜多元业态招商中
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#project">查看项目定位</ButtonLink>
              <ButtonLink href="#contact" variant="secondary">预约招商沟通</ButtonLink>
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
              ["项目定位", "商业、办公、教育、休闲与生活配套复合型项目"],
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
            title="4.2万㎡复合型商业招商项目"
            text="瑞龙国际位于佛山市南海区西樵镇碧霞路10号，以商业铺面、商务办公、教育培训、餐饮零售、休闲体验与生活服务为主要招商方向，服务周边社区消费、办公配套与品牌落地需求。"
          />
          <div className="rounded-lg border border-[#e6d8b8] bg-[#fffaf0] p-6 shadow-sm">
            <p className="text-base leading-8 text-muted">
              项目以“真实空间、清晰业态、统一运营”为招商基础，既适合餐饮、零售、教育、休闲与生活服务品牌入驻，也可承接企业办公、服务机构、项目合作及产业资源对接。具体面积、楼层、价格和合作条件以现场沟通为准。
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["品牌入驻", "商业租赁", "商务办公"].map((item) => (
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
            eyebrow="项目实景"
            title="现场空间与招商环境展示"
            text="通过项目实景视频快速了解建筑外立面、商业入口、公共空间、写字楼环境与现有经营场景，辅助品牌进行初步选址判断。"
          />
          <div className="overflow-hidden rounded-lg border border-[#e6d8b8] bg-[#111c2e] shadow-soft">
            <video
              controls
              preload="metadata"
              poster="/images/ruilong-international/hero-exterior-03.jpg"
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
            eyebrow="招商优势"
            title="面向品牌与企业的六项入驻价值"
            text="瑞龙国际以区位客群、空间组合、业态适配、现场基础、运营协同与合作开放为核心优势，帮助品牌更高效判断入驻可行性。"
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
            text="据项目周边调研资料显示，瑞龙国际周边2公里范围内覆盖居住、教育、餐饮、零售、酒店及公共服务等多类配套资源，为日常消费、亲子教育、商务往来和社区服务提供客群基础。"
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
              [MapPin, "西樵核心生活圈", "位于佛山市南海区西樵镇碧霞路10号，连接周边社区、办公、教育和公共服务场景。"],
              [Landmark, "多类配套聚集", "周边商业、酒店、公共服务及教育资源较为完善，适合承接复合型消费需求。"],
              [TrainFront, "到达条件清晰", "周边道路与公交站点为客流导入、商务往来和日常消费提供基础。"]
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
            text="以下图片展示瑞龙国际外立面、临街展示面、商业中心入口、写字楼大堂、商业内街、中庭空间与现有业态场景，便于品牌直观看到项目现状。"
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
            title="多元业态招商，补充区域消费与办公配套"
            text="围绕餐饮、零售、教育、休闲体验、商务办公与生活配套等方向开放咨询，适合品牌门店、服务机构、轻办公团队及长期合作伙伴洽谈。"
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
              title="4.2万㎡商业体量，覆盖多类空间需求"
              text="项目具备临街铺面、内街商铺、中庭展示、商务办公和组合空间等形态，可根据品牌调性、客流需求和经营面积进一步沟通匹配。"
            />
            <div className="rounded-lg border border-[#d6b46a] bg-[#fff8e7] p-5 text-sm leading-7 text-[#765b22]">
              具体可租面积、交付条件、楼层位置、费用方案及合作细节，以项目实际招商方案及现场沟通为准。
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {spaceTypes.map((item) => (
              <article key={item} className="rounded-lg border border-[#e6d8b8] bg-[#fffaf0] p-5 shadow-sm">
                <Building2 className="text-gold" size={26} />
                <h3 className="mt-4 text-lg font-bold text-navy">{item}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">可结合业态类型、经营面积、展示需求和到访客群进一步沟通匹配。</p>
              </article>
            ))}
          </div>
          <div className="lg:col-span-2">
            <p className="mb-5 max-w-3xl text-sm leading-7 text-muted">
              瑞龙国际具备商业铺面、商务办公、教育培训、休闲体验等多类空间形态。招商沟通可围绕楼层位置、门头展示、动线条件、用电用水、停车到达和物业服务等要点展开。
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
            title="开放品牌入驻、租赁与项目合作洽谈"
            text="瑞龙国际面向品牌方、企业客户、服务机构与产业资源伙伴，提供招商咨询、现场看样、空间匹配与后续合作沟通入口。"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cooperationModels.map((item, index) => (
              <article key={item} className="rounded-lg border border-[#e6d8b8] bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">{item}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">提交需求后，可进一步沟通合作方式、空间条件、入驻节奏与运营支持内容。</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="招商服务"
            title="统一招商、统一运营、统一物业服务"
            text="项目围绕招商对接、现场看样、物业服务、业态匹配和商务沟通提供支持。涉及政策、补贴或特殊条件的信息，以实际沟通和确认文件为准。"
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
            text="项目现场已具备教育培训、生活服务、商业铺面等实际经营与展示场景。后续招商可围绕餐饮、零售、教育、休闲、办公及生活配套等方向持续丰富，形成更完整的消费与服务组合。"
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
            text="以下为招商方向参考，具体楼层组合、面积划分和入驻条件以项目实际招商方案及现场沟通为准。"
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
            <p className="text-sm font-semibold tracking-[0.18em] text-[#d6b46a]">招商联系</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">预约看场与合作洽谈</h2>
            <p className="mt-4 text-sm leading-8 text-white/75">
              请留下合作类型、意向面积、业态方向和联系方式。瑞龙国际将根据您提交的信息安排项目沟通、资料对接或现场看样，相关信息仅用于招商合作联系。
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
