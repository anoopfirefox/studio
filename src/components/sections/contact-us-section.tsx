
"use client";

import SectionWrapper from '@/components/layout/section-wrapper';
import SectionTitle from '@/components/ui/section-title';
import { MapPin, Mail, Phone } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: "Location:", value: "Bengaluru, Karnataka, India" },
  { icon: Mail, label: "Email:", value: "anoop.hegde@example.com", href: "mailto:anoop.hegde@example.com" },
  { icon: Phone, label: "Call:", value: "+91 98765 43210", href: "tel:+919876543210" },
];

export default function ContactUsSection() {
  return (
    <SectionWrapper id="contact-us" ariaLabelledBy="contact-us-heading">
      <SectionTitle id="contact-us-heading" title="Contact Us" subtitle="Get in touch with me." />
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-start p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex-shrink-0 mr-5">
              <div className="bg-primary text-primary-foreground p-4 rounded-full shadow-md">
                <info.icon className="h-7 w-7" />
              </div>
            </div>
            <div className="mt-1">
              <h4 className="text-xl font-semibold text-foreground mb-1">{info.label}</h4>
              {info.href ? (
                 <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors text-base break-all">{info.value}</a>
              ) : (
                <p className="text-muted-foreground text-base break-all">{info.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
