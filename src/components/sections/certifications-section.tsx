
import SectionWrapper from '@/components/layout/section-wrapper';
import SectionTitle from '@/components/ui/section-title';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string; // Format: "MMM YYYY" or "MMM YYYY - Present"
  imageUrl?: string;
  imageHint?: string;
  credentialUrl?: string;
  description?: string;
}

const certificationsData: Certification[] = [
  {
    id: 'cert1',
    title: 'Azure DevOps Solutions Expert Master Program',
    issuer: 'Simplilearn',
    date: 'Feb 2024 - Present',
    credentialUrl: '#', 
    description: 'Comprehensive program covering Azure DevOps solutions, CI/CD, and cloud-native practices.',
  },
  {
    id: 'cert2',
    title: 'Post Graduate Program in DevOps',
    issuer: 'Simplilearn & Caltech University',
    date: 'Jun 2023 - Present',
    credentialUrl: '#', 
    description: 'Advanced studies in DevOps methodologies, tools, and technologies, in collaboration with Caltech CTME.',
  },
  {
    id: 'cert3',
    title: 'Six Sigma Process Management Yellow Belt',
    issuer: 'Simplilearn', 
    date: 'Jun 2023 - Present', 
    credentialUrl: '#', 
    description: 'Fundamentals of Six Sigma and process improvement methodologies for quality management.',
  },
  {
    id: 'cert4',
    title: 'Microsoft Certified: Azure AI Fundamentals AI-900',
    issuer: 'Microsoft',
    date: 'Jul 2023 - Present', 
    credentialUrl: '#', 
    description: 'Validated foundational knowledge of machine learning and artificial intelligence concepts and related Microsoft Azure services.',
  },
  {
    id: 'cert5',
    title: 'Microsoft Certified: Azure Administrator Associate AZ-104',
    issuer: 'Microsoft',
    date: 'Jan 2024 - Present', 
    credentialUrl: '#', 
    description: 'Expertise in implementing, managing, and monitoring an organization’s Microsoft Azure environment.',
  },
  {
    id: 'cert6',
    title: 'Certified Kubernetes Application Developer (CKAD)',
    issuer: 'CNCF (Cloud Native Computing Foundation)',
    date: 'Oct 2021 - Present', 
    credentialUrl: '#', 
    description: 'Proficiency in designing, building, configuring, and exposing cloud native applications for Kubernetes.',
  },
  {
    id: 'cert7',
    title: 'Microsoft Certified: DevOps Engineer Expert AZ-400',
    issuer: 'Microsoft',
    date: 'Jan 2024 - Present', 
    credentialUrl: '#', 
    description: 'Expertise in combining people, process, and technologies to continuously deliver valuable products and services that meet end user needs and business objectives.',
  },
  {
    id: 'cert8',
    title: 'Microsoft Certified: Azure Fundamentals AZ-900',
    issuer: 'Microsoft',
    date: 'May 2022 - Present', 
    credentialUrl: '#', 
    description: 'Demonstrated foundational knowledge of cloud concepts and Microsoft Azure services.',
  },
];

export default function CertificationsSection() {
  return (
    <SectionWrapper id="certifications" ariaLabelledBy="certifications-heading">
      <SectionTitle id="certifications-heading" title="Certifications" subtitle="My professional accreditations and qualifications." />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificationsData.map((cert) => (
          <Card key={cert.id} className="shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col bg-card border border-border/70 rounded-xl">
            {cert.imageUrl ? (
              <CardHeader className="p-0 relative aspect-[16/9] overflow-hidden rounded-t-xl">
                <Image 
                  src={cert.imageUrl} 
                  alt={`${cert.title} certificate`}
                  data-ai-hint={cert.imageHint || 'certificate official'}
                  width={400} // Increased width for better quality
                  height={225} // Adjusted height for 16:9
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
                />
              </CardHeader>
            ) : (
                 <CardHeader className="py-8 flex flex-col items-center justify-center bg-secondary/40 rounded-t-xl">
                    <div className="p-4 bg-primary text-primary-foreground rounded-full shadow-md mb-3">
                        <Award className="h-10 w-10" /> {/* Increased icon size */}
                    </div>
                 </CardHeader>
             )}
            <CardContent className={`p-6 flex-grow flex flex-col`}>
                <CardTitle className="text-lg font-semibold text-foreground mb-1.5 leading-tight">{cert.title}</CardTitle>
                <CardDescription className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">{cert.issuer} &bull; {cert.date}</CardDescription>
              {cert.description && <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">{cert.description}</p>}
            </CardContent>
            {cert.credentialUrl && cert.credentialUrl !== '#' && (
               <CardFooter className="p-6 border-t">
                <Button asChild variant="outline" size="sm" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Link href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" >
                    View Credential <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
