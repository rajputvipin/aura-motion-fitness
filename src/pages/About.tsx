import { Target, Users, Award, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower individuals to achieve their fitness goals through personalized training, cutting-edge facilities, and unwavering support.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Community First",
      description: "We believe fitness is better together. Our community-driven approach creates lasting connections and motivation.",
      color: "accent"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in equipment, training methods, and customer service to deliver exceptional results.",
      color: "strength"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our passion for fitness and helping others drives everything we do. Your success is our greatest achievement.",
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
                About Cult Fitness
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Founded on the belief that everyone deserves access to world-class fitness, 
              we've been transforming lives since 2018 through innovative training methods 
              and a supportive community atmosphere.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Our Story
                </h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Cult Fitness was born from a simple observation: traditional gyms weren't meeting 
                    the real needs of people seeking transformation. We saw individuals struggling 
                    with generic programs, lacking motivation, and feeling lost in crowded facilities.
                  </p>
                  <p>
                    Our founders, both certified trainers with decades of experience, envisioned 
                    something different. A place where every member receives personalized attention, 
                    where technology enhances the human touch, and where community support accelerates 
                    individual success.
                  </p>
                  <p>
                    Today, we're proud to have helped thousands of members achieve their goals, 
                    from weight loss and muscle building to athletic performance and overall wellness. 
                    Our success is measured not in numbers, but in the lives we've transformed.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 transform-3d hover:scale-105 transition-transform duration-300">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                      <div className="text-sm text-muted-foreground">Members Transformed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">6+</div>
                      <div className="text-sm text-muted-foreground">Years of Excellence</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-strength mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Expert Trainers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">98%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Our Values
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These core principles guide everything we do and shape the experience 
                we create for our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group card-lift bg-card border border-border rounded-2xl p-8 hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${
                      value.color === 'primary' ? 'bg-primary/10' :
                      value.color === 'accent' ? 'bg-accent/10' : 'bg-strength/10'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className={`h-6 w-6 ${
                        value.color === 'primary' ? 'text-primary' :
                        value.color === 'accent' ? 'text-accent' : 'text-strength'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;