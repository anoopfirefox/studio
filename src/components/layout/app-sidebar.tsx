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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Added AvatarImage

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
  const [activeSection, setActiveSection] = useState(''); 
  const pathname = usePathname(); 

  const handleLinkClick = (sectionId: string) => {
    if (isMobile) {
      setOpenMobile(false);
    }
    // Smooth scroll handled by observer and href linking
    // const element = document.getElementById(sectionId);
    // if (element) {
    //   element.scrollIntoView({ behavior: 'smooth' });
    // }
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

    // Initial active section logic
    if (window.location.hash) {
      const hashId = window.location.hash.substring(1);
      const targetSection = navItems.find(item => item.id === hashId);
      if (targetSection) {
        setActiveSection(hashId);
        // Optional: scroll into view if not handled by browser default
        // setTimeout(() => document.getElementById(hashId)?.scrollIntoView({ behavior: 'smooth' }), 100);
      } else if (navItems.length > 0) {
        setActiveSection(navItems[0].id); // Default to first if hash is invalid
      }
    } else if (navItems.length > 0) {
      // If no hash, set the first item as active by default.
      // The observer will correct this if the user is scrolled elsewhere.
      setActiveSection(navItems[0].id);
    }

    return () => sections.forEach(section => {
        if (section) observer.unobserve(section);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]); // Removed 'navItems' as it's constant

  return (
    <Sidebar 
      side="left" 
      variant="sidebar" // Explicitly using the "sidebar" variant for styling
      collapsible="icon" 
      className="border-r-sidebar-border" // Use sidebar specific border
    >
      <SidebarHeader className="px-4 pt-6 pb-4 flex flex-col items-center text-center">
        <Avatar className="h-28 w-28 border-4 border-sidebar-border shadow-lg mb-4">
          {/* Placeholder for an actual image if available */}
          {/* <AvatarImage src="/path-to-profile-image.jpg" alt="Anoop P Hegde" /> */}
          <AvatarFallback className="text-4xl bg-sidebar-primary text-sidebar-primary-foreground font-semibold">
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
      <SidebarContent> {/* Default padding from component will be used */}
        <SidebarMenu>
          {navItems.map(item => (
            <SidebarMenuItem key={item.label}> 
              <SidebarMenuButton 
                asChild 
                isActive={activeSection === item.id}
                onClick={() => handleLinkClick(item.id)}
                className="justify-start w-full text-sm rounded-md" // Use text-sm for consistency
                variant="default" // This will use sidebar CVA styling
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
                  <span className="truncate"> {/* Added truncate for long labels in collapsed mode */}
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
