import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import ProblemCard from "@/components/problems/ProblemCard";
import ProblemFilters from "@/components/problems/ProblemFilters";
import { problems, Difficulty, Status, Topic } from "@/data/problems";
import { Badge } from "@/components/ui/badge";

const Problems = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (
          !problem.title.toLowerCase().includes(query) &&
          !problem.id.toString().includes(query)
        ) {
          return false;
        }
      }

      // Difficulty filter
      if (selectedDifficulty && problem.difficulty !== selectedDifficulty) {
        return false;
      }

      // Status filter
      if (selectedStatus && problem.status !== selectedStatus) {
        return false;
      }

      // Topics filter
      if (selectedTopics.length > 0) {
        if (!selectedTopics.some((topic) => problem.topics.includes(topic))) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedDifficulty, selectedStatus, selectedTopics]);

  const stats = useMemo(() => {
    const solved = problems.filter((p) => p.status === "solved").length;
    const attempted = problems.filter((p) => p.status === "attempted").length;
    const easy = problems.filter((p) => p.difficulty === "Easy" && p.status === "solved").length;
    const medium = problems.filter((p) => p.difficulty === "Medium" && p.status === "solved").length;
    const hard = problems.filter((p) => p.difficulty === "Hard" && p.status === "solved").length;
    return { solved, attempted, easy, medium, hard, total: problems.length };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Problem Set</h1>
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="outline" className="text-primary border-primary/30 bg-primary/10">
                {stats.solved}/{stats.total} Solved
              </Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-easy">Easy: {stats.easy}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-warning">Medium: {stats.medium}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-destructive">Hard: {stats.hard}</span>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="card-gradient rounded-xl p-4 border border-border/50 mb-6">
            <ProblemFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedDifficulty={selectedDifficulty}
              setSelectedDifficulty={setSelectedDifficulty}
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
              selectedTopics={selectedTopics}
              setSelectedTopics={setSelectedTopics}
            />
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-4">
            Showing {filteredProblems.length} of {problems.length} problems
          </p>

          {/* Problems Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredProblems.map((problem) => (
              <ProblemCard key={problem.id} problem={problem} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProblems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No problems found</p>
              <p className="text-sm text-muted-foreground mt-2">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Problems;
