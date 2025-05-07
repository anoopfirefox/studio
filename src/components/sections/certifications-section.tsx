
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
    credentialUrl: '#', // Replace with actual URL if available
    description: 'Azure DevOps Solutions Expert Master Program.',
  },
  {
    id: 'cert2',
    title: 'Post Graduate Program in DevOps',
    issuer: 'Simplilearn & Caltech University',
    date: 'Jun 2023 - Present',
    credentialUrl: '#', // Replace with actual URL if available
    description: 'Simplilearn Post Graduate Program in DevOps from Caltech University.',
  },
  {
    id: 'cert3',
    title: 'Six Sigma Process Management Yellow Belt',
    issuer: 'Simplilearn (assumed, clarify if different)', // Assuming Simplilearn, user to clarify
    date: 'Jun 2023 - Present', // Assuming from context, user to clarify if different
    credentialUrl: '#', // Replace with actual URL if available
    description: 'Six Sigma Process Management Yellow Belt.',
  },
  {
    id: 'cert4',
    title: 'Microsoft Certified: Azure AI Fundamentals AI-900',
    issuer: 'Microsoft',
    date: 'Jul 2023 - Present', // Date might be issuance date, "Present" might mean still valid/active
    credentialUrl: '#', // Replace with actual URL if available
    description: 'Microsoft Certified: Azure AI Fundamentals AI-900.',
  },
  {
    id: 'cert5',
    title: 'Microsoft Certified: Azure Administrator Associate AZ-104',
    issuer: 'Microsoft',
    date: 'Jan 2024 - Present', // Date might be issuance date
    credentialUrl: '#', // Replace with actual URL if available
    description: 'Microsoft Certified: Azure Administrator Associate AZ-104.',
  },
  {
    id: 'cert6',
    title: 'Certified Kubernetes Application Developer (CKAD)',
    issuer: 'CNCF (Cloud Native Computing Foundation)',
    date: 'Oct 2021 - Present', // Date might be issuance date
    credentialUrl: '#', // Replace with actual URL if available
    description: 'Certified Kubernetes Application Developer by CNCF.',
  },
  {
    id: 'cert7',
    title: 'Microsoft Certified: DevOps Engineer Expert AZ-400',
    issuer: 'Microsoft',
    date: 'Jan 2024 - Present', // Date might be issuance date
    credentialUrl: '#', // Replace with actual URL if available
    description: 'AZ 400 Microsoft Certified: DevOps Engineer Expert.',
  },
  {
    id: 'cert8',
    title: 'Microsoft Certified: Azure Fundamentals AZ-900',
    issuer: 'Microsoft',
    date: 'May 2022 - Present', // Date might be issuance date
    credentialUrl: '#', // Replace with actual URL if available
    description: 'Azure Fundamentals - Microsoft Certified.',
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
              {cert.credentialUrl && cert.credentialUrl !== '#' && (
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
