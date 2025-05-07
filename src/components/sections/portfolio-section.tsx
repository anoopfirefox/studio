import SectionWrapper from '@/components/layout/section-wrapper';
import SectionTitle from '@/components/ui/section-title';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react'; // Using Github as an example for code link

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

const projects: Project[] = [
  {
    id: 'project1',
    title: 'E-commerce Platform',
    category: 'Web Development',
    imageUrl: 'https://picsum.photos/seed/ecom/600/400',
    imageHint: 'online store',
    description: 'A full-featured e-commerce platform with modern UI/UX, payment gateway integration, and admin dashboard.',
    projectUrl: '#',
    codeUrl: '#',
  },
  {
    id: 'project2',
    title: 'Mobile App Design',
    category: 'UI/UX Design',
    imageUrl: 'https://picsum.photos/seed/appdesign/600/400',
    imageHint: 'mobile interface',
    description: 'User interface and experience design for a fitness tracking mobile application. Focused on intuitive navigation.',
    projectUrl: '#',
  },
  {
    id: 'project3',
    title: 'Data Visualization Dashboard',
    category: 'Data Science',
    imageUrl: 'https://picsum.photos/seed/dataviz/600/400',
    imageHint: 'charts graphs',
    description: 'An interactive dashboard for visualizing complex datasets, built with D3.js and React.',
    codeUrl: '#',
  },
  {
    id: 'project4',
    title: 'Branding Identity',
    category: 'Graphic Design',
    imageUrl: 'https://picsum.photos/seed/branding/600/400',
    imageHint: 'logo design',
    description: 'Complete branding identity package for a startup, including logo, color palette, and style guide.',
    projectUrl: '#',
  },
];

export default function PortfolioSection() {
  return (
    <SectionWrapper id="portfolio" ariaLabelledBy="portfolio-heading">
      <SectionTitle id="portfolio-heading" title="Portfolio" subtitle="A collection of my recent projects and designs." />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
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
                 {/* Could add category or quick links here for hover state */}
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-primary font-medium mb-3">{project.category}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
            </CardContent>
            <CardFooter className="p-6 border-t">
              <div className="flex space-x-3">
                {project.projectUrl && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Link>
                  </Button>
                )}
                {project.codeUrl && (
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
