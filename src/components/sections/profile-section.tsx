
import SectionWrapper from '@/components/layout/section-wrapper';
import SectionTitle from '@/components/ui/section-title';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge'; // Added Badge import
import { Calendar, Globe, Phone, MapPin, UserCheck, Mail, Gift, Briefcase } from 'lucide-react';

interface SkillCategory {
  name: string;
  skills: string[];
}

const categorizedSkills: SkillCategory[] = [
  {
    name: "Scripting/Automation",
    skills: ["Shell/Bash", "YAML", "Python"],
  },
  {
    name: "Containerization",
    skills: ["Azure AKS", "AWS EKS", "Openshift OCP", "Kubernetes", "Helm", "Istio", "Ingress"],
  },
  {
    name: "CI/CD Pipeline",
    skills: ["Jenkins", "Github Actions", "Azure DevOps"],
  },
  {
    name: "IAC (Infrastructure as Code)",
    skills: ["Terraform", "Ansible"],
  },
  {
    name: "Server Side/Programming",
    skills: ["Apache", "JBoss", "Tomcat", "Weblogic", "Proxy", "API Gateway", "Red Hat Clustering", "Java SpringBoot"],
  },
  {
    name: "Others",
    skills: [
      "Keycloak IDP",
      "GitOps",
      "FluxCD",
      "ArgoCD",
      "Azure APIM",
      "AFD WAF",
      "Confluent Kafka",
      "FAST API",
      "weave opentofu controller",
      "Kyverno",
      "OPA (Open Policy Agent)",
      "Admission Controllers",
      "CRDs (Custom Resource Definitions)"
    ],
  },
];

const personalDetails = [
  { label: "Birthday", value: "1 May 1990", icon: Gift },
  { label: "Website", value: "portfolio.example.com", icon: Globe, href: "https://portfolio.example.com" },
  { label: "Phone", value: "+91 98765 43210", icon: Phone, href: "tel:+919876543210" },
  { label: "City", value: "Bengaluru, Karnataka, India", icon: MapPin },
  { label: "Age", value: "34", icon: Calendar },
  { label: "Degree", value: "Master's in Computer Science", icon: UserCheck },
  { label: "Email", value: "anoop.hegde@example.com", icon: Mail, href: "mailto:anoop.hegde@example.com" },
  { label: "Freelance", value: "Available", icon: Briefcase },
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
            Highly motivated and experienced Staff Software Engineer specializing in GenAI, Cloud technologies (Azure, AWS, GCP), DevOps, and Full Stack Development. Proven ability to design, develop, and deploy scalable and innovative software solutions. Passionate about leveraging cutting-edge technologies like Kubernetes, Terraform, and modern CI/CD pipelines to solve complex problems and drive business value. Adept at leading projects, mentoring junior engineers, and collaborating effectively in agile environments.
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
        <div className="space-y-8">
          {categorizedSkills.map(category => (
            <div key={category.name}>
              <h4 className="text-xl font-semibold text-foreground mb-4">{category.name}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <Badge key={skill} variant="secondary" className="text-sm px-3 py-1 rounded-md">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
