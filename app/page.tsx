import { Building2, CheckCircle2, Handshake, Landmark, MapPin, Store, TrainFront, Users } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeading } from "@/components/SectionHeading";

const businessTypes = [
  ["商业租赁", "面向品牌门店、服务业态、展示接待等商业空间需求，具体面积与条件以确认信息为准。"],
  ["办公合作", "适合需要在佛山西樵建立业务触点、接待窗口或区域协作空间的企业。"],
  ["品牌入驻", "支持零售、服务、展示、体验类品牌进行入驻咨询与合作洽谈。"],
  ["产业相关合作", "围绕纺织产业背景、商贸资源、服务配套和项目资源进行合作对接。"],
  ["配套服务合作", "面向商务服务、物流协同、运营服务、传播服务等服务机构开放合作沟通。"]
];

const cooperationModels = [
  ["租赁咨询", "了解空间需求、业态类型、使用场景与合作周期。"],
  ["品牌入驻", "沟通品牌定位、经营需求、展示方式与配套条件。"],
  ["项目合作", "围绕项目资源、商业运营、活动合作等方向进行洽谈。"],
  ["产业资源合作", "结合西樵及佛山产业背景，探索商贸、展示、服务和供应链相关合作。"],
  ["服务商合作", "引入专业服务能力，为项目运营、客户接待和企业合作提供支持。"]
];

const resources = [
  ["商业空间", "空间类型、平面信息、租赁条件等内容需在确认后更新。"],
  ["产业环境", "西樵具有纺织产业背景，可作为商贸和产业配套合作的现实基础。"],
  ["商务服务", "可围绕招商接待、需求沟通、信息整理和合作跟进提供支持。"],
  ["区域通达", "佛山位于粤港澳大湾区城市群，具体交通时间和线路以实际核验为准。"],
  ["沟通支持", "为品牌方、企业客户、服务机构和项目合作方提供清晰的咨询入口。"]
];

const notes = [
  "本页为招商合作首页，项目面积、租金、入驻品牌、优惠政策等信息需确认后再发布。",
  "Sanity CMS 继续保留产品、新闻、案例、下载、FAQ、联系方式、招商机会和商业空间等内容结构。",
  "瑞龙纺织网站继续保留在 /textile，并保留中英文切换、产品和询盘功能。"
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f7f3ea]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#111c2e_0%,#1b2c45_46%,#f7f3ea_46%,#fffaf0_100%)]" />
        <div className="container-page relative grid min-h-[calc(100vh-5rem)] items-center gap-10 py-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="text-white">
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[#d6b46a]">
              佛山西樵｜招商合作｜商业空间
            </p>
            <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              瑞龙国际招商合作平台
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/78">
              立足佛山西樵，面向商业空间、品牌入驻、项目合作与产业资源合作，提供招商咨询与合作对接。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#opportunities">了解招商业态</ButtonLink>
              <ButtonLink href="#contact" variant="secondary">联系咨询</ButtonLink>
              <ButtonLink href="/textile" variant="secondary">进入瑞龙纺织</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              ["项目介绍", "瑞龙国际作为招商合作平台，重点承接商业空间、品牌入驻和项目合作咨询。"],
              ["区位优势", "依托佛山西樵区域商业环境及产业背景，面向企业和品牌提供合作入口。"],
              ["合作提醒", "涉及面积、租金、政策、入驻品牌等信息，均以最终确认资料为准。"]
            ].map(([title, text]) => (
              <article key={title} className="rounded-lg border border-[#e6d8b8] bg-white/95 p-6 shadow-soft">
                <h2 className="text-2xl font-bold text-navy">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="project" className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading
            eyebrow="项目定位"
            title="瑞龙国际"
            text="瑞龙国际定位为招商合作与商务对接平台，当前以稳妥、可编辑的内容方式介绍项目方向，避免发布未经确认的建筑面积、租金、入驻率、政策或合作数据。"
          />
          <div className="rounded-lg border border-[#e6d8b8] bg-[#fffaf0] p-6 shadow-sm">
            <p className="text-base leading-8 text-muted">
              网站首页集中呈现项目介绍、区位优势、招商业态、合作模式、商业配套与联系咨询。后续可在确认项目资料后，通过 Sanity CMS 补充招商机会、商业空间、新闻动态、常见问题和联系方式。
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["招商合作", "商业空间", "项目合作"].map((item) => (
                <div key={item} className="rounded-lg bg-white px-4 py-3 text-center text-sm font-semibold text-navy">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="section bg-[#f7f3ea]">
        <div className="container-page">
          <SectionHeading
            eyebrow="区位优势"
            title="佛山西樵，连接区域商业与产业资源"
            text="西樵位于佛山，具备区域商业、产业和服务资源基础。页面仅作稳妥介绍，不虚构政府支持、奖项资质、市场规模或招商数字。"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [MapPin, "区域基础", "立足佛山西樵，便于对接本地商业、产业和服务资源。"],
              [Landmark, "产业背景", "西樵具有纺织相关产业背景，可延展商贸、展示与产业配套合作。"],
              [TrainFront, "通达条件", "区域交通和物流信息应以实际核验后发布的内容为准。"]
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

      <section id="commercial-space" className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="商业空间"
              title="面向入驻与合作的空间咨询"
              text="可用于展示商业铺位、办公空间、品牌接待、项目合作等方向。实际面积、楼层、价格、租赁条件和照片需确认后再上线。"
            />
            <div className="rounded-lg border border-[#d6b46a] bg-[#fff8e7] p-5 text-sm leading-7 text-[#765b22]">
              内容提示：请勿在未确认前发布建筑面积、租金、入驻率、租户名称、政府补贴、奖项证书或投资金额。
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["临街商业空间", "办公及服务空间", "品牌展示接待", "项目合作空间"].map((item) => (
              <article key={item} className="rounded-lg border border-[#e6d8b8] bg-[#fffaf0] p-5 shadow-sm">
                <Building2 className="text-gold" size={26} />
                <h3 className="mt-4 text-lg font-bold text-navy">{item}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">待项目资料确认后补充具体说明。</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="opportunities" className="section bg-[#f7f3ea]">
        <div className="container-page">
          <SectionHeading
            eyebrow="招商业态"
            title="适合沟通的合作方向"
            text="以下方向用于早期招商沟通，后续可根据空间条件、项目定位和运营计划进一步细化。"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {businessTypes.map(([title, text]) => (
              <article key={title} className="rounded-lg border border-[#e6d8b8] bg-white p-5 shadow-sm">
                <Store className="text-gold" size={26} />
                <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cooperation" className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="合作模式"
            title="从咨询到对接的合作路径"
            text="瑞龙国际可接收品牌方、商业租户、服务机构、产业合作伙伴的早期咨询，并根据需求进行整理和跟进。"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {cooperationModels.map(([title, text], index) => (
              <div key={title} className="flex gap-4 rounded-lg border border-[#e6d8b8] bg-[#fffaf0] p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="section bg-[#f7f3ea]">
        <div className="container-page">
          <SectionHeading
            eyebrow="商业配套"
            title="支持招商合作的资源方向"
            text="本部分仅介绍可沟通的支持方向，不发布未经核验的优惠政策、合作名单、荣誉资质或经营数据。"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {resources.map(([title, text]) => (
              <article key={title} className="rounded-lg border border-[#e6d8b8] bg-white p-5 shadow-sm">
                <Users className="text-gold" size={26} />
                <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="内容管理"
            title="招商内容与纺织内容分开维护"
            text="现有 Sanity CMS 不移除，纺织网站功能继续保留；招商网站新增的招商机会与商业空间内容结构可用于后续维护。"
          />
          <div className="grid gap-4">
            {notes.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-[#e6d8b8] bg-[#fffaf0] p-4 shadow-sm">
                <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={20} />
                <span className="text-sm leading-7 text-muted">{item}</span>
              </div>
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
            <div className="mt-6 flex gap-3 rounded-lg bg-white/10 p-4 text-sm leading-7 text-white/75">
              <Handshake className="mt-1 shrink-0 text-[#d6b46a]" size={22} />
              <span>租赁条件、项目数据和商业空间详情，将在直接沟通和资料确认后进一步说明。</span>
            </div>
          </div>
          <InquiryForm formType="Investment Inquiry" title="招商合作咨询" />
        </div>
      </section>
    </>
  );
}
