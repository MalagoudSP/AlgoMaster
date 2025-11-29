import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl animate-pulse-glow" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Start Free Today</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to{" "}
            <span className="gradient-text">Land Your Dream Job</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join 100,000+ engineers who are mastering algorithms and landing offers at top tech companies. Your journey starts with a single problem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/problems">
              <Button variant="hero" size="xl" className="group">
                Start Practicing Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              No credit card required • 50 free problems
            </p>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              "500+ Problems",
              "15+ Patterns",
              "Multiple Languages",
              "Progress Tracking"
            ].map((feature) => (
              <div key={feature} className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
