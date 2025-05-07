
import SectionWrapper from '@/components/layout/section-wrapper';
import SectionTitle from '@/components/ui/section-title';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { Calendar, Globe, Phone, MapPin, UserCheck, Mail, Gift, Briefcase } from 'lucide-react'; // Added Briefcase

const skills = [
  { name: "Python", value: 90 },
  { name: "JavaScript/TypeScript", value: 85 },
  { name: "GenAI/LLMs", value: 80 },
  { name: "Cloud (AWS/GCP/Azure)", value: 85 },
  { name: "Docker & Kubernetes", value: 75 },
  { name: "React/Next.js", value: 90 },
  { name: "Node.js/Express", value: 80 },
  { name: "Databases (SQL/NoSQL)", value: 70 },
  { name: "System Design", value: 80 },
  { name: "Agile Methodologies", value: 90 },
];

const personalDetails = [
  { label: "Birthday", value: "1 May 1990", icon: Gift }, // Adjusted for plausibility
  { label: "Website", value: "portfolio.example.com", icon: Globe, href: "https://portfolio.example.com" },
  { label: "Phone", value: "+91 98765 43210", icon: Phone, href: "tel:+919876543210" },
  { label: "City", value: "Bengaluru, Karnataka, India", icon: MapPin },
  { label: "Age", value: "34", icon: Calendar }, // Calculate dynamically if preferred, updated for plausibility
  { label: "Degree", value: "Master's in Computer Science", icon: UserCheck }, 
  { label: "Email", value: "anoop.hegde@example.com", icon: Mail, href: "mailto:anoop.hegde@example.com" },
  { label: "Freelance", value: "Available", icon: Briefcase }, // Changed icon for freelance
];

export default function ProfileSection() {
  return (
    <SectionWrapper id="profile" ariaLabelledBy="profile-heading">
      <SectionTitle id="profile-heading" title="Profile" subtitle="Who I am and what I do." />
      
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <Image 
            src="https://picsum.photos/seed/profilepage/400/400" 
            data-ai-hint="professional man"
            alt="Anoop p hegde - Profile" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-xl w-full" 
          />
        </div>

        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold text-primary mb-3">Staff Software Engineer | GenAI | Cloud | Full Stack Developer</h3>
          <p className="italic text-muted-foreground mb-4">
            Highly motivated and experienced Staff Software Engineer specializing in GenAI, Cloud technologies, and Full Stack Development. Proven ability to design, develop, and deploy scalable and innovative software solutions. Passionate about leveraging cutting-edge technologies to solve complex problems and drive business value. Adept at leading projects, mentoring junior engineers, and collaborating effectively in agile environments.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-6">
            {personalDetails.map(detail => (
              <div key={detail.label} className="flex items-center space-x-2">
                <detail.icon className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">{detail.label}:</span>
                {detail.href ? (
                  <a href={detail.href} className="text-muted-foreground hover:text-primary transition-colors">{detail.value}</a>
                ) : (
                  <span className="text-muted-foreground">{detail.value}</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-muted-foreground">
            Seeking challenging opportunities to contribute to impactful projects and continue learning in the ever-evolving tech landscape. My background includes architecting robust systems, optimizing performance, and ensuring code quality through best practices and thorough testing. I thrive in dynamic settings that foster innovation and continuous improvement.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <SectionTitle title="Skills" className="mb-8" />
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
          {skills.map(skill => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-sm font-medium text-primary">{skill.value}%</span>
              </div>
              <Progress value={skill.value} aria-label={`${skill.name} skill level: ${skill.value}%`} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

