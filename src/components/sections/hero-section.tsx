
import SectionWrapper from '@/components/layout/section-wrapper';
import TypingAnimation from '@/components/ui/typing-animation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const roles = ["Senior DevOps Engineer"]; 

  return (
    <SectionWrapper 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-background via-background to-secondary/50" // More subtle gradient
      ariaLabelledBy="hero-heading"
    >
      
      <div className="relative z-10"> {/* Content wrapper */}
        <h1 id="hero-heading" className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-foreground mb-6">
          Anoop P Hegde
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground mb-10"> {/* Increased bottom margin */}
          I&apos;m a <TypingAnimation strings={roles} className="font-semibold text-primary" />
        </p>
        <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg">
          <Link href="#profile">
            Discover More <ArrowDown className="ml-2.5 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
