import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: ReactNode;
  ariaLabelledBy?: string;
  style?: React.CSSProperties;
}

export default function SectionWrapper({ id, className, children, ariaLabelledBy, style }: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy || `${id}-heading`}
      className={cn('section-padding', className)}
      style={style}
    >
      <div className="container-mx">
        {children}
      </div>
    </section>
  );
}
