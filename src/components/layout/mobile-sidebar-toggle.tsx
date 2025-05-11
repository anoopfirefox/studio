"use client";

import { Button } from "@/components/ui/button";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";
import type React from 'react';

export default function MobileSidebarToggle(): React.ReactElement {
  const { openMobile } = useSidebar(); 

  // This component is wrapped in a div with `md:hidden` in src/app/page.tsx.
  // That class handles hiding it on medium screens and up.
  // Removing the internal conditional rendering `if(!isMobile) return null;`
  // fixes a hydration mismatch where the server would render the button,
  // but the client (on desktop) would render null before CSS hiding applies.

  const displayIcon = openMobile ? <PanelLeftClose className="h-5 w-5" /> : <PanelLeftOpen className="h-5 w-5" />;
  const srText = openMobile ? "Close sidebar" : "Open sidebar";

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
