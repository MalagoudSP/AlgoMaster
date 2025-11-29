import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { problems, problemDetails } from "@/data/problems";
import { 
  Play, 
  Send, 
  ChevronLeft, 
  Lightbulb, 
  BookOpen, 
  MessageSquare,
  CheckCircle2,
  Clock,
  RotateCcw
} from "lucide-react";

const ProblemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const problemId = parseInt(id || "1");
  const problem = problems.find((p) => p.id === problemId);
  const detail = problemDetails[problemId];
  
  const [code, setCode] = useState(detail?.starterCode.typescript || "// Write your solution here");
  const [language, setLanguage] = useState<"typescript" | "javascript" | "python">("typescript");
  const [showHints, setShowHints] = useState(false);
  const [output, setOutput] = useState<string | null>(null);

  if (!problem) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 pb-12 container mx-auto px-4">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Problem not found</h1>
            <Link to="/problems">
              <Button variant="outline">Back to Problems</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const difficultyColors = {
    Easy: "text-easy bg-easy/10 border-easy/20",
    Medium: "text-warning bg-warning/10 border-warning/20",
    Hard: "text-destructive bg-destructive/10 border-destructive/20",
  };

  const handleRun = () => {
    setOutput("Running tests...\n\n✓ Test case 1 passed\n✓ Test case 2 passed\n✓ Test case 3 passed\n\nAll test cases passed!");
  };

  const handleSubmit = () => {
    setOutput("Submitting solution...\n\n✓ Accepted\n\nRuntime: 56 ms (faster than 89.42%)\nMemory: 42.1 MB (less than 76.28%)");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 h-screen flex flex-col">
        {/* Problem Header */}
        <div className="border-b border-border/50 px-4 py-3 flex items-center justify-between bg-card/50">
          <div className="flex items-center gap-4">
            <Link to="/problems">
              <Button variant="ghost" size="sm" className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                Problems
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">#{problem.id}</span>
              <h1 className="font-semibold">{problem.title}</h1>
              <Badge variant="outline" className={difficultyColors[problem.difficulty]}>
                {problem.difficulty}
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <BookOpen className="w-4 h-4" />
              Editorial
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <MessageSquare className="w-4 h-4" />
              Discuss
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Panel - Problem Description */}
          <div className="w-1/2 border-r border-border/50 overflow-y-auto">
            <div className="p-6">
              <Tabs defaultValue="description">
                <TabsList className="bg-secondary/50 mb-6">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="solutions">Solutions</TabsTrigger>
                  <TabsTrigger value="submissions">Submissions</TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="space-y-6">
                  {/* Description */}
                  <div className="prose prose-invert max-w-none">
                    <div className="text-muted-foreground whitespace-pre-wrap leading-relaxed">
                      {detail?.description || "Problem description not available."}
                    </div>
                  </div>

                  {/* Examples */}
                  {detail?.examples && (
                    <div className="space-y-4">
                      <h3 className="font-semibold">Examples</h3>
                      {detail.examples.map((example, index) => (
                        <div key={index} className="card-gradient rounded-lg p-4 border border-border/50">
                          <div className="text-sm mb-2">
                            <span className="text-muted-foreground">Input: </span>
                            <code className="font-mono text-primary">{example.input}</code>
                          </div>
                          <div className="text-sm mb-2">
                            <span className="text-muted-foreground">Output: </span>
                            <code className="font-mono text-primary">{example.output}</code>
                          </div>
                          {example.explanation && (
                            <div className="text-sm text-muted-foreground">
                              <span>Explanation: </span>
                              {example.explanation}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Constraints */}
                  {detail?.constraints && (
                    <div>
                      <h3 className="font-semibold mb-3">Constraints</h3>
                      <ul className="space-y-1">
                        {detail.constraints.map((constraint, index) => (
                          <li key={index} className="text-sm text-muted-foreground font-mono">
                            • {constraint}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Hints */}
                  {detail?.hints && (
                    <div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowHints(!showHints)}
                        className="gap-2"
                      >
                        <Lightbulb className="w-4 h-4" />
                        {showHints ? "Hide Hints" : "Show Hints"}
                      </Button>
                      {showHints && (
                        <div className="mt-4 space-y-2">
                          {detail.hints.map((hint, index) => (
                            <div key={index} className="card-gradient rounded-lg p-3 border border-border/50">
                              <span className="text-sm text-muted-foreground">
                                <strong className="text-primary">Hint {index + 1}:</strong> {hint}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Topics */}
                  <div>
                    <h3 className="font-semibold mb-3">Related Topics</h3>
                    <div className="flex flex-wrap gap-2">
                      {problem.topics.map((topic) => (
                        <Badge key={topic} variant="secondary">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="solutions">
                  <p className="text-muted-foreground">Solutions will be available after you solve the problem.</p>
                </TabsContent>

                <TabsContent value="submissions">
                  <p className="text-muted-foreground">No submissions yet.</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right Panel - Code Editor */}
          <div className="w-1/2 flex flex-col">
            {/* Editor Header */}
            <div className="border-b border-border/50 px-4 py-2 flex items-center justify-between bg-card/30">
              <div className="flex items-center gap-2">
                {["typescript", "javascript", "python"].map((lang) => (
                  <Button
                    key={lang}
                    variant={language === lang ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => {
                      setLanguage(lang as any);
                      if (detail?.starterCode[lang as keyof typeof detail.starterCode]) {
                        setCode(detail.starterCode[lang as keyof typeof detail.starterCode]);
                      }
                    }}
                  >
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </Button>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="gap-2" onClick={() => setCode(detail?.starterCode[language] || "")}>
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>
            </div>

            {/* Code Editor */}
            <div className="flex-1 overflow-hidden">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full p-4 bg-card/30 font-mono text-sm resize-none focus:outline-none text-foreground"
                spellCheck={false}
              />
            </div>

            {/* Output Panel */}
            {output && (
              <div className="border-t border-border/50 p-4 bg-card/30 max-h-40 overflow-y-auto">
                <pre className="text-sm font-mono whitespace-pre-wrap">{output}</pre>
              </div>
            )}

            {/* Action Buttons */}
            <div className="border-t border-border/50 px-4 py-3 flex items-center justify-between bg-card/50">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                Last run: --
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="gap-2" onClick={handleRun}>
                  <Play className="w-4 h-4" />
                  Run
                </Button>
                <Button variant="hero" className="gap-2" onClick={handleSubmit}>
                  <Send className="w-4 h-4" />
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProblemDetail;
