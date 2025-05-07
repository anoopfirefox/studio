
import SectionWrapper from '@/components/layout/section-wrapper';
import TypingAnimation from '@/components/ui/typing-animation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const roles = ["Developer", "Designer", "Freelancer", "Photographer"]; // Example roles

  return (
    <SectionWrapper 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-background to-secondary" // Subtle gradient
      style={{ 
        // backgroundImage: `url('https://picsum.photos/seed/hero-bg/1920/1080')`, // Optional background image
        // backgroundSize: 'cover',
        // backgroundPosition: 'center'
      }}
      ariaLabelledBy="hero-heading"
    >
      {/* Optional: If using background image, add an overlay for text readability
      <div className="absolute inset-0 bg-black/30 z-0"></div> */}
      
      <div className="relative z-10"> {/* Content wrapper */}
        <h1 id="hero-heading" className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-foreground mb-4">
          Anoop p hegde
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground mb-8">
          I&apos;m a <TypingAnimation strings={roles} className="font-semibold text-primary" />
        </p>
        <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-shadow">
          <Link href="#profile">
            Discover More <ArrowDown className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}

