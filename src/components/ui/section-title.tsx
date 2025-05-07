interface SectionTitleProps {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ id, title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${className}`}> {/* Increased bottom margin for more space between sections */}
      <h2 
        id={id || `${title.toLowerCase().replace(/\s+/g, '-')}-heading`} 
        className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-foreground mb-4 relative pb-4 
                   after:content-[''] after:absolute after:left-0 after:bottom-0 
                   after:w-24 after:h-[3px] after:bg-primary" // Adjusted underline and margins
      >
        {title}
      </h2>
      {subtitle && <p className="text-muted-foreground mt-4 text-base md:text-lg">{subtitle}</p>} {/* Adjusted top margin */}
    </div>
  );
}
