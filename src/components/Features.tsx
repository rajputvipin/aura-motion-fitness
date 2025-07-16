import { Dumbbell, Users, Calendar, TrendingUp, Shield, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Dumbbell,
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers tailored to your goals and fitness level.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "High-energy group workouts that build community while you build strength.",
      color: "accent"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your lifestyle with our easy-to-use scheduling system.",
      color: "strength"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your transformation with detailed analytics and progress reports.",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Nutrition Guidance",
      description: "Personalized meal plans and nutrition coaching to fuel your success.",
      color: "accent"
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Train on your schedule with round-the-clock gym access for members.",
      color: "strength"
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case "primary": return "text-primary";
      case "accent": return "text-accent";
      case "strength": return "text-strength";
      default: return "text-primary";
    }
  };

  const getBackgroundColor = (color: string) => {
    switch (color) {
      case "primary": return "bg-primary/10";
      case "accent": return "bg-accent/10";
      case "strength": return "bg-strength/10";
      default: return "bg-primary/10";
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why Choose Cult Fitness?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of cutting-edge technology, expert guidance, 
            and a supportive community that drives real results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group card-lift bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 ${getBackgroundColor(feature.color)} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-8 w-8 ${getIconColor(feature.color)}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium hover:bg-primary/20 transition-colors cursor-pointer">
            Ready to transform your life? Let's get started! →
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;