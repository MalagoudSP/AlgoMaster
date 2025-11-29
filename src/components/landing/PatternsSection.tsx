import { patterns } from "@/data/problems";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PatternsSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Learn by{" "}
              <span className="gradient-text">Patterns</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Most coding interview problems follow one of 15+ common patterns. Master these patterns and you'll be able to solve any problem they throw at you.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Recognize patterns instantly during interviews",
                "Build intuition for problem-solving approaches",
                "Reduce practice time by up to 50%",
                "Gain confidence with systematic methods"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/patterns">
              <Button variant="hero" size="lg" className="group">
                Explore All Patterns
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Patterns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {patterns.slice(0, 8).map((pattern, index) => (
              <div
                key={pattern.name}
                className="card-gradient rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                    {pattern.name}
                  </h4>
                  <span className="text-xs text-muted-foreground">
                    {pattern.problems} problems
                  </span>
                </div>
                <Progress value={pattern.mastery} className="h-2 mb-2" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Mastery</span>
                  <span className={`text-sm font-semibold ${
                    pattern.mastery >= 70 ? "text-primary" : 
                    pattern.mastery >= 40 ? "text-accent" : "text-muted-foreground"
                  }`}>
                    {pattern.mastery}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatternsSection;
