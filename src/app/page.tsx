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
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col min-h-screen bg-background">
        {/* Mobile Sidebar Toggle Button */}
        <div className="md:hidden fixed top-4 left-4 z-50"> {/* Adjusted positioning */}
          <SidebarTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full shadow-md bg-card hover:bg-card/80 text-card-foreground border-border/70">
                <PanelLeftOpen className="h-5 w-5" />
                <span className="sr-only">Toggle sidebar</span>
            </Button>
          </SidebarTrigger>
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
