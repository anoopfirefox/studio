import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/layout/app-sidebar';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ResumeSection from '@/components/sections/resume-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import ContactSection from '@/components/sections/contact-section';
import AppFooter from '@/components/layout/app-footer';
import { Button } from '@/components/ui/button'; // For the mobile trigger
import { PanelLeftOpen } from 'lucide-react';
import React from 'react';

export default function Home() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset className="flex flex-col min-h-screen bg-background">
        {/* Mobile Sidebar Trigger - positioned fixed or absolutely within SidebarInset */}
        <div className="md:hidden p-4 fixed top-4 left-4 z-50">
          <SidebarTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full shadow-md bg-card hover:bg-secondary">
              <>
                <PanelLeftOpen className="h-5 w-5" />
                <span className="sr-only">Toggle sidebar</span>
              </>
            </Button>
          </SidebarTrigger>
        </div>
        
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <ResumeSection />
          <PortfolioSection />
          <ContactSection />
        </main>
        <AppFooter />
      </SidebarInset>
    </SidebarProvider>
  );
}
