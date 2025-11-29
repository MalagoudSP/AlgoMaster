import Navbar from "@/components/Navbar";
import { Progress } from "@/components/ui/progress";
import { problems, patterns } from "@/data/problems";
import { 
  Flame, 
  Target, 
  Trophy, 
  TrendingUp,
  Calendar,
  CheckCircle2,
  Clock,
  BarChart3
} from "lucide-react";

const ProgressPage = () => {
  const stats = {
    solved: problems.filter((p) => p.status === "solved").length,
    attempted: problems.filter((p) => p.status === "attempted").length,
    easy: problems.filter((p) => p.difficulty === "Easy" && p.status === "solved").length,
    easyTotal: problems.filter((p) => p.difficulty === "Easy").length,
    medium: problems.filter((p) => p.difficulty === "Medium" && p.status === "solved").length,
    mediumTotal: problems.filter((p) => p.difficulty === "Medium").length,
    hard: problems.filter((p) => p.difficulty === "Hard" && p.status === "solved").length,
    hardTotal: problems.filter((p) => p.difficulty === "Hard").length,
    total: problems.length,
    streak: 7,
    rank: 15432,
  };

  const recentActivity = [
    { problem: "Two Sum", status: "solved", time: "2 hours ago" },
    { problem: "3Sum", status: "solved", time: "5 hours ago" },
    { problem: "Add Two Numbers", status: "attempted", time: "1 day ago" },
    { problem: "Valid Parentheses", status: "solved", time: "2 days ago" },
    { problem: "Merge Intervals", status: "attempted", time: "3 days ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Your Progress</h1>
            <p className="text-muted-foreground">Track your journey to interview success</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card-gradient rounded-xl p-5 border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Solved</span>
              </div>
              <div className="text-3xl font-bold">{stats.solved}</div>
              <div className="text-sm text-muted-foreground">of {stats.total} problems</div>
            </div>

            <div className="card-gradient rounded-xl p-5 border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">Streak</span>
              </div>
              <div className="text-3xl font-bold">{stats.streak}</div>
              <div className="text-sm text-muted-foreground">days in a row</div>
            </div>

            <div className="card-gradient rounded-xl p-5 border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-info/20 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-info" />
                </div>
                <span className="text-sm text-muted-foreground">Rank</span>
              </div>
              <div className="text-3xl font-bold">#{stats.rank.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">global ranking</div>
            </div>

            <div className="card-gradient rounded-xl p-5 border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Acceptance</span>
              </div>
              <div className="text-3xl font-bold">{Math.round((stats.solved / (stats.solved + stats.attempted)) * 100)}%</div>
              <div className="text-sm text-muted-foreground">success rate</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Difficulty Breakdown */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card-gradient rounded-xl p-6 border border-border/50">
                <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Difficulty Breakdown
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-easy">Easy</span>
                      <span className="text-sm text-muted-foreground">
                        {stats.easy}/{stats.easyTotal}
                      </span>
                    </div>
                    <Progress value={(stats.easy / stats.easyTotal) * 100} className="h-3" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-warning">Medium</span>
                      <span className="text-sm text-muted-foreground">
                        {stats.medium}/{stats.mediumTotal}
                      </span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-secondary overflow-hidden">
                      <div 
                        className="h-full bg-warning transition-all duration-300"
                        style={{ width: `${(stats.medium / stats.mediumTotal) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-destructive">Hard</span>
                      <span className="text-sm text-muted-foreground">
                        {stats.hard}/{stats.hardTotal}
                      </span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-secondary overflow-hidden">
                      <div 
                        className="h-full bg-destructive transition-all duration-300"
                        style={{ width: `${(stats.hard / stats.hardTotal) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Pattern Progress */}
              <div className="card-gradient rounded-xl p-6 border border-border/50">
                <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Pattern Mastery
                </h2>
                
                <div className="grid grid-cols-2 gap-4">
                  {patterns.slice(0, 6).map((pattern) => (
                    <div key={pattern.name} className="flex items-center gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm truncate">{pattern.name}</span>
                          <span className={`text-xs font-medium ${
                            pattern.mastery >= 70 ? "text-primary" : 
                            pattern.mastery >= 40 ? "text-accent" : "text-muted-foreground"
                          }`}>
                            {pattern.mastery}%
                          </span>
                        </div>
                        <Progress value={pattern.mastery} className="h-1.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card-gradient rounded-xl p-6 border border-border/50 h-fit">
              <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Recent Activity
              </h2>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {activity.status === "solved" ? (
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    ) : (
                      <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{activity.problem}</div>
                      <div className="text-xs text-muted-foreground">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProgressPage;
