
import SectionWrapper from '@/components/layout/section-wrapper';
import SectionTitle from '@/components/ui/section-title';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'; 

const summary = {
  name: "Anoop p hegde",
  description: "Senior DevOps Consultant with 7.8 years of expertise in DevOps, SecOps, GitOps, Container Orchestration, Production Grade Infrastructure, Cloud Development, and Web Development. Proficient in building end-to-end CI/CD pipelines, IAC solutions, and containerization with Platform Engineering strategies. Experienced in centralized monitoring/logging, HA Redhat Cluster, and implementing security best practices.",
  address: "Bengaluru, Karnataka, India",
  phone: "", // Removed phone number
  email: "anoop.hegde@example.com", 
};

const educationData = [
  {
    degree: "Bachelor of Engineering", 
    period: "03/2013 - 07/2017", 
    institution: "AMC Engineering College", 
    description: "Information Science and Engineering",
  },
];

const experienceData = [
  {
    role: "Senior Azure DevOps Consultant",
    period: "05/2023 - Present",
    company: "KPMG India, Bangalore (Client: Shell India)",
    responsibilities: [
      "Actively Involved in the implementation of End-to-End Production Grade Platform Engineering Architecture with various Azure managed service offerings such as APIM, WAF, Confluent Kafka, terraform. SSO keycloak IDP.",
      "Responsible for solving various end-user client facing issues and optimize the CVE' vulnerabilities.",
      "Working on various business requirements of technical capabilities such as Observability using Open Telemetry.",
      "Actively working on various tech stack upgrade such as AKS, Velero FluxCD, vouch etc.",
      "Working on the kube-Prometheus-stack with Azure Managed Services.",
      "Working on Platform Engineering Core provisioning API’s using FAST API Python.",
      "Implemented various devsecops, cloud ops security models such as mend, sonarqube, Github advanced security , azure pen test security remediations.",
      "Responsible for end-to-end implementation of Github reusable workflows. Automation of Onboarding project pipelines using python.",
      "Worked on the E2E integration testing Framework with Github Actions.",
      "Implementation of Infracost for all the Github Reusable workflows. E2E Integration Testing for the Core Provisioning Engine, Open telemetry , APIM and Observability.",
    ],
  },
  {
    role: "DevOps Engineer and Infrastructure Management",
    period: "07/2018 - 05/2023",
    company: "CGI, Bangalore (Senior Software Engineer - Consultant)",
    responsibilities: [
      "Developed the Automated workflow using Rundeck to deploy manage, configure the Application across all the environments to minimize the manual efforts taken.",
      "Taken initiative in Designing Centralized Monitoring and logging Architecture using various tech stack such as Glow root APM, Cassandra, Grafana InfluxDB, HA Redhat Cluster, ELK, service desk across Environments.",
      "Involved in end to end API Gateway with proxies for client Banks. Worked on Container CI/CD using docker Kubernetes and Jenkins in Dev Environment.",
      "Developed an End to End Infrastructure configuration Management using Ansible for various application components across the Environments. And written docker images for various application components.",
      "Worked on WebLogic patch and upgrades of various components such as hazel cast, springboot, JBoss, Apache etc.",
      "Responsible for troubleshooting and debugging infra tech issues across the environments during application releases and DR.",
      "Taken initiative of Developing the Login Automation using Robot framework that eliminate the manual effort during Application sanity, shakedown testing post release.",
      "Worked on and supported automated builds, deployments, validations, and configurations in our public AWS environment.",
      "Responsible for setting up End to End DevOps tools in higher environments such as docker, pod man, harbor, rundeck, Gitlab etc. in a containerized approach.",
      "Worked on building the complete infrastructure on the AWS cloud environment. Setting up S3, RDS, VPC, public/private subnets as per the requirement.",
    ],
  },
   {
    role: "Associate Software Engineer",
    period: "08/2017 - 06/2018",
    company: "Tejasco Techsoft Pvt Ltd, Bangalore (Software Engineer Trainee)",
    responsibilities: [
      "Worked on developing a website and Health care software in Tejasco Techsoft as a UI Developer.",
      "Actively worked on upgrading UI framework for an existing in-house products such as E-Arogya, track your Vitals Etc.",
      "Worked on Backend component such as Spring boot and spring MVC, Hibernate to Track your Vitals.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" ariaLabelledBy="experience-heading">
      <SectionTitle id="experience-heading" title="Experience" subtitle="My professional journey and education." />
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
            <h3 className="text-2xl font-semibold text-primary mb-4 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:bg-primary/30 before:border-2 before:border-primary before:rounded-full">Education</h3>
            {educationData.map((edu, index) => (
              <Card key={index} className="mb-6 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">{edu.degree}</CardTitle>
                  <p className="text-sm font-medium bg-secondary text-secondary-foreground inline-block px-2 py-1 rounded mt-1">{edu.period}</p>
                </CardHeader>
                <CardContent>
                  <p className="italic text-muted-foreground mb-2">{edu.institution}</p>
                  {edu.description && <p className="text-sm text-muted-foreground">{edu.description}</p>}
                </CardContent>
              </Card>
            ))}
          </div>

        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:bg-primary/30 before:border-2 before:border-primary before:rounded-full">Professional Experience</h3>
          {experienceData.map((exp, index) => (
            <Card key={index} className="mb-6 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">{exp.role}</CardTitle>
                <p className="text-sm font-medium bg-secondary text-secondary-foreground inline-block px-2 py-1 rounded mt-1">{exp.period}</p>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground mb-3">{exp.company}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
       <div className="mt-8">
            <h3 className="text-2xl font-semibold text-primary mb-3 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:bg-primary/30 before:border-2 before:border-primary before:rounded-full">Summary</h3>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">{summary.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{summary.description}</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>{summary.address}</li>
                  {summary.phone && <li>{summary.phone}</li>}
                  <li>{summary.email}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
    </SectionWrapper>
  );
}

