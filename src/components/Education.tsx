import { GraduationCap, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      degree: "B.E. in Computer Science and Engineering",
      institution: "Suguna College of Engineering, Coimbatore",
      period: "2021 – 2025",
      percentage: "90%",
      icon: GraduationCap,
      color: "bg-gradient-primary"
    },
    {
      degree: "HSC (+2)",
      institution: "St. Thomas Higher Secondary School, Thrissur",
      period: "2021",
      percentage: "90%",
      icon: Award,
      color: "bg-gradient-secondary"
    },
    {
      degree: "SSLC (10th)",
      institution: "Amrita Vidyalayam School, Thrissur",
      period: "2019",
      percentage: "79%",
      icon: Calendar,
      color: "bg-gradient-primary"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey has provided a strong foundation in computer science, 
            mathematics, and analytical thinking.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Card 
                key={index} 
                className="card-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 ${edu.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <edu.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl text-primary mb-2">
                        {edu.degree}
                      </CardTitle>
                      <div className="text-muted-foreground space-y-1">
                        <p className="font-medium text-lg">{edu.institution}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                          <span className="text-sm">{edu.period}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full hidden sm:block"></div>
                            <span className="font-semibold text-accent">{edu.percentage}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Academic Achievements */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="card-soft">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">
                  Academic Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                      <GraduationCap className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2 text-primary">Engineering Excellence</h4>
                    <p className="text-muted-foreground">
                      Consistently maintained high academic performance throughout engineering studies
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-secondary rounded-full flex items-center justify-center">
                      <Award className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2 text-primary">Strong Foundation</h4>
                    <p className="text-muted-foreground">
                      Excellent performance in higher secondary education with 90% achievement
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Calendar className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2 text-primary">Continuous Growth</h4>
                    <p className="text-muted-foreground">
                      Progressive academic journey from school to engineering with consistent improvement
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;