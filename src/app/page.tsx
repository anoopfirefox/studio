
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/layout/app-sidebar';
import HeroSection from '@/components/sections/hero-section';
import ProfileSection from '@/components/sections/profile-section'; // Renamed from AboutSection
import ExperienceSection from '@/components/sections/experience-section'; // Renamed from ResumeSection
import ProjectsSection from '@/components/sections/projects-section'; // Renamed from PortfolioSection
import CertificationsSection from '@/components/sections/certifications-section'; // New Section
import ContactUsSection from '@/components/sections/contact-us-section'; // Renamed from ContactSection
import AppFooter from '@/components/layout/app-footer';
import { Button } from '@/components/ui/button';
import { PanelLeftOpen } from 'lucide-react';
import React from 'react';

export default function Home() {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset className="flex flex-col min-h-screen bg-background">
        <div className="md:hidden p-4 fixed top-4 left-4 z-50">
          <SidebarTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full shadow-lg bg-card hover:bg-secondary/80 text-card-foreground">
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
