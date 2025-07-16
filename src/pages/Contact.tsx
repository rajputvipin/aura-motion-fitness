import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Fitness Avenue", "Downtown District", "New York, NY 10001"],
      color: "primary"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568", "Mon-Sun: 6AM-11PM"],
      color: "accent"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@cultfitness.com", "support@cultfitness.com", "careers@cultfitness.com"],
      color: "strength"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 5AM-12AM", "Sat-Sun: 6AM-11PM", "24/7 Member Access"],
      color: "primary"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Have questions about membership, personal training, or our facilities? 
              We're here to help you start your fitness journey.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group card-lift bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 ${
                    info.color === 'primary' ? 'bg-primary/10' :
                    info.color === 'accent' ? 'bg-accent/10' : 'bg-strength/10'
                  }`}>
                    <info.icon className={`h-6 w-6 ${
                      info.color === 'primary' ? 'text-primary' :
                      info.color === 'accent' ? 'text-accent' : 'text-strength'
                    }`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card border border-border rounded-3xl p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Send us a Message</h2>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input 
                        placeholder="John" 
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe" 
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone (Optional)
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="+1 (555) 123-4567" 
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your fitness goals or ask any questions..."
                      rows={5}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button className="w-full btn-energy text-lg py-6 group">
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="bg-card border border-border rounded-3xl p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">
                      123 Fitness Avenue, Downtown District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Our team is standing by to help you with membership questions, 
                    class scheduling, or any other inquiries.
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start border-primary/30 hover:border-primary">
                      <Phone className="mr-3 h-4 w-4" />
                      Call Now: +1 (555) 123-4567
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-primary/30 hover:border-primary">
                      <Mail className="mr-3 h-4 w-4" />
                      Email: info@cultfitness.com
                    </Button>
                  </div>
                </div>

                {/* FAQ Quick Links */}
                <div className="bg-card border border-border rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>What are your membership options?</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Do you offer personal training?</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      <div className="w-2 h-2 bg-strength rounded-full" />
                      <span>Can I try a free class?</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>What should I bring to my first visit?</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;