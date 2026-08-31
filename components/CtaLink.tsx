type CtaLinkProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CtaLink({ children, className = "" }: CtaLinkProps) {
  return (
    <a className={`cta-link ${className}`.trim()} href="#contact">
      {children}
    </a>
  );
}
