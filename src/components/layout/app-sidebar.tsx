
"use client";
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  useSidebar 
} from "@/components/ui/sidebar";
import Image from 'next/image';
import Link from 'next/link';
import { 
  HomeIcon, 
  UserIcon, 
  FileTextIcon, 
  BriefcaseIcon, // Using Briefcase for Portfolio
  MailIcon, 
  TwitterIcon, 
  FacebookIcon, 
  InstagramIcon, 
  LinkedinIcon, 
  GithubIcon 
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { id: "hero", label: "Home", icon: HomeIcon, href: "#hero" },
  { id: "about", label: "About", icon: UserIcon, href: "#about" },
  { id: "resume", label: "Resume", icon: FileTextIcon, href: "#resume" },
  { id: "portfolio", label: "Portfolio", icon: BriefcaseIcon, href: "#portfolio" },
  { id: "contact", label: "Contact", icon: MailIcon, href: "#contact" },
];

const socialLinks = [
  { href: "https://twitter.com", label: "Twitter", icon: TwitterIcon, ariaLabel: "Visit my Twitter profile" },
  { href: "https://facebook.com", label: "Facebook", icon: FacebookIcon, ariaLabel: "Visit my Facebook profile" },
  { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon, ariaLabel: "Visit my Instagram profile" },
  { href: "https://linkedin.com", label: "LinkedIn", icon: LinkedinIcon, ariaLabel: "Visit my LinkedIn profile" },
  { href: "https://github.com", label: "GitHub", icon: GithubIcon, ariaLabel: "Visit my GitHub profile" },
];

export default function AppSidebar() {
  const { setOpenMobile, isMobile } = useSidebar();
  const [activeSection, setActiveSection] = useState('hero');
  const pathname = usePathname(); // In case of multi-page setup later

  const handleLinkClick = (sectionId: string) => {
    if (isMobile) {
      setOpenMobile(false);
    }
    // setActiveSection(sectionId); // Set active section immediately on click
    // Manual scroll if needed, but smooth scroll CSS should handle it.
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    const observerOptions = {
      root: null, // relative to document viewport
      rootMargin: '0px',
      threshold: 0.4 // 40% of the section is visible
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean) as Element[];
    
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, [pathname]);


  return (
    <Sidebar 
      side="left" 
      collapsible="icon" 
      className="bg-sidebar text-sidebar-foreground border-r-0" // Use sidebar theme colors
      variant="sidebar" // Ensure it's a standard sidebar
    >
      <SidebarHeader className="p-6 flex flex-col items-center text-center">
        <Image 
          src="https://picsum.photos/seed/devprofile/120/120" 
          data-ai-hint="man portrait" 
          alt="John Doe" 
          width={120} 
          height={120} 
          className="rounded-full border-4 border-sidebar-border shadow-md mb-3" 
          priority
        />
        <h1 className="text-2xl font-semibold text-sidebar-foreground">John Doe</h1>
        <div className="flex space-x-3 mt-3">
          {socialLinks.map(link => (
            <Link 
              key={link.label} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={link.ariaLabel}
              className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors duration-200"
            >
              <link.icon size={20} />
            </Link>
          ))}
        </div>
      </SidebarHeader>
      <SidebarContent className="p-0 mt-4">
        <SidebarMenu>
          {navItems.map(item => (
            <SidebarMenuItem key={item.label} className="px-3 py-1">
              <SidebarMenuButton 
                asChild 
                isActive={activeSection === item.id}
                onClick={() => handleLinkClick(item.id)}
                className="justify-start w-full text-base rounded-md group"
                variant="default" // Use default variant which will pick up sidebar theme
              >
                {/* 
                  The anchor tag is essential for Next.js Link behavior and also for href navigation.
                  However, SidebarMenuButton itself can be a button or an anchor.
                  If SidebarMenuButton handles navigation via onClick, Link is not strictly needed
                  but good for semantics and SEO if these were actual pages.
                  For same-page anchors, a simple <a> or <button> in SidebarMenuButton is fine.
                  Here, we let SidebarMenuButton be a button and handle click for scrolling.
                  The href on the Link component is for semantics and potential future direct navigation.
                */}
                <a href={item.href} className="flex items-center w-full">
                  <item.icon className={`mr-3 h-5 w-5 ${activeSection === item.id ? 'text-sidebar-primary' : 'text-sidebar-foreground/70 group-hover:text-sidebar-accent-foreground'}`} />
                  <span className={`${activeSection === item.id ? 'text-sidebar-primary-foreground font-medium' : 'text-sidebar-foreground/90 group-hover:text-sidebar-accent-foreground'}`}>
                    {item.label}
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
