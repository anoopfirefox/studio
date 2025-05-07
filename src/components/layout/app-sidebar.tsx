
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
  const [activeSection, setActiveSection] = useState(navItems[0]?.id || ''); // Default to first item or empty
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

    // Set initial active section if a hash is present (e.g. from direct link)
    // or default to the first visible section on load.
    if (window.location.hash) {
      const hashId = window.location.hash.substring(1);
      if (navItems.some(item => item.id === hashId)) {
        setActiveSection(hashId);
      }
    } else {
        // Find first visible section on load if no hash
        for (const section of sections) {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                setActiveSection(section.id);
                break;
            }
        }
    }


    return () => sections.forEach(section => observer.unobserve(section));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]); // Removed navItems from dependency array as it's constant


  return (
    <Sidebar 
      side="left" 
      collapsible="icon" 
      className="bg-sidebar text-sidebar-foreground border-r-0"
      variant="sidebar"
    >
      <SidebarHeader className="p-6 flex flex-col items-center text-center">
        <Image 
          src="https://picsum.photos/seed/anoop-profile/120/120" 
          data-ai-hint="man suit" 
          alt="Anoop P Hegde profile picture" 
          width={120} 
          height={120} 
          className="rounded-full border-4 border-sidebar-border shadow-md mb-3" 
          priority
        />
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
      <SidebarContent className="p-0 mt-4">
        <SidebarMenu>
          {navItems.map(item => (
            <SidebarMenuItem key={item.label} className="px-3 py-1">
              <SidebarMenuButton 
                asChild 
                isActive={activeSection === item.id}
                onClick={() => handleLinkClick(item.id)}
                className="justify-start w-full text-base rounded-md group"
                variant="default" 
              >
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

