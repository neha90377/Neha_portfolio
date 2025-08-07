import { Code2, Database, BarChart3, Wrench, Users, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming & Development",
      color: "bg-gradient-primary",
      skills: ["Python", "JavaScript", "React", "Node.js", "MERN Stack", "HTML5/CSS3"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      color: "bg-gradient-secondary",
      skills: ["Power BI", "MS Excel", "Pandas", "NumPy", "Data Visualization", "Business Intelligence"]
    },
    {
      icon: Database,
      title: "Databases & Cloud",
      color: "bg-gradient-primary",
      skills: ["SQL", "MongoDB", "Oracle Cloud", "Database Design", "RESTful APIs", "Cloud Platforms"]
    },
    {
      icon: Wrench,
      title: "Development Tools",
      color: "bg-gradient-secondary",
      skills: ["Git", "Visual Studio Code", "Anaconda", "JIRA", "Docker", "Linux"]
    },
    {
      icon: Brain,
      title: "Analytical Skills",
      color: "bg-gradient-primary",
      skills: ["Critical Thinking", "Problem Solving", "Data Analysis", "Process Optimization", "Requirements Analysis", "Documentation"]
    },
    {
      icon: Users,
      title: "Soft Skills",
      color: "bg-gradient-secondary",
      skills: ["Team Collaboration", "Stakeholder Communication", "Multitasking", "Agile Methodology", "Presentation Skills", "Leadership"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-accent">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning programming, data analysis, and business intelligence 
            to drive innovation and solve complex challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-soft hover:shadow-large transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="skill-badge animate-fade-in"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center p-6 bg-white rounded-xl card-soft">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Programming Languages</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl card-soft">
            <div className="text-3xl font-bold text-accent mb-2">10+</div>
            <div className="text-muted-foreground">Development Tools</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl card-soft">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-muted-foreground">Major Projects</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl card-soft">
            <div className="text-3xl font-bold text-accent mb-2">6+</div>
            <div className="text-muted-foreground">Certifications</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Apply These Skills
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              I'm excited to bring this diverse skill set to a dynamic team where I can contribute 
              to data-driven decision making, software development, and business process optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;