import { GraduationCap, Target, Users, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "B.E. Computer Science from Suguna College of Engineering with 9.02 CGPA"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Passionate about solving complex problems using data, code, and business logic"
    },
    {
      icon: Brain,
      title: "Analytical Mindset",
      description: "Strong analytical thinking with focus on data-driven decision making"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent communication and collaboration skills in diverse team environments"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-accent">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A dedicated Computer Science graduate with a passion for transforming complex data 
            into meaningful insights and building innovative software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
              My Journey
            </h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                I graduated from <span className="font-semibold text-primary">Suguna College of Engineering, Coimbatore</span> 
                with a B.E. in Computer Science Engineering in 2025, achieving a <span className="font-semibold text-accent">9.02 CGPA</span>. 
                My academic journey has been driven by a deep curiosity for technology and its applications in solving real-world problems.
              </p>
              <p>
                My passion lies at the intersection of <span className="font-semibold text-accent">data analysis</span>, 
                <span className="font-semibold text-accent"> business intelligence</span>, and 
                <span className="font-semibold text-accent"> software engineering</span>. I believe in the power of data 
                to drive informed decisions and the importance of clean, scalable code to build robust solutions.
              </p>
              <p>
                Through my internship experience and personal projects, I've developed strong skills in 
                full-stack development, data visualization, and business process analysis. I'm particularly 
                excited about roles that combine technical expertise with business strategy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {highlights.map((highlight, index) => (
              <Card key={index} className="card-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <highlight.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-primary">
                    {highlight.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Core Strengths
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Analytical Thinking</h4>
              <p className="text-sm opacity-90">Breaking down complex problems into manageable solutions</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Documentation</h4>
              <p className="text-sm opacity-90">Clear, comprehensive technical and business documentation</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Communication</h4>
              <p className="text-sm opacity-90">Effective stakeholder communication and presentation skills</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Collaboration</h4>
              <p className="text-sm opacity-90">Strong team player with Agile methodology experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;