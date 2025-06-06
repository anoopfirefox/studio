
"use client";
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  useSidebar,
  SidebarRail,
  SidebarTrigger
} from "@/components/ui/sidebar";
import Link from 'next/link';
import { 
  UserIcon, 
  BriefcaseIcon, 
  FileTextIcon, 
  AwardIcon,
  MailIcon, 
  LinkedinIcon, 
  GithubIcon,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { id: "profile", label: "Profile", icon: UserIcon, href: "#profile" },
  { id: "projects", label: "Projects", icon: BriefcaseIcon, href: "#projects" },
  { id: "experience", label: "Experience", icon: FileTextIcon, href: "#experience" },
  { id: "certifications", label: "Certifications", icon: AwardIcon, href: "#certifications" },
  { id: "contact-us", label: "Contact Us", icon: MailIcon, href: "#contact-us" },
];

const socialLinks = [
  { href: "https://linkedin.com/in/anoop-hegde-041625103/", label: "LinkedIn", icon: LinkedinIcon, ariaLabel: "Visit my LinkedIn profile" },
  { href: "https://github.com/AnoopHegde", label: "GitHub", icon: GithubIcon, ariaLabel: "Visit my GitHub profile" },
];

export default function AppSidebar() {
  const { setOpenMobile, isMobile, open } = useSidebar(); // Get 'open' state for icon toggle
  const [activeSection, setActiveSection] = useState(''); 
  const pathname = usePathname(); 

  const handleLinkClick = (sectionId: string) => {
    if (isMobile) {
      setOpenMobile(false);
    }
    // Smooth scroll handled by observer and href linking
  };
  
  useEffect(() => {
    const observerOptions = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.4 
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

    if (window.location.hash) {
      const hashId = window.location.hash.substring(1);
      const targetSection = navItems.find(item => item.id === hashId);
      if (targetSection) {
        setActiveSection(hashId);
      } else if (navItems.length > 0) {
        setActiveSection(navItems[0].id); 
      }
    } else if (navItems.length > 0) {
      setActiveSection(navItems[0].id);
    }

    return () => sections.forEach(section => {
        if (section) observer.unobserve(section);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]); 

  return (
    <Sidebar 
      side="left" 
      variant="sidebar" 
      collapsible="icon" 
      className="border-r-sidebar-border" 
    >
      <SidebarRail /> {/* Added for edge click/drag toggle */}
      <SidebarHeader className="px-4 pt-6 pb-4 flex flex-col items-center text-center relative">
        {/* Desktop Sidebar Toggle Button */}
        <div className="absolute top-3 right-3 hidden md:block">
          <SidebarTrigger className="text-sidebar-foreground hover:text-sidebar-primary hover:bg-sidebar-accent">
            {open ? <PanelLeftClose className="h-5 w-5" /> : <PanelLeftOpen className="h-5 w-5" />}
            <span className="sr-only">Toggle sidebar</span>
          </SidebarTrigger>
        </div>

        <Avatar className="h-24 w-24 border-2 border-sidebar-border shadow-md mb-3">
          <AvatarFallback className="text-3xl bg-sidebar-primary text-sidebar-primary-foreground font-semibold">
            AH
          </AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-semibold text-sidebar-foreground tracking-tight">ANOOP P HEGDE</h1>
        <p className="text-xs text-sidebar-foreground/70 mt-1">Senior DevOps Consultant</p>
        <div className="flex space-x-4 mt-4">
          {socialLinks.map(link => (
            <Link 
              key={link.label} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={link.ariaLabel}
              className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors duration-200"
            >
              <link.icon size={18} />
            </Link>
          ))}
        </div>
      </SidebarHeader>
      <SidebarContent> 
        <SidebarMenu>
          {navItems.map(item => (
            <SidebarMenuItem key={item.label}> 
              <SidebarMenuButton 
                asChild 
                isActive={activeSection === item.id}
                onClick={() => handleLinkClick(item.id)}
                className="justify-start w-full text-sm rounded-md" 
                variant="default" 
                size="default"
                tooltip={{
                    children: item.label,
                    side: 'right',
                    align: 'center',
                    className: "bg-sidebar-accent text-sidebar-accent-foreground border-sidebar-border" 
                }}
              >
                <a href={item.href} className="flex items-center w-full">
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="truncate"> 
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
