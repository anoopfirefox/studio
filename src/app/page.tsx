import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/layout/app-sidebar';
import HeroSection from '@/components/sections/hero-section';
import ProfileSection from '@/components/sections/profile-section'; 
import ExperienceSection from '@/components/sections/experience-section'; 
import ProjectsSection from '@/components/sections/projects-section'; 
import CertificationsSection from '@/components/sections/certifications-section'; 
import ContactUsSection from '@/components/sections/contact-us-section'; 
import AppFooter from '@/components/layout/app-footer';
import { Button } from '@/components/ui/button';
import { PanelLeftOpen } from 'lucide-react';
import React from 'react';

export default function Home() {
  // For desktop, open by default. Cookie will take over for subsequent visits.
  // For mobile, it's controlled by openMobile state in SidebarProvider, triggered by button.
  const isInitiallyMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <SidebarProvider defaultOpen={!isInitiallyMobile}>
      <AppSidebar />
      <SidebarInset className="flex flex-col min-h-screen bg-background">
        {/* Mobile Sidebar Toggle Button */}
        <div className="md:hidden p-3 fixed top-3 left-3 z-50"> {/* Adjusted padding and positioning */}
          <SidebarTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full shadow-lg bg-card hover:bg-card/80 text-card-foreground border-border/70">
                <PanelLeftOpen className="h-5 w-5" />
                <span className="sr-only">Toggle sidebar</span>
            </Button>
          </SidebarTrigger>
        </div>
        
        <main className="flex-grow">
          <HeroSection />
          <ProfileSection />
          <ProjectsSection />
          <ExperienceSection />
          <CertificationsSection />
          <ContactUsSection />
        </main>
        <AppFooter />
      </SidebarInset>
    </SidebarProvider>
  );
}
