import { ArrowRight, Play, Zap, Target, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fitness.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fitness Hero"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "2s" }}>
          <div className="w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse-glow" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float" style={{ animationDelay: "4s" }}>
          <div className="w-16 h-16 bg-strength/20 rounded-full blur-lg animate-pulse-glow" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium animate-pulse-glow">
            <Zap className="w-4 h-4 mr-2" />
            Transform Your Body, Transform Your Life
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Unleash Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transform-3d">
              Inner Beast
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join the fitness revolution with personalized training, cutting-edge facilities, 
            and a community that pushes you beyond your limits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/signup">
              <Button size="lg" className="btn-energy text-lg px-8 py-4 group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-primary/30 hover:border-primary group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center transform-3d hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-2">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center transform-3d hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-2">
                <Trophy className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Success Stories</div>
            </div>
            <div className="text-center transform-3d hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-2">
                <Zap className="h-8 w-8 text-strength" />
              </div>
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Expert Trainers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;