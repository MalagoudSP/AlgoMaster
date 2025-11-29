import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer @ Google",
    avatar: "SC",
    content: "AlgoMaster's pattern-based approach completely changed how I prepare for interviews. Landed my dream job at Google after 3 months of focused practice!",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Senior Developer @ Meta",
    avatar: "MR",
    content: "The spaced repetition feature is genius. I no longer forget problems after solving them. My problem-solving speed improved dramatically.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Backend Engineer @ Amazon",
    avatar: "EW",
    content: "Best investment I made in my career. The company-specific tracks helped me focus on exactly what Amazon asks. Got an offer after my first interview!",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Full Stack @ Microsoft",
    avatar: "DK",
    content: "The AI hints feature saved me countless hours. Instead of being stuck, I got just the right nudge to figure things out myself.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "SDE II @ Apple",
    avatar: "PS",
    content: "Went from struggling with medium problems to solving hards comfortably. The detailed explanations made complex concepts click.",
    rating: 5
  },
  {
    name: "James Liu",
    role: "Software Engineer @ Netflix",
    avatar: "JL",
    content: "The community solutions and discussions are invaluable. Learning multiple approaches to the same problem expanded my thinking.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by{" "}
            <span className="gradient-text">100,000+</span>
            {" "}Engineers
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of developers who've landed their dream jobs at top tech companies.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-gradient rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-8">Our users work at</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
            {["Google", "Meta", "Amazon", "Apple", "Microsoft", "Netflix"].map((company) => (
              <span key={company} className="text-2xl font-bold text-muted-foreground">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
