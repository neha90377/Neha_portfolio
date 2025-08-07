import { Briefcase, Calendar, MapPin, Code, Users, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const achievements = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Built scalable React components and integrated RESTful APIs"
    },
    {
      icon: Users,
      title: "Agile Collaboration",
      description: "Collaborated with cross-functional teams during sprint cycles"
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description: "Deployed modules to cloud platforms using modern DevOps practices"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Internship Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience in full-stack development and agile software engineering practices
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-soft hover:shadow-large transition-all duration-500 animate-slide-in-left">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl md:text-3xl text-primary">
                      Software Engineer Intern
                    </CardTitle>
                    <p className="text-xl font-semibold text-accent mt-1">
                      Workcohol, Chennai
                    </p>
                  </div>
                </div>
                <div className="text-right text-muted-foreground">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">Jan 2025 - Apr 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Chennai, India</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-primary">
                  Key Responsibilities & Achievements
                </h4>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-3 flex-shrink-0"></div>
                    <span>
                      <strong>Frontend Development:</strong> Built scalable and reusable React components 
                      with modern JavaScript ES6+ features, implementing responsive design patterns and 
                      component lifecycle optimization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-3 flex-shrink-0"></div>
                    <span>
                      <strong>API Integration:</strong> Integrated RESTful APIs using Node.js and Express, 
                      implementing error handling, data validation, and efficient state management for 
                      seamless user experiences
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-3 flex-shrink-0"></div>
                    <span>
                      <strong>Agile Methodology:</strong> Actively participated in sprint planning, daily standups, 
                      and retrospectives, collaborating with product managers and designers to deliver features 
                      on time and within scope
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-3 flex-shrink-0"></div>
                    <span>
                      <strong>Database Management:</strong> Worked extensively with MongoDB for data modeling, 
                      query optimization, and implementing efficient data retrieval patterns for improved 
                      application performance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-3 flex-shrink-0"></div>
                    <span>
                      <strong>DevOps & Deployment:</strong> Deployed application modules to cloud platforms, 
                      implementing CI/CD pipelines and learning containerization with Docker for scalable deployments
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-3 flex-shrink-0"></div>
                    <span>
                      <strong>Version Control:</strong> Utilized Git for collaborative development, managing feature 
                      branches, code reviews, and maintaining clean commit histories for team coordination
                    </span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="text-center p-6 bg-gradient-accent rounded-xl card-soft animate-fade-in"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <h5 className="font-semibold text-primary mb-2">
                      {achievement.title}
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-muted rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-3 text-primary">
                  Technologies & Tools Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'ReactJS', 'Node.js', 'JavaScript ES6+', 'MongoDB', 'Express.js', 
                    'RESTful APIs', 'Git', 'Agile/Scrum', 'Docker', 'Cloud Platforms',
                    'HTML5/CSS3', 'Responsive Design'
                  ].map((tech, index) => (
                    <span 
                      key={index} 
                      className="skill-badge animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;