
import SectionWrapper from '@/components/layout/section-wrapper';
import SectionTitle from '@/components/ui/section-title';
import { Badge } from '@/components/ui/badge'; 
import { CheckCircle } from 'lucide-react';

interface SkillCategory {
  name: string;
  skills: string[];
}

const categorizedSkills: SkillCategory[] = [
  {
    name: "IAC (Infrastructure as Code)",
    skills: ["Terraform", "Ansible", "Weave TF Controller", "kubeform"],
  },
  {
    name: "Containerization",
    skills: ["Docker", "Podman", "Kubernetes", "Azure AKS", "AWS EKS", "Openshift OCP", "Redhat openshift container platform", "Helm", "Istio", "Ingress"],
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
    name: "Monitoring & Logging",
    skills: ["Grafana", "Prometheus", "Azure Managed Services", "InfluxDB", "Glowroot with Cassandra", "ELK Stack", "Azure Log Analytics workspace", "OTEL", "Azure Data Explorer"],
  },
  {
    name: "SecOps",
    skills: ["Mend", "SonarQube", "Azure WAF Frontdoor", "GHA-Security", "CAST"],
  },
  {
    name: "Infra-Stack",
    skills: [
      "Weblogic", "Jboss EAP", "Springboot", "Apache", "Nginx", "Proxies", 
      "Load Balancers", "Ingress", "DNS Routing", "SSO", "SRE", 
      "Production grade Infrastructure", "Redhat HA Cluster", "Spring API Gateways", "APIM"
    ],
  },
  {
    name: "SCM (Source Control Management)",
    skills: ["Gitlab", "Github", "Bitbucket"],
  },
  {
    name: "CI/CD",
    skills: ["Bamboo", "Jenkins", "Github Actions", "Azure DevOps pipelines"],
  },
  {
    name: "GitOps",
    skills: ["ArgoCD", "FluxCD", "Weave"],
  },
  {
    name: "Scripting",
    skills: ["Shell/Bash", "Python", "YAML"],
  },
  {
    name: "Messaging",
    skills: ["Kafka", "Confluent"],
  },
  {
    name: "Cloud Native Stack",
    skills: [
      "Action-runner-controller", "actions-runners", "cert-manager", "external-dns", 
      "fluentbit", "ingress-nginx-internal", "keycloak", "kube-prometheus-stack", 
      "kube-bench", "kubed", "kubeform", "kubehunter", "kured", "kyverno", 
      "velero", "vouch"
    ],
  },
];

export default function ProfileSection() {
  return (
    <SectionWrapper id="profile" ariaLabelledBy="profile-heading">
      <SectionTitle id="profile-heading" title="Profile" subtitle="Who I am and what I do." />
      
      <div className="grid md:grid-cols-1 gap-10 items-start"> 
        <div className="md:col-span-1">
          <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-4">Senior DevOps Consultant</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed text-base lg:text-lg">
            Senior DevOps Consultant with overall 7.8 years of Industry expertise across various verticals such as DevOps, SecOps, GitOps, Container Orchestration, Production Grade Infrastructure, Cloud Development as well as Web Development Solutions. Responsible for building end-to-end industry best practices involved CI/CD, IAC, Containerization solutions such as Docker and kubernetes with Platform Engineering Strategies, Centralized container monitoring/logging solutions, HA Redhat Cluster. Involved in implementing the best security practices in the platform solution such as Azure WAF Frontdoor, GHA-Security, Mend Container scanning, SonarQube, Selfhosted Github Runners hosted on Private AKS Clusters, end-to-end touchless change management.
          </p>
          <ul className="space-y-3 text-muted-foreground mb-8 leading-relaxed text-base lg:text-lg">
            {[
              "Proactively learning and implementing the Cloud Native , Platform Engineering, Industry standard production grade Solutions incorporating best practices along with SecOps principles.",
              "Actively learning and upskilling Multi-Cloud Platforms, SRE, Platform Engineering, Advanced Containerization Technologies and Full Stack Development.",
              "Proactively learning middleware stack such as Apache/ Modsecurity , JBoss , WebLogic , tomcat , SSL/SAML, ELK. In Addition to that worked on Api gateway such as spring eureka, Redhat HA Clustering.",
              "OTEL, Azure Data Explorer"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16"> 
        <SectionTitle title="Tech Stack Expertise" className="mb-10 text-center md:text-left" /> 
        <p className="text-muted-foreground mb-8 leading-relaxed text-base lg:text-lg text-center md:text-left">
          Explore my repositories: 
          <a href="https://github.com/orgs/AnoopHegde/repositories" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1 font-medium">GitHub Organization</a>, 
          <a href="https://github.com/anoopfirefox?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1 font-medium">Personal GitHub</a>
        </p>
        <div className="space-y-10"> 
          {categorizedSkills.map(category => (
            <div key={category.name}>
              <h4 className="text-xl lg:text-2xl font-semibold text-foreground mb-5">{category.name}</h4>
              <div className="flex flex-wrap gap-3"> 
                {category.skills.map(skill => (
                  <Badge key={skill} variant="secondary" className="text-sm px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
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
