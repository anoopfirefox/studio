interface SectionTitleProps {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ id, title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 
        id={id || `${title.toLowerCase().replace(/\s+/g, '-')}-heading`} 
        className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-foreground mb-2 relative pb-3 
                   after:content-[''] after:absolute after:left-0 after:bottom-0 
                   after:w-16 after:h-1 after:bg-primary"
      >
        {title}
      </h2>
      {subtitle && <p className="text-muted-foreground mt-3 text-base md:text-lg">{subtitle}</p>}
    </div>
  );
}
