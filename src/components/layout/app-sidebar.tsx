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
import Link from 'next/link';
import { 
  UserIcon, 
  BriefcaseIcon, 
  FileTextIcon, 
  AwardIcon,
  MailIcon, 
  LinkedinIcon, 
  GithubIcon 
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
  const { setOpenMobile, isMobile } = useSidebar();
  const [activeSection, setActiveSection] = useState(navItems[0]?.id || ''); 
  const pathname = usePathname(); 

  const handleLinkClick = (sectionId: string) => {
    if (isMobile) {
      setOpenMobile(false);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
      if (navItems.some(item => item.id === hashId)) {
        setActiveSection(hashId);
         const element = document.getElementById(hashId);
         if (element) {
            // Add a small delay to ensure content is rendered before scrolling
            setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
         }
      }
    } else {
        // Fallback to set active section based on viewport if no hash
        for (const section of sections) {
            const rect = section.getBoundingClientRect();
            // Check if the section is sufficiently visible
            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) { 
                setActiveSection(section.id);
                break;
            }
        }
        // If still no active section (e.g. scrolled to bottom), default to last visible one or first
        if (!sections.find(s => s.id === activeSection)) {
             const visibleSections = sections.filter(s => {
                 const r = s.getBoundingClientRect();
                 return r.top < window.innerHeight && r.bottom >= 0;
             });
             if (visibleSections.length > 0) {
                 setActiveSection(visibleSections[visibleSections.length -1].id);
             } else if (sections.length > 0) {
                 setActiveSection(sections[0].id);
             }
        }
    }


    return () => sections.forEach(section => observer.unobserve(section));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]); 


  return (
    <Sidebar 
      side="left" 
      collapsible="icon" 
      className="bg-sidebar text-sidebar-foreground border-r-0"
      variant="sidebar"
    >
      <SidebarHeader className="p-6 flex flex-col items-center text-center">
        <Avatar className="h-24 w-24 border-4 border-sidebar-border shadow-md mb-3">
          <AvatarFallback className="text-3xl bg-sidebar-primary text-sidebar-primary-foreground">
            AH
          </AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-semibold text-sidebar-foreground">Anoop P Hegde</h1>
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
      <SidebarContent className="p-4 mt-2"> {/* Adjusted padding and margin */}
        <SidebarMenu>
          {navItems.map(item => (
            <SidebarMenuItem key={item.label}> {/* Removed className="px-3 py-1" */}
              <SidebarMenuButton 
                asChild 
                isActive={activeSection === item.id}
                onClick={() => handleLinkClick(item.id)}
                className="justify-start w-full text-base rounded-md"
                variant="default" 
              >
                <a href={item.href} className="flex items-center w-full">
                  <item.icon className="mr-3 h-5 w-5" />
                  <span> 
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
