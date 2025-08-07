import { Award, Calendar, Building, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Business Analysis & Process Management",
      provider: "Coursera",
      date: "2024",
      type: "Professional Certificate",
      description: "Comprehensive course covering business analysis methodologies, process mapping, requirements gathering, and stakeholder management.",
      skills: ["Business Analysis", "Process Mapping", "Requirements Gathering", "Stakeholder Management"],
      color: "bg-gradient-primary"
    },
    {
      title: "Oracle Cloud Infrastructure Foundations",
      provider: "Oracle",
      date: "2024",
      type: "Cloud Certification",
      description: "Foundational knowledge of Oracle Cloud Infrastructure services, architecture, and deployment strategies.",
      skills: ["Cloud Computing", "Infrastructure", "Oracle Cloud", "Cloud Architecture"],
      color: "bg-gradient-secondary"
    },
    {
      title: "Power BI Workshop",
      provider: "Techtips24",
      date: "2024",
      type: "Data Analytics",
      description: "Hands-on workshop on creating interactive dashboards, data modeling, and business intelligence reporting with Power BI.",
      skills: ["Power BI", "Data Visualization", "Dashboard Design", "Business Intelligence"],
      color: "bg-gradient-primary"
    },
    {
      title: "Cisco Cybersecurity Essentials",
      provider: "Cisco Networking Academy",
      date: "2024",
      type: "Security Certification",
      description: "Comprehensive course on cybersecurity principles, threat detection, and network security fundamentals.",
      skills: ["Cybersecurity", "Network Security", "Threat Analysis", "Security Protocols"],
      color: "bg-gradient-secondary"
    },
    {
      title: "Cisco Networking Essentials",
      provider: "Cisco Networking Academy",
      date: "2024",
      type: "Networking Certification",
      description: "Foundation course covering networking concepts, protocols, and practical network configuration and troubleshooting.",
      skills: ["Networking", "TCP/IP", "Network Configuration", "Troubleshooting"],
      color: "bg-gradient-primary"
    },
    {
      title: "Java Programming Fundamentals",
      provider: "Scaler",
      date: "2024",
      type: "Programming Certification",
      description: "Intensive program covering Java programming concepts, object-oriented programming, and software development best practices.",
      skills: ["Java", "OOP", "Data Structures", "Algorithm Design"],
      color: "bg-gradient-secondary"
    }
  ];

  const handleCertificationLink = (title: string) => {
    // Demo functionality - in real implementation, these would link to actual certificates
    console.log(`Viewing certificate: ${title}`);
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-accent">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Certifications & Training
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning through industry-recognized certifications and specialized workshops 
            to stay current with technology trends and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="card-soft hover:shadow-large transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${cert.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={() => handleCertificationLink(cert.title)}
                    className="hover:bg-accent/10"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                
                <CardTitle className="text-lg md:text-xl text-primary mb-2">
                  {cert.title}
                </CardTitle>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building className="h-4 w-4" />
                    <span className="font-medium">{cert.provider}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent">
                    {cert.type}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                <div>
                  <h5 className="font-semibold text-primary mb-2 text-sm">Skills Gained</h5>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certification Summary */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Commitment to Continuous Learning
              </h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                These certifications represent my dedication to staying current with industry trends 
                and continuously expanding my technical and business knowledge base.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">6</div>
                <div className="text-sm opacity-90">Professional Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-sm opacity-90">Technology Domains</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-sm opacity-90">Learning Hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2024</div>
                <div className="text-sm opacity-90">Recent Achievements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;