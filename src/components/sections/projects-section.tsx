
import SectionWrapper from '@/components/layout/section-wrapper';
import SectionTitle from '@/components/ui/section-title';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'; 
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Zap } from 'lucide-react'; // Added Zap icon

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  imageHint: string;
  description: string;
  highlights?: string[]; // Optional array for bullet points
  projectUrl?: string;
  codeUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 'platform-engineering-devsecops-multicloud',
    title: 'Platform Engineering & DevSecOps (Multi-Cloud)',
    category: 'Cloud Native Solutions / Automation / Security',
    imageUrl: 'https://picsum.photos/seed/multiCloudPlatform/600/400',
    imageHint: 'cloud devops platform',
    description: 'Spearheaded comprehensive Platform Engineering and DevSecOps initiatives across multi-cloud environments, focusing on automation, security, and scalability. Delivered robust solutions to enhance development velocity and operational excellence.',
    highlights: [
        "Automated GitHub Tokenization using self-hosted GitHub Actions on Azure Cloud.",
        "Established End-to-End Platform Engineering Automation with FluxCD, Terraform, Azure AKS, and self-hosted GitHub Action runners.",
        "Containerized production-grade Spring Boot microservices using Docker, Kubernetes, Istio service mesh, AKS, Azure DevOps, Ingress controllers, and ArgoCD for GitOps.",
    ],
    projectUrl: '#', 
    codeUrl: '#', 
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" ariaLabelledBy="projects-heading">
      <SectionTitle id="projects-heading" title="Key Projects" subtitle="Highlighting my contributions in Platform Engineering and DevSecOps." />
      
      <div className="grid md:grid-cols-1 gap-10"> 
        {projectsData.map((project) => (
          <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col bg-card border border-border/70 rounded-xl">
            <CardHeader className="p-0 relative aspect-video overflow-hidden"> {/* Changed aspect ratio for better image display */}
              <Image 
                src={project.imageUrl} 
                alt={project.title} 
                data-ai-hint={project.imageHint}
                width={600} 
                height={338} // Adjusted height for 16:9 aspect ratio
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-2xl font-semibold text-primary-foreground mb-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">{project.title}</h3>
              </div>
            </CardHeader>
            <CardContent className="p-6 md:p-8 flex-grow">
              <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-sm text-primary font-medium mb-4 tracking-wide">{project.category}</p>
              <p className="text-muted-foreground text-base leading-relaxed mb-5">{project.description}</p>
              {project.highlights && (
                <div className="mb-5">
                  <h4 className="text-md font-semibold text-foreground mb-2">Key Highlights:</h4>
                  <ul className="list-none space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start text-muted-foreground text-sm">
                        <Zap className="h-4 w-4 text-primary mr-2.5 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
            {(project.projectUrl && project.projectUrl !== '#') || (project.codeUrl && project.codeUrl !== '#') ? (
              <CardFooter className="p-6 md:p-8 border-t bg-secondary/30">
                <div className="flex flex-wrap gap-3">
                  {project.projectUrl && project.projectUrl !== '#' && (
                    <Button asChild variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Link>
                    </Button>
                  )}
                  {project.codeUrl && project.codeUrl !== '#' && (
                    <Button asChild variant="ghost" size="sm" className="hover:bg-accent hover:text-accent-foreground transition-colors">
                      <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                  )}
                </div>
              </CardFooter>
            ) : null}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
