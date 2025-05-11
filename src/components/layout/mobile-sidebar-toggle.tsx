
"use client";

import { Button } from "@/components/ui/button";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";
import type React from 'react';

export default function MobileSidebarToggle(): React.ReactElement | null {
  const { openMobile, isMobile } = useSidebar(); 

  if (!isMobile && typeof window !== 'undefined') { // Check window to ensure it's client-side for isMobile
    // Avoid rendering on desktop during SSR or if isMobile is not yet determined
    return null; 
  }
  
  // On the server or before isMobile is true, we might not want to render or render a placeholder.
  // Given md:hidden on parent, this is mostly for client-side logic.
  // Fallback for initial render if isMobile is undefined.
  const displayIcon = isMobile === undefined ? <PanelLeftOpen className="h-5 w-5" /> : (openMobile ? <PanelLeftClose className="h-5 w-5" /> : <PanelLeftOpen className="h-5 w-5" />);
  const srText = isMobile === undefined ? "Toggle sidebar" : (openMobile ? "Close sidebar" : "Open sidebar");


  return (
    <SidebarTrigger asChild>
      <Button 
        variant="outline" 
        size="icon" 
        className="rounded-full shadow-md bg-card hover:bg-card/80 text-card-foreground border-border/70"
        aria-label={srText}
      >
        {displayIcon}
        <span className="sr-only">{srText}</span>
      </Button>
    </SidebarTrigger>
  );
}

