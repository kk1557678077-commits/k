import { Building2, CheckCircle2, Handshake, MapPin, Network, Store, Truck, Users } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeading } from "@/components/SectionHeading";

const opportunityItems = [
  ["Commercial leasing", "Editable content: describe available shop, office or commercial space after the verified project details are confirmed."],
  ["Office cooperation", "Flexible cooperation discussions for companies needing a Xiqiao-facing business presence."],
  ["Retail and service brands", "Suitable for brands that want to evaluate local customer traffic, service demand or regional expansion potential."],
  ["Industry-related cooperation", "Cooperation around textile-adjacent trade, display, sourcing, design, service and supply chain resources."],
  ["Supporting services", "Service provider entry for business services, logistics coordination, communication support and professional operations."]
];

const cooperationModels = [
  "Leasing inquiry",
  "Brand entry",
  "Project cooperation",
  "Industry resource cooperation",
  "Service provider cooperation"
];

const resources = [
  ["Commercial space", "Project space information should be edited after floor plans, address details and leasing conditions are confirmed."],
  ["Local industry environment", "Xiqiao is known for textile-related industry activity in Foshan; specific partner or market claims should be added only after verification."],
  ["Business services", "Communication, reception, inquiry handling and basic project matching can be described here as operations mature."],
  ["Logistics and regional access", "Foshan and the Guangdong-Hong Kong-Macao Greater Bay Area provide regional access; exact transport times should be confirmed before publishing."],
  ["Communication support", "Chinese and English communication support for interested partners, brands, service providers and project visitors."]
];

const cmsNotes = [
  "Sanity CMS remains active for Products, News, Cases, Downloads, FAQ and Contact Info.",
  "New CMS document types are prepared for Investment Opportunities and Commercial Space.",
  "This homepage uses static fallback content first, so the investment site can launch safely before final project details are verified."
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#f8fafc_0%,#eef6f8_48%,#fff8eb_100%)]" />
        <div className="container-page relative grid min-h-[calc(100vh-5rem)] items-center gap-10 py-14 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Xiqiao, Foshan, Guangdong
            </p>
            <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Ruilong International Business & Investment Cooperation
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Connecting commercial space, local industry resources and business cooperation opportunities in Xiqiao, Foshan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#opportunities">Explore Opportunities</ButtonLink>
              <ButtonLink href="#contact" variant="secondary">Contact Us</ButtonLink>
              <ButtonLink href="/textile" variant="ghost">Ruilong Textile</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              ["Commercial leasing", "Space information pending verified project details"],
              ["Business cooperation", "Brand, service provider and project discussions"],
              ["Industry resources", "Textile background referenced carefully without unverified numbers"]
            ].map(([title, text]) => (
              <article key={title} className="rounded-lg border border-line bg-white/90 p-6 shadow-soft">
                <h2 className="text-xl font-bold text-navy">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading
            eyebrow="Project overview"
            title="About Ruilong International"
            text="Ruilong International is being positioned as a business cooperation and investment attraction platform based in Xiqiao, Foshan, Guangdong, China."
          />
          <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
            <p className="text-base leading-8 text-muted">
              This website introduces commercial cooperation directions, leasing inquiries, project cooperation and supporting resources. Current content is intentionally conservative and editable, so verified building information, rental terms, partner names and project data can be added later without publishing unconfirmed claims.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Investment attraction", "Commercial leasing", "Business cooperation"].map((item) => (
                <div key={item} className="rounded-lg bg-slate-50 px-4 py-3 text-sm font-semibold text-navy">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Location advantage"
            title="Xiqiao, Foshan, Guangdong"
            text="Ruilong International is connected to Xiqiao's regional commercial environment and Foshan's broader industry background. The textile industry context is referenced carefully, without unverified scale, award or tenant claims."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [MapPin, "Regional base", "Located in Xiqiao, Foshan, with access to Guangdong's business environment."],
              [Network, "Industry context", "Textile-related resources are part of the local background and can support adjacent cooperation discussions."],
              [Truck, "Regional access", "Regional logistics and visitor access details should be updated with verified transport information."]
            ].map(([Icon, title, text]) => {
              const CardIcon = Icon as typeof MapPin;
              return (
                <article key={String(title)} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                  <CardIcon className="text-gold" size={26} />
                  <h3 className="mt-4 text-lg font-bold text-navy">{String(title)}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{String(text)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="commercial-space" className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Commercial space"
              title="Editable Leasing Information"
              text="Use this section for verified space types, floor plans, lease conditions, address details and project photos when they are ready."
            />
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
              Placeholder note: do not publish building size, rental price, occupancy rate or tenant information until the details are confirmed.
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Street-facing commercial space", "Office and service space", "Brand display and reception", "Project cooperation area"].map((item) => (
              <article key={item} className="rounded-lg border border-line bg-white p-5 shadow-sm">
                <Building2 className="text-gold" size={24} />
                <h3 className="mt-4 text-base font-bold text-navy">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Editable after confirmed project information is available.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="opportunities" className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Investment opportunities"
            title="Cooperation Directions"
            text="The following directions are suitable for early-stage discussion and can be refined after project details, available spaces and cooperation policies are confirmed."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {opportunityItems.map(([title, text]) => (
              <article key={title} className="rounded-lg border border-line bg-white p-5 shadow-sm">
                <Store className="text-gold" size={24} />
                <h3 className="mt-4 text-base font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cooperation" className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Business cooperation"
            title="Cooperation Models"
            text="Ruilong International can receive early inquiries from brands, commercial tenants, service providers and industry-related partners."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {cooperationModels.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-lg border border-line bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-navy">{item}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">Inquiry details can be reviewed and followed up by the project team.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Supporting resources"
            title="Resources for Cooperation"
            text="This section introduces support areas without claiming unverified preferential policies, awards, certifications or investment numbers."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {resources.map(([title, text]) => (
              <article key={title} className="rounded-lg border border-line bg-white p-5 shadow-sm">
                <Users className="text-gold" size={24} />
                <h3 className="mt-4 text-base font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="CMS readiness"
              title="Sanity Structure Kept and Extended"
              text="The current textile CMS remains in place. New editable document types are added for the investment website, while this page uses safe static fallback content first."
            />
          </div>
          <div className="grid gap-4">
            {cmsNotes.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={20} />
                <span className="text-sm leading-6 text-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-navy text-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Contact / inquiry</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Start an Investment Inquiry</h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              Tell us your cooperation type, space requirement and business category. Ruilong International will use the information for project communication only.
            </p>
            <div className="mt-6 flex gap-3 rounded-lg bg-white/10 p-4 text-sm leading-6 text-white/75">
              <Handshake className="mt-1 shrink-0 text-gold" size={22} />
              <span>Rental terms, project figures and detailed space information will be confirmed through direct communication before publication.</span>
            </div>
          </div>
          <InquiryForm formType="Investment Inquiry" title="Investment Inquiry" />
        </div>
      </section>
    </>
  );
}
