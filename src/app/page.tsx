
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'; // Removed SidebarTrigger from here
import AppSidebar from '@/components/layout/app-sidebar';
import HeroSection from '@/components/sections/hero-section'; 
import ProfileSection from '@/components/sections/profile-section'; 
import ExperienceSection from '@/components/sections/experience-section'; 
import ProjectsSection from '@/components/sections/projects-section'; 
import CertificationsSection from '@/components/sections/certifications-section'; 
import ContactUsSection from '@/components/sections/contact-us-section'; 
import AppFooter from '@/components/layout/app-footer';
import MobileSidebarToggle from '@/components/layout/mobile-sidebar-toggle'; // New import
import React from 'react';

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col min-h-screen bg-background">
        {/* Mobile Sidebar Toggle Button */}
        <div className="md:hidden fixed top-4 left-4 z-50">
          <MobileSidebarToggle /> {/* Use the new component */}
        </div>
        
        <main className="flex-grow pt-16 md:pt-0"> {/* Added top padding for mobile */}
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

