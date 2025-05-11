"use client";

import SectionWrapper from '@/components/layout/section-wrapper';
import SectionTitle from '@/components/ui/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Mail } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Bengaluru, Karnataka, India" },
  { icon: Mail, label: "Email", value: "anoop.techstorm@gmail.com", href: "mailto:anoop.techstorm@gmail.com" },
];

export default function ContactUsSection() {
  return (
    <SectionWrapper id="contact-us" ariaLabelledBy="contact-us-heading">
      <SectionTitle id="contact-us-heading" title="Get In Touch" subtitle="Feel free to reach out to me." />
      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {contactInfo.map((info, index) => (
          <Card 
            key={index} 
            className="text-center shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border border-border/70 hover:-translate-y-1 transform"
          >
            <CardHeader className="flex flex-col items-center pt-8 pb-4"> 
              <div className="bg-primary text-primary-foreground p-5 rounded-full shadow-md mb-4"> 
                <info.icon className="h-8 w-8" /> 
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">{info.label}</CardTitle>
            </CardHeader>
            <CardContent className="pb-8"> 
              {info.href ? (
                 <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors text-base break-all block"> 
                   {info.value}
                </a>
              ) : (
                <p className="text-muted-foreground text-base break-all">{info.value}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
