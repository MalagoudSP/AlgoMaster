import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";
import { Difficulty, Status, Topic, topics } from "@/data/problems";

interface ProblemFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedDifficulty: Difficulty | null;
  setSelectedDifficulty: (difficulty: Difficulty | null) => void;
  selectedStatus: Status | null;
  setSelectedStatus: (status: Status | null) => void;
  selectedTopics: Topic[];
  setSelectedTopics: (topics: Topic[]) => void;
}

const ProblemFilters = ({
  searchQuery,
  setSearchQuery,
  selectedDifficulty,
  setSelectedDifficulty,
  selectedStatus,
  setSelectedStatus,
  selectedTopics,
  setSelectedTopics,
}: ProblemFiltersProps) => {
  const difficulties: Difficulty[] = ["Easy", "Medium", "Hard"];
  const statuses: { value: Status; label: string }[] = [
    { value: "solved", label: "Solved" },
    { value: "attempted", label: "Attempted" },
    { value: "unsolved", label: "Todo" },
  ];

  const toggleTopic = (topic: Topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedDifficulty(null);
    setSelectedStatus(null);
    setSelectedTopics([]);
  };

  const hasFilters = searchQuery || selectedDifficulty || selectedStatus || selectedTopics.length > 0;

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search problems..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-card border-border/50"
        />
      </div>

      {/* Difficulty & Status */}
      <div className="flex flex-wrap gap-2">
        {difficulties.map((difficulty) => (
          <Button
            key={difficulty}
            variant={selectedDifficulty === difficulty ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedDifficulty(selectedDifficulty === difficulty ? null : difficulty)}
            className={selectedDifficulty === difficulty ? "" : "border-border/50"}
          >
            {difficulty}
          </Button>
        ))}
        <div className="w-px h-8 bg-border/50" />
        {statuses.map((status) => (
          <Button
            key={status.value}
            variant={selectedStatus === status.value ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedStatus(selectedStatus === status.value ? null : status.value)}
            className={selectedStatus === status.value ? "" : "border-border/50"}
          >
            {status.label}
          </Button>
        ))}
      </div>

      {/* Topics */}
      <div className="flex flex-wrap gap-2">
        {topics.slice(0, 12).map((topic) => (
          <Badge
            key={topic}
            variant={selectedTopics.includes(topic) ? "default" : "outline"}
            className={`cursor-pointer transition-colors ${
              selectedTopics.includes(topic) 
                ? "bg-primary text-primary-foreground" 
                : "border-border/50 hover:border-primary/50"
            }`}
            onClick={() => toggleTopic(topic)}
          >
            {topic}
          </Badge>
        ))}
      </div>

      {/* Clear Filters */}
      {hasFilters && (
        <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-2">
          <X className="w-4 h-4" />
          Clear Filters
        </Button>
      )}
    </div>
  );
};

export default ProblemFilters;
