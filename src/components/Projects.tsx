import { BarChart3, Shield, Calculator, Activity, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      icon: BarChart3,
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for visualizing user behavior patterns and generating actionable business insights through comprehensive data analysis.",
      technologies: ["Python", "Pandas", "Power BI", "Data Visualization", "Business Intelligence"],
      features: [
        "Real-time user behavior tracking and analysis",
        "Interactive charts and visualizations with Power BI",
        "Automated report generation and scheduling",
        "KPI monitoring and trend analysis",
        "Data export functionality for stakeholders"
      ],
      type: "Data Analytics",
      color: "bg-gradient-primary"
    },
    {
      icon: Shield,
      title: "MigrantCare - Digital Registration System",
      description: "Secure digital platform for migrant worker registration with document upload capabilities and automated backend ID generation system.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT Authentication", "File Upload"],
      features: [
        "Secure user authentication and authorization",
        "Document upload with validation and encryption",
        "Automated unique ID generation system",
        "Real-time status tracking and notifications",
        "Admin dashboard for registration management"
      ],
      type: "Full-Stack Development",
      color: "bg-gradient-secondary"
    },
    {
      icon: Calculator,
      title: "Payroll Management System",
      description: "Comprehensive MERN stack application for automating salary calculations, tax deductions, and employee benefits processing.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "PDF Generation"],
      features: [
        "Automated salary and tax calculations",
        "Employee benefits management and tracking",
        "Payslip generation with PDF export",
        "Time tracking and attendance integration",
        "Compliance reporting and audit trails"
      ],
      type: "Enterprise Application",
      color: "bg-gradient-primary"
    },
    {
      icon: Activity,
      title: "Fitness & Wellness Tracker",
      description: "Modern web application for daily health monitoring with progress visualization and goal tracking capabilities.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Local Storage", "Progressive Web App"],
      features: [
        "Daily activity and nutrition logging",
        "Interactive progress charts and analytics",
        "Goal setting and achievement tracking",
        "Responsive design for mobile devices",
        "Offline functionality with data sync"
      ],
      type: "Frontend Development",
      color: "bg-gradient-secondary"
    }
  ];

  const handleProjectLink = (projectTitle: string) => {
    // Demo functionality - in real implementation, these would link to actual projects
    console.log(`Viewing project: ${projectTitle}`);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of practical applications spanning data analytics, full-stack development, 
            and business process automation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-soft hover:shadow-large transition-all duration-500 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 ${project.color} rounded-xl flex items-center justify-center`}>
                      <project.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl text-primary mb-2">
                        {project.title}
                      </CardTitle>
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => handleProjectLink(project.title)}
                      className="hover:bg-accent/10"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => handleProjectLink(project.title)}
                      className="hover:bg-accent/10"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-start gap-3 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="skill-badge text-xs animate-fade-in"
                        style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.05)}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-white animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Project Impact & Learning
            </h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-sm opacity-90">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">8+</div>
              <div className="text-sm opacity-90">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Full-Stack Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">6M+</div>
              <div className="text-sm opacity-90">Lines of Code</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;