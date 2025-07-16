import { Dumbbell, Zap, Users, Clock, Heart, Target, Droplets, Wind } from "lucide-react";
import Navbar from "@/components/Navbar";

const Facilities = () => {
  const facilities = [
    {
      icon: Dumbbell,
      title: "Strength Training Zone",
      description: "State-of-the-art equipment including free weights, resistance machines, and functional training areas.",
      features: ["Olympic barbells and plates", "Power racks and squat stations", "Cable machines", "Functional trainers"],
      color: "primary"
    },
    {
      icon: Heart,
      title: "Cardio Theater",
      description: "Premium cardiovascular equipment with entertainment systems and virtual training programs.",
      features: ["Treadmills with TV screens", "Elliptical machines", "Rowing machines", "Stationary bikes"],
      color: "accent"
    },
    {
      icon: Users,
      title: "Group Fitness Studios",
      description: "Spacious studios designed for high-energy group classes and specialized training sessions.",
      features: ["Yoga and pilates studio", "Dance fitness room", "Spin cycling studio", "HIIT training area"],
      color: "strength"
    },
    {
      icon: Target,
      title: "Personal Training Suites",
      description: "Private training areas equipped with specialized equipment for one-on-one sessions.",
      features: ["Private consultation rooms", "Specialized equipment", "Assessment tools", "Recovery stations"],
      color: "primary"
    },
    {
      icon: Droplets,
      title: "Recovery & Wellness",
      description: "Comprehensive recovery facilities to help you rejuvenate and prepare for your next workout.",
      features: ["Sauna and steam rooms", "Massage therapy", "Ice baths", "Stretching areas"],
      color: "accent"
    },
    {
      icon: Wind,
      title: "Outdoor Training Area",
      description: "Weather-resistant outdoor space for functional training and fresh air workouts.",
      features: ["Turf training area", "Obstacle course", "Outdoor weights", "Running track"],
      color: "strength"
    }
  ];

  const amenities = [
    { icon: Clock, title: "24/7 Access", description: "Train anytime that suits your schedule" },
    { icon: Droplets, title: "Premium Showers", description: "Luxurious changing rooms with lockers" },
    { icon: Zap, title: "High-Speed WiFi", description: "Stay connected during your workout" },
    { icon: Heart, title: "Nutrition Bar", description: "Healthy snacks and protein shakes" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                World-Class Facilities
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Experience fitness like never before with our premium equipment, innovative spaces, 
              and thoughtfully designed environment that inspires greatness.
            </p>
          </div>
        </section>

        {/* Main Facilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="group card-lift bg-card border border-border rounded-3xl p-8 hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`p-4 rounded-2xl ${
                      facility.color === 'primary' ? 'bg-primary/10' :
                      facility.color === 'accent' ? 'bg-accent/10' : 'bg-strength/10'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <facility.icon className={`h-8 w-8 ${
                        facility.color === 'primary' ? 'text-primary' :
                        facility.color === 'accent' ? 'text-accent' : 'text-strength'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {facility.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {facility.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {facility.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          facility.color === 'primary' ? 'bg-primary' :
                          facility.color === 'accent' ? 'bg-accent' : 'bg-strength'
                        }`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Additional Amenities
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Every detail designed to enhance your fitness journey and comfort.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="text-center group transform-3d hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex p-6 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                    <amenity.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {amenity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Virtual Tour CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Experience It Yourself?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule a tour and see why Cult Fitness is the premier destination 
                for your fitness transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-energy px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105">
                  Schedule a Tour
                </button>
                <button className="px-8 py-4 text-lg font-medium border border-primary/30 rounded-xl text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300">
                  Virtual Walkthrough
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Facilities;