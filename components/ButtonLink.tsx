import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: ButtonLinkProps) {
  const styles = {
    primary: "bg-navy text-white hover:bg-charcoal",
    secondary: "border border-navy bg-white text-navy hover:bg-slate-50",
    ghost: "text-navy hover:bg-slate-100"
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
