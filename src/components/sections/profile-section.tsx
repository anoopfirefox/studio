
import SectionWrapper from '@/components/layout/section-wrapper';
import SectionTitle from '@/components/ui/section-title';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge'; 
import { Calendar, Globe, MapPin, UserCheck, Mail, Gift, Briefcase } from 'lucide-react';

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
    skills: ["Azure AKS", "AWS EKS", "Openshift OCP", "Kubernetes", "Helm", "Istio", "Ingress", "Docker", "Podman", "Redhat openshift container platform"],
  },
  {
    name: "CI/CD Pipeline",
    skills: ["Jenkins", "Github Actions", "Azure DevOps", "Bamboo"],
  },
  {
    name: "IAC (Infrastructure as Code)",
    skills: ["Terraform", "Ansible", "Weave TF Controller", "kubeform"],
  },
  {
    name: "Server Side/Programming",
    skills: ["Apache", "JBoss", "Tomcat", "Weblogic", "Proxy", "API Gateway", "Red Hat Clustering", "Java SpringBoot", "Nginx"],
  },
  {
    name: "Monitoring & Logging",
    skills: ["Grafana", "Prometheus", "Azure Managed Services", "InfluxDB", "Glowroot with Cassandra", "ELK Stack", "Azure Log Analytics workspace", "OTEL", "Azure Data Explorer"],
  },
   {
    name: "SecOps",
    skills: ["Mend", "SonarQube", "Azure WAF Frontdoor", "GHA-Security", "CAST"],
  },
  {
    name: "SCM",
    skills: ["Gitlab", "Github", "Bitbucket"],
  },
  {
    name: "GitOps",
    skills: ["ArgoCD", "FluxCD", "Weave"],
  },
  {
    name: "Messaging",
    skills: ["Kafka", "Confluent"],
  },
  {
    name: "API Tools",
    skills: ["Postman", "ARC Client"],
  },
  {
    name: "SSO",
    skills: ["Keycloak OIDC", "IDP"],
  },
  {
    name: "Cloud Native Stack",
    skills: [
      "Action-runner-controller", 
      "actions-runners", 
      "cert-manager", 
      "external-dns", 
      "fluentbit", 
      "ingress-nginx-internal", 
      "keycloak", 
      "kube-prometheus-stack", 
      "kube-bench", 
      "kubed", 
      "kubeform", 
      "kubehunter", 
      "kured", 
      "kyverno", 
      "velero", 
      "vouch"
    ],
  },
  {
    name: "Others/Infra-Stack",
    skills: [
      "Azure APIM",
      "AFD WAF",
      "FAST API",
      "weave opentofu controller",
      "OPA (Open Policy Agent)",
      "Admission Controllers",
      "CRDs (Custom Resource Definitions)",
      "Proxies", 
      "Load Balancers", 
      "Ingress", 
      "DNS Routing",
      "SRE", 
      "Production grade Infrastructure",
      "Spring API Gateways",
      "Weblogic", 
      "Jboss EAP", 
      "Springboot", 
      "Apache", 
      "Nginx",
      "Redhat HA Cluster"
    ],
  },
];

const personalDetails = [
  { label: "Birthday", value: "1 May 1990", icon: Gift },
  { label: "Website", value: "portfolio.example.com", icon: Globe, href: "https://portfolio.example.com" }, // User might want to update this
  { label: "City", value: "Bengaluru, Karnataka, India", icon: MapPin },
  { label: "Age", value: "34", icon: Calendar }, // This will need to be updated dynamically or removed if not maintained
  { label: "Degree", value: "Bachelor of Engineering", icon: UserCheck }, 
  { label: "Email", value: "anoop.techstorm@gmail.com", icon: Mail, href: "mailto:anoop.techstorm@gmail.com" },
  { label: "Freelance", value: "Available", icon: Briefcase },
];

export default function ProfileSection() {
  return (
    <SectionWrapper id="profile" ariaLabelledBy="profile-heading">
      <SectionTitle id="profile-heading" title="Profile" subtitle="Who I am and what I do." />
      
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <Image 
            src="https://picsum.photos/seed/anoop-profile-main/400/400" 
            data-ai-hint="man suit"
            alt="Anoop p hegde - Profile Picture" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-xl w-full" 
            priority
          />
        </div>

        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold text-primary mb-3">Senior DevOps Consultant</h3>
          <p className="italic text-muted-foreground mb-4">
            Senior DevOps Consultant with 7.8 years of expertise in DevOps, SecOps, GitOps, Container Orchestration, Production Grade Infrastructure, Cloud Development, and Web Development. Proficient in building end-to-end CI/CD pipelines, IAC solutions (Terraform, Ansible), and containerization (Docker, Kubernetes) with Platform Engineering strategies. Experienced in centralized monitoring/logging, HA Redhat Cluster, and implementing security best practices (Azure WAF, GHA-Security, Mend, SonarQube, Self-hosted GitHub Runners on private AKS).
          </p>
           <p className="text-muted-foreground mb-2">
            Proactively learning and implementing Cloud Native, Platform Engineering, and industry-standard production-grade solutions, incorporating best practices with SecOps principles. Actively upskilling in Multi-Cloud Platforms, SRE, Advanced Containerization, and Full Stack Development. Proactively learning middleware stack such as Apache/ Modsecurity , JBoss , WebLogic , tomcat , SSL/SAML, ELK. In Addition to that worked on Api gateway such as spring eureka, Redhat HA Clustering.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-6">
            {personalDetails.map(detail => (
              <div key={detail.label} className="flex items-center space-x-2">
                <detail.icon className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">{detail.label}:</span>
                {detail.href ? (
                  <a href={detail.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors break-all">{detail.value}</a>
                ) : (
                  <span className="text-muted-foreground break-all">{detail.value}</span>
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
        <SectionTitle title="Tech Stack Expertise" className="mb-8" />
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

