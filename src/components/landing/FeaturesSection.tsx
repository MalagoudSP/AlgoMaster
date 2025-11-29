import { 
  Code2, 
  Brain, 
  Target, 
  Zap, 
  Users, 
  Trophy,
  GitBranch,
  Clock,
  Lightbulb,
  BarChart3,
  BookOpen,
  Rocket
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "500+ Curated Problems",
    description: "Hand-picked problems from real interviews at top tech companies like Google, Meta, and Amazon.",
    color: "primary"
  },
  {
    icon: Brain,
    title: "Pattern-Based Learning",
    description: "Master 15+ algorithmic patterns that appear repeatedly in technical interviews.",
    color: "accent"
  },
  {
    icon: Target,
    title: "Company-Specific Tracks",
    description: "Focus on problems frequently asked at your target company with curated problem lists.",
    color: "primary"
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Run your code against test cases instantly and get detailed error messages.",
    color: "accent"
  },
  {
    icon: GitBranch,
    title: "Multiple Languages",
    description: "Solve problems in TypeScript, JavaScript, Python, and more with syntax highlighting.",
    color: "primary"
  },
  {
    icon: Clock,
    title: "Spaced Repetition",
    description: "Smart review system reminds you to revisit problems for long-term retention.",
    color: "accent"
  },
  {
    icon: Lightbulb,
    title: "AI-Powered Hints",
    description: "Get progressive hints that guide you without giving away the solution.",
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Track your improvement with detailed statistics and performance insights.",
    color: "accent"
  },
  {
    icon: Users,
    title: "Community Solutions",
    description: "Learn from thousands of community solutions with explanations and discussions.",
    color: "primary"
  },
  {
    icon: Trophy,
    title: "Daily Challenges",
    description: "Build consistency with daily challenges and maintain your coding streak.",
    color: "accent"
  },
  {
    icon: BookOpen,
    title: "In-Depth Explanations",
    description: "Understand the 'why' behind solutions with detailed step-by-step explanations.",
    color: "primary"
  },
  {
    icon: Rocket,
    title: "Interview Simulations",
    description: "Practice under real interview conditions with timed coding sessions.",
    color: "accent"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Ace Your Interview</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A comprehensive platform designed by engineers who've been through the process and know exactly what it takes to succeed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group card-gradient rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                feature.color === "primary" 
                  ? "bg-primary/10 text-primary group-hover:bg-primary/20" 
                  : "bg-accent/10 text-accent group-hover:bg-accent/20"
              } transition-colors`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
