import { MapPin } from "lucide-react";

type EmbeddedMapProps = {
  address: string;
  title: string;
  placeholderText: string;
};

export function EmbeddedMap({ address, title, placeholderText }: EmbeddedMapProps) {
  const mapUrl = process.env.NEXT_PUBLIC_MAP_EMBED_URL;
  const canEmbed = Boolean(mapUrl && /^https?:\/\//.test(mapUrl));

  return (
    <section className="rounded-lg border border-line bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-navy">
          <MapPin size={20} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-navy">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-muted">{address}</p>
        </div>
      </div>

      {canEmbed ? (
        <div className="aspect-[16/10] overflow-hidden rounded-lg border border-line bg-slate-50">
          <iframe
            src={mapUrl}
            title={title}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/10] min-h-64 items-center justify-center rounded-lg border border-dashed border-line bg-slate-50 p-6 text-center">
          <div>
            <MapPin className="mx-auto text-gold" size={28} />
            <p className="mt-3 text-sm font-semibold text-navy">{placeholderText}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{address}</p>
          </div>
        </div>
      )}
    </section>
  );
}
