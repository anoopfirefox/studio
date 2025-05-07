
"use client";

import SectionWrapper from '@/components/layout/section-wrapper';
import SectionTitle from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactUsSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
      variant: "default", 
    });
    form.reset();
  };

  const contactInfo = [
    { icon: MapPin, label: "Location:", value: "A108 Adam Street, New York, NY 535022" },
    { icon: Mail, label: "Email:", value: "info@example.com", href: "mailto:info@example.com" },
    { icon: Phone, label: "Call:", value: "+1 5589 55488 55", href: "tel:+155895548855" },
  ];

  return (
    <SectionWrapper id="contact-us" ariaLabelledBy="contact-us-heading">
      <SectionTitle id="contact-us-heading" title="Contact Us" subtitle="Let's connect for collaborations or inquiries." />
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-start p-4 rounded-lg bg-secondary/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <info.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground">{info.label}</h4>
                {info.href ? (
                   <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">{info.value}</a>
                ) : (
                  <p className="text-muted-foreground">{info.value}</p>
                )}
              </div>
            </div>
          ))}
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.361281182443!2d-74.00853268459503!3d40.71005897933211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3b79183%3A0x198d634e50416be7!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1633123456789!5m2!1sen!2sbd" 
                width="100%" 
                height="250" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Office Location"
                className="rounded-lg"
              ></iframe>
          </div>
        </div>

        <div className="md:col-span-2 p-6 sm:p-8 bg-card shadow-xl rounded-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name">Your Name</FormLabel>
                      <FormControl>
                        <Input id="name" placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Your Email</FormLabel>
                      <FormControl>
                        <Input id="email" type="email" placeholder="name@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="subject">Subject</FormLabel>
                    <FormControl>
                      <Input id="subject" placeholder="Project Inquiry" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <FormControl>
                      <Textarea id="message" placeholder="Your message here..." rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-center">
                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </SectionWrapper>
  );
}

