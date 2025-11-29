import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Trophy, Users, ArrowRight, Star } from "lucide-react";

const contests = [
  {
    id: 1,
    title: "Weekly Contest 378",
    type: "Weekly",
    status: "upcoming",
    date: "Dec 3, 2024",
    time: "10:30 AM",
    duration: "90 min",
    participants: 12500,
    problems: 4,
  },
  {
    id: 2,
    title: "Biweekly Contest 120",
    type: "Biweekly",
    status: "upcoming",
    date: "Dec 7, 2024",
    time: "8:30 PM",
    duration: "90 min",
    participants: 8200,
    problems: 4,
  },
  {
    id: 3,
    title: "Weekly Contest 377",
    type: "Weekly",
    status: "completed",
    date: "Nov 26, 2024",
    time: "10:30 AM",
    duration: "90 min",
    participants: 15432,
    problems: 4,
    rank: 1523,
  },
  {
    id: 4,
    title: "Biweekly Contest 119",
    type: "Biweekly",
    status: "completed",
    date: "Nov 23, 2024",
    time: "8:30 PM",
    duration: "90 min",
    participants: 9876,
    problems: 4,
    rank: 892,
  },
];

const Contests = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Contests</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Compete with thousands of developers in timed coding challenges. Test your skills under pressure and climb the leaderboard.
            </p>
          </div>

          {/* Contest Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Trophy, label: "Best Rank", value: "#892" },
              { icon: Star, label: "Rating", value: "1,847" },
              { icon: Users, label: "Contests Joined", value: "23" },
              { icon: Calendar, label: "This Month", value: "4" },
            ].map((stat) => (
              <div key={stat.label} className="card-gradient rounded-xl p-4 border border-border/50">
                <div className="flex items-center gap-3 mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Upcoming Contests */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Upcoming Contests</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {contests.filter(c => c.status === "upcoming").map((contest) => (
                <div
                  key={contest.id}
                  className="card-gradient rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge variant="outline" className="text-primary border-primary/30 bg-primary/10 mb-2">
                        {contest.type}
                      </Badge>
                      <h3 className="text-lg font-semibold">{contest.title}</h3>
                    </div>
                    <Button variant="hero" size="sm" className="gap-2">
                      Register <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {contest.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {contest.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {contest.participants.toLocaleString()} registered
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4" />
                      {contest.problems} problems
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Contests */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Past Contests</h2>
            <div className="space-y-4">
              {contests.filter(c => c.status === "completed").map((contest) => (
                <div
                  key={contest.id}
                  className="card-gradient rounded-xl p-4 border border-border/50 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary">{contest.type}</Badge>
                    <div>
                      <h3 className="font-semibold">{contest.title}</h3>
                      <div className="text-sm text-muted-foreground">{contest.date}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Your Rank</div>
                      <div className="font-semibold text-primary">#{contest.rank?.toLocaleString()}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Participants</div>
                      <div className="font-semibold">{contest.participants.toLocaleString()}</div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Results
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contests;
