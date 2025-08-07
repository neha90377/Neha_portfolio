import { Mail, Linkedin, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleDownloadResume = () => {
    // Use the actual resume file from public folder
    const link = document.createElement('a');
    link.href = '/DA cv.pdf';
    link.download = 'Neha_MP_Resume_2025.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Resume Downloaded",
      description: "Thank you for downloading my resume!",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nehamp200@gmail.com",
      href: "mailto:nehamp200@gmail.com",
      color: "bg-gradient-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/neha-m-p-20793b265",
      href: "https://linkedin.com/in/neha-m-p-20793b265",
      color: "bg-gradient-secondary"
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm actively seeking opportunities in Data Analysis, Business Analysis, and Software Engineering. 
            Let's discuss how I can contribute to your team's success.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8">
                I'm always excited to connect with professionals, discuss opportunities, 
                or collaborate on interesting projects. Feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl card-soft animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">{info.label}</div>
                    {info.href ? (
                      <a 
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-muted-foreground">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Download */}
            <Card className="card-soft animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-3">
                  <Download className="h-5 w-5" />
                  Resume
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Download my latest ATS-optimized resume with detailed experience and project information.
                </p>
                <Button 
                  onClick={handleDownloadResume}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume (PDF)
                </Button>
              </CardContent>
            </Card>
          </div>

        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
              I'm excited about opportunities to contribute to data-driven teams, optimize business processes, 
              and build innovative software solutions. Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open('mailto:nehamp200@gmail.com', '_blank')}
                size="lg"
                variant="secondary"
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-primary transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
              <Button 
                onClick={() => window.open('https://linkedin.com/in/neha-m-p-20793b265', '_blank')}
                size="lg"
                variant="secondary"
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-primary transition-all duration-300"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;