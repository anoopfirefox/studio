import SectionWrapper from '@/components/layout/section-wrapper';
import SectionTitle from '@/components/ui/section-title';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { ChevronRight, Calendar, Globe, Phone, MapPin, UserCheck, Mail, Gift } from 'lucide-react';

const skills = [
  { name: "HTML", value: 100 },
  { name: "CSS", value: 90 },
  { name: "JavaScript", value: 75 },
  { name: "React", value: 80 },
  { name: "Next.js", value: 70 },
  { name: "Tailwind CSS", value: 95 },
];

const personalDetails = [
  { label: "Birthday", value: "1 May 1995", icon: Gift },
  { label: "Website", value: "www.example.com", icon: Globe, href: "https://www.example.com" },
  { label: "Phone", value: "+123 456 7890", icon: Phone, href: "tel:+1234567890" },
  { label: "City", value: "New York, USA", icon: MapPin },
  { label: "Age", value: "29", icon: Calendar }, // Calculate dynamically if preferred
  { label: "Degree", value: "Master", icon: UserCheck }, // Placeholder, could be GraduationCap icon
  { label: "Email", value: "email@example.com", icon: Mail, href: "mailto:email@example.com" },
  { label: "Freelance", value: "Available", icon: UserCheck },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" ariaLabelledBy="about-heading">
      <SectionTitle id="about-heading" title="About" subtitle="Learn more about me, my skills, and my experience." />
      
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <Image 
            src="https://picsum.photos/seed/aboutprofile/400/400" 
            data-ai-hint="professional man"
            alt="John Doe - Profile" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-xl w-full" 
          />
        </div>

        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold text-primary mb-3">UI/UX Designer & Web Developer.</h3>
          <p className="italic text-muted-foreground mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
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
