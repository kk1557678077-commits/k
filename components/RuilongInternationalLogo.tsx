import Image from "next/image";

type RuilongInternationalLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function RuilongInternationalLogo({
  className = "",
  imageClassName = "h-12 w-auto",
  priority = false
}: RuilongInternationalLogoProps) {
  return (
    <span className={`inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 ${className}`}>
      <Image
        src="/images/ruilong-international/logo-ruilong-international.jpg"
        alt="瑞龙国际 Ruilong International 标志"
        width={806}
        height={895}
        priority={priority}
        className={`object-contain ${imageClassName}`}
      />
    </span>
  );
}
