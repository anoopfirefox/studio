
import SectionWrapper from '@/components/layout/section-wrapper';
import SectionTitle from '@/components/ui/section-title';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl?: string;
  imageHint?: string;
  credentialUrl?: string;
  description?: string;
}

const certificationsData: Certification[] = [
  {
    id: 'cert1',
    title: 'Next.js Certified Developer',
    issuer: 'Vercel',
    date: 'Dec 2023',
    imageUrl: 'https://picsum.photos/seed/nextjscert/300/200',
    imageHint: 'certificate web',
    credentialUrl: '#',
    description: 'Validated expertise in building high-performance web applications with Next.js.',
  },
  {
    id: 'cert2',
    title: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: 'Jun 2023',
    imageUrl: 'https://picsum.photos/seed/awscert/300/200',
    imageHint: 'cloud certificate',
    credentialUrl: '#',
    description: 'Demonstrated ability to design and deploy scalable, highly available, and fault-tolerant systems on AWS.',
  },
  {
    id: 'cert3',
    title: 'Google UX Design Professional Certificate',
    issuer: 'Coursera & Google',
    date: 'Mar 2022',
    // No image for this one to show conditional rendering
    credentialUrl: '#',
    description: 'Completed a rigorous, hands-on program to learn the fundamentals of UX design, including empathizing with users, defining pain points, ideating solutions, creating wireframes and prototypes, and testing designs.',
  },
];

export default function CertificationsSection() {
  return (
    <SectionWrapper id="certifications" ariaLabelledBy="certifications-heading">
      <SectionTitle id="certifications-heading" title="Certifications" subtitle="My professional accreditations and qualifications." />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificationsData.map((cert) => (
          <Card key={cert.id} className="shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col">
            {cert.imageUrl && (
              <CardHeader className="p-0 relative aspect-[3/2] overflow-hidden">
                <Image 
                  src={cert.imageUrl} 
                  alt={`${cert.title} certificate`}
                  data-ai-hint={cert.imageHint || 'certificate official'}
                  width={300} 
                  height={200} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
                />
              </CardHeader>
            )}
             {!cert.imageUrl && (
                 <CardHeader className="p-6 flex flex-row items-center space-x-4 bg-secondary/30">
                    <div className="p-3 bg-primary text-primary-foreground rounded-full">
                        <Award className="h-8 w-8" />
                    </div>
                    <div>
                        <CardTitle className="text-xl font-semibold text-foreground">{cert.title}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">{cert.issuer} - {cert.date}</CardDescription>
                    </div>
                 </CardHeader>
             )}
            <CardContent className={`p-6 flex-grow ${cert.imageUrl ? '' : 'pt-4'}`}>
              {cert.imageUrl && (
                <>
                    <CardTitle className="text-xl font-semibold text-foreground mb-1">{cert.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground mb-3">{cert.issuer} - {cert.date}</CardDescription>
                </>
              )}
              {cert.description && <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cert.description}</p>}
              {cert.credentialUrl && (
                <Link href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary hover:underline">
                  View Credential <ExternalLink className="ml-1.5 h-4 w-4" />
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
