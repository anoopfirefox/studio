
import SectionWrapper from '@/components/layout/section-wrapper';
import SectionTitle from '@/components/ui/section-title';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'; 
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react'; 

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  imageHint: string;
  description: string;
  projectUrl?: string;
  codeUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 'platform-engineering-devsecops-multicloud',
    title: 'Platform Engineering & DevSecOps (Multi-Cloud)',
    category: 'Platform Engineering / DevSecOps / Multi-Cloud',
    imageUrl: 'https://picsum.photos/seed/multiCloudPlatform/600/400',
    imageHint: 'cloud devops platform',
    description: 'Led significant Platform Engineering and DevSecOps initiatives in multi-cloud contexts. Key accomplishments include: GitHub Tokenization automation using self-hosted GitHub Actions on Azure Cloud; setting up End-to-End Platform Engineering Automation with FluxCD, Terraform, Azure AKS, and self-hosted GitHub Action runners; and containerizing production-grade Spring Boot microservices leveraging Docker, Kubernetes, service mesh technologies, AKS, Azure DevOps, Ingress controllers, and ArgoCD.',
    projectUrl: '#', 
    codeUrl: '#', 
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" ariaLabelledBy="projects-heading">
      <SectionTitle id="projects-heading" title="Projects" subtitle="Showcasing my work and contributions in Platform Engineering and DevSecOps." />
      
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8"> {/* Adjusted grid for potentially single large card or few cards */}
        {projectsData.map((project) => (
          <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col">
            <CardHeader className="p-0 relative aspect-[3/2] overflow-hidden">
              <Image 
                src={project.imageUrl} 
                alt={project.title} 
                data-ai-hint={project.imageHint}
                width={600} 
                height={400} 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-primary font-medium mb-3">{project.category}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
            </CardContent>
            <CardFooter className="p-6 border-t">
              <div className="flex space-x-3">
                {project.projectUrl && project.projectUrl !== '#' && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Link>
                  </Button>
                )}
                {project.codeUrl && project.codeUrl !== '#' && (
                  <Button asChild variant="ghost" size="sm">
                    <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Link>
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

