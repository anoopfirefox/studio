
import SectionWrapper from '@/components/layout/section-wrapper';
import SectionTitle from '@/components/ui/section-title';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'; // CardDescription removed as not explicitly used for title

const summary = {
  name: "John Doe",
  description: "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
  address: "Portland, Oregon, USA",
  phone: "(123) 456-7890",
  email: "alice.barkley@example.com",
};

const educationData = [
  {
    degree: "Master of Fine Arts & Graphic Design",
    period: "2015 - 2016",
    institution: "Rochester Institute of Technology, Rochester, NY",
    description: "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
  },
  {
    degree: "Bachelor of Fine Arts & Graphic Design",
    period: "2010 - 2014",
    institution: "Rochester Institute of Technology, Rochester, NY",
    description: "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila",
  },
];

const experienceData = [
  {
    role: "Senior Graphic Design Specialist",
    period: "2019 - Present",
    company: "Experion, New York, NY",
    responsibilities: [
      "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
      "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
      "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
      "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
    ],
  },
  {
    role: "Graphic Design Specialist",
    period: "2017 - 2018",
    company: "Stepping Stone Advertising, New York, NY",
    responsibilities: [
      "Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).",
      "Managed up to 5 projects or tasks at a given time while under pressure",
      "Recommended and consulted with clients on the most appropriate graphic design",
      "Created 4+ design presentations and proposals a month for clients and account managers",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" ariaLabelledBy="experience-heading">
      <SectionTitle id="experience-heading" title="Experience" subtitle="My professional journey and education." />
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Summary is part of overall profile, usually. Here we focus on Education and Work Experience */}
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
       {/* Summary section from original Resume, can be integrated into Profile or kept minimal here if desired */}
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

