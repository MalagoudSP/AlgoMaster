import { Problem } from "@/data/problems";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock, Lock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface ProblemCardProps {
  problem: Problem;
}

const ProblemCard = ({ problem }: ProblemCardProps) => {
  const difficultyColors = {
    Easy: "text-easy bg-easy/10 border-easy/20",
    Medium: "text-warning bg-warning/10 border-warning/20",
    Hard: "text-destructive bg-destructive/10 border-destructive/20",
  };

  const statusIcons = {
    solved: <CheckCircle2 className="w-5 h-5 text-primary" />,
    attempted: <Clock className="w-5 h-5 text-accent" />,
    unsolved: <Circle className="w-5 h-5 text-muted-foreground" />,
  };

  return (
    <Link to={`/problems/${problem.id}`}>
      <div className="card-gradient rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {statusIcons[problem.status]}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-muted-foreground">#{problem.id}</span>
                {problem.isPremium && <Lock className="w-3.5 h-3.5 text-accent" />}
              </div>
              <h3 className="font-semibold truncate group-hover:text-primary transition-colors">
                {problem.title}
              </h3>
            </div>
          </div>

          <Badge variant="outline" className={difficultyColors[problem.difficulty]}>
            {problem.difficulty}
          </Badge>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {problem.topics.slice(0, 3).map((topic) => (
            <Badge key={topic} variant="secondary" className="text-xs">
              {topic}
            </Badge>
          ))}
          {problem.topics.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{problem.topics.length - 3}
            </Badge>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>Acceptance: {problem.acceptance}%</span>
            {problem.frequency && (
              <span className="flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                {problem.frequency}%
              </span>
            )}
          </div>
          {problem.companies && problem.companies.length > 0 && (
            <div className="flex items-center gap-1">
              {problem.companies.slice(0, 2).map((company) => (
                <span key={company} className="text-xs">{company}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProblemCard;
