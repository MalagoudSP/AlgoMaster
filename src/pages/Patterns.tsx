import Navbar from "@/components/Navbar";
import { patterns } from "@/data/problems";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

const Patterns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Algorithmic <span className="gradient-text">Patterns</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Master the 15+ common patterns that appear in 90% of coding interview problems. 
              Learning patterns is the most efficient way to prepare for technical interviews.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Patterns", value: patterns.length },
              { label: "Problems", value: patterns.reduce((acc, p) => acc + p.problems, 0) },
              { label: "Avg Mastery", value: `${Math.round(patterns.reduce((acc, p) => acc + p.mastery, 0) / patterns.length)}%` },
              { label: "Completed", value: patterns.filter(p => p.mastery >= 80).length },
            ].map((stat) => (
              <div key={stat.label} className="card-gradient rounded-xl p-4 border border-border/50 text-center">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Patterns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patterns.map((pattern, index) => (
              <div
                key={pattern.name}
                className="card-gradient rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Pattern #{index + 1}</div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {pattern.name}
                    </h3>
                  </div>
                  {pattern.mastery >= 80 && (
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  )}
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Mastery</span>
                    <span className={`font-semibold ${
                      pattern.mastery >= 70 ? "text-primary" : 
                      pattern.mastery >= 40 ? "text-accent" : "text-muted-foreground"
                    }`}>
                      {pattern.mastery}%
                    </span>
                  </div>
                  <Progress value={pattern.mastery} className="h-2" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4" />
                    <span>{pattern.problems} problems</span>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1 group-hover:text-primary">
                    Start <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Patterns;
