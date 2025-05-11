
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AppSidebar from '@/components/layout/app-sidebar';
import HeroSection from '@/components/sections/hero-section'; 
import ProfileSection from '@/components/sections/profile-section'; 
import ExperienceSection from '@/components/sections/experience-section'; 
import ProjectsSection from '@/components/sections/projects-section'; 
import CertificationsSection from '@/components/sections/certifications-section'; 
import ContactUsSection from '@/components/sections/contact-us-section'; 
import AppFooter from '@/components/layout/app-footer';
import MobileSidebarToggle from '@/components/layout/mobile-sidebar-toggle';
import React from 'react'; // Added missing React import

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col min-h-screen bg-background">
        {/* Mobile Sidebar Toggle Button Container */}
        {/* This div is hidden on medium screens and up by Tailwind's `md:hidden` class. */}
        {/* The MobileSidebarToggle component itself will always render its button structure. */}
        <div className="md:hidden fixed top-4 left-4 z-50">
          <MobileSidebarToggle />
        </div>
        
        <main className="flex-grow pt-16 md:pt-0"> {/* Top padding for mobile to avoid overlap with toggle */}
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
