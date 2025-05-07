
import SectionWrapper from '@/components/layout/section-wrapper';
import SectionTitle from '@/components/ui/section-title';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'; 

const summary = {
  name: "Anoop p hegde",
  description: "Highly motivated and experienced Staff Software Engineer specializing in GenAI, Cloud technologies, and Full Stack Development. Proven ability to design, develop, and deploy scalable and innovative software solutions. Passionate about leveraging cutting-edge technologies to solve complex problems and drive business value.",
  address: "Bengaluru, Karnataka, India",
  phone: "+91 98765 43210", // Placeholder
  email: "anoop.hegde@example.com", // Placeholder
};

const educationData = [
  {
    degree: "Master of Science in Computer Science", // Generic update
    period: "2014 - 2016", // Generic update
    institution: "Visvesvaraya Technological University (VTU) or equivalent", // Generic update
    description: "Specialized in advanced software engineering principles, distributed systems, and machine learning. Thesis project focused on [Generic AI/Cloud Project Topic].",
  },
  {
    degree: "Bachelor of Engineering in Computer Science", // Generic update
    period: "2010 - 2014", // Generic update
    institution: "Reputed Engineering College, India", // Generic update
    description: "Comprehensive foundation in computer science fundamentals, including data structures, algorithms, database management, and operating systems.",
  },
];

const experienceData = [
  {
    role: "Staff Software Engineer", // Generic update
    period: "2020 - Present", // Generic update
    company: "Leading Tech Company, Bengaluru", // Generic update
    responsibilities: [
      "Lead the design and development of scalable microservices for [GenAI/Cloud Platform].",
      "Mentor junior engineers and conduct code reviews to ensure high-quality deliverables.",
      "Collaborate with product managers and designers to define project requirements and timelines.",
      "Drive innovation by researching and implementing new technologies and best practices.",
      "Optimize application performance and reliability through monitoring and CI/CD pipelines.",
    ],
  },
  {
    role: "Senior Software Engineer", // Generic update
    period: "2017 - 2020", // Generic update
    company: "Mid-Sized Tech Firm, Bengaluru", // Generic update
    responsibilities: [
      "Developed and maintained key features for a [SaaS/E-commerce] application using [Relevant Tech Stack, e.g., React, Node.js, AWS].",
      "Contributed to the migration of legacy systems to modern cloud infrastructure.",
      "Participated in agile scrum ceremonies and contributed to sprint planning and execution.",
      "Improved system efficiency by identifying and resolving performance bottlenecks.",
    ],
  },
   {
    role: "Software Engineer", // Generic update
    period: "2016 - 2017", // Generic update
    company: "Startup Inc., Bengaluru", // Generic update
    responsibilities: [
      "Worked on full-stack development tasks for early-stage product development.",
      "Gained experience with various technologies and rapid prototyping.",
      "Contributed to building foundational features of the core product.",
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
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
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
                  <li>{summary.phone}</li>
                  <li>{summary.email}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
    </SectionWrapper>
  );
}

