import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-transparent blur-3xl animate-pulse-glow" />
      </div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">New: AI-Powered Hints & Pattern Recognition</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-slide-up">
            Master{" "}
            <span className="gradient-text">Data Structures</span>
            <br />
            & <span className="gradient-text">Algorithms</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Practice 500+ curated problems, learn coding patterns, and ace your technical interviews with interactive challenges.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/problems">
              <Button variant="hero" size="xl" className="group">
                Start Practicing
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="glass" size="xl" className="group">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {[
              { value: "500+", label: "Problems" },
              { value: "15+", label: "Patterns" },
              { value: "100K+", label: "Users" },
              { value: "95%", label: "Success Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Code Preview */}
        <div className="mt-20 relative max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="card-gradient rounded-2xl border border-border/50 overflow-hidden shadow-2xl">
            {/* Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <span className="text-sm text-muted-foreground ml-2 font-mono">two-sum.ts</span>
            </div>
            {/* Code Content */}
            <div className="p-6 font-mono text-sm">
              <pre className="text-muted-foreground">
                <code>
                  <span className="text-info">function</span>{" "}
                  <span className="text-primary">twoSum</span>
                  <span className="text-foreground">(nums: </span>
                  <span className="text-accent">number[]</span>
                  <span className="text-foreground">, target: </span>
                  <span className="text-accent">number</span>
                  <span className="text-foreground">): </span>
                  <span className="text-accent">number[]</span>
                  <span className="text-foreground">{" {"}</span>
                  {"\n"}
                  {"  "}<span className="text-info">const</span> map = <span className="text-info">new</span> <span className="text-accent">Map</span>&lt;<span className="text-accent">number</span>, <span className="text-accent">number</span>&gt;();
                  {"\n"}
                  {"  "}<span className="text-info">for</span> (<span className="text-info">let</span> i = <span className="text-primary">0</span>; i &lt; nums.length; i++) {"{"}
                  {"\n"}
                  {"    "}<span className="text-info">const</span> complement = target - nums[i];
                  {"\n"}
                  {"    "}<span className="text-info">if</span> (map.has(complement)) {"{"}
                  {"\n"}
                  {"      "}<span className="text-info">return</span> [map.get(complement)!, i];
                  {"\n"}
                  {"    "}{"}"}{"\n"}
                  {"    "}map.set(nums[i], i);
                  {"\n"}
                  {"  "}{"}"}{"\n"}
                  {"  "}<span className="text-info">return</span> [];
                  {"\n"}
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
