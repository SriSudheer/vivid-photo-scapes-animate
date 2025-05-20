
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag, CheckCircle, MessageCircle, Lightbulb, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

// Type definitions for our organized thoughts
type ThoughtType = "task" | "idea" | "note";

interface OrganizedThought {
  id: string;
  title: string;
  content: string;
  type: ThoughtType;
  tags: string[];
  createdAt: Date;
}

// Mock data for demonstration
const mockThoughts: OrganizedThought[] = [
  {
    id: "1",
    title: "Prepare presentation for client meeting",
    content: "Need to finish slides and prepare talking points for the quarterly review with Acme Corp.",
    type: "task",
    tags: ["work", "urgent"],
    createdAt: new Date("2025-05-18T10:30:00")
  },
  {
    id: "2",
    title: "App feature: voice memos with transcription",
    content: "What if we added a feature that lets users record voice memos and automatically transcribes them into text?",
    type: "idea",
    tags: ["product", "feature"],
    createdAt: new Date("2025-05-19T14:45:00")
  },
  {
    id: "3",
    title: "Research on AI prompt engineering",
    content: "Found interesting article on prompt engineering techniques. Key points: specificity matters, context improves results, examples help guide output format.",
    type: "note",
    tags: ["learning", "ai"],
    createdAt: new Date("2025-05-20T09:15:00")
  }
];

export default function ThoughtDisplay() {
  const [thoughts] = useState<OrganizedThought[]>(mockThoughts);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Filter thoughts based on search query and active filter
  const filteredThoughts = thoughts.filter(thought => {
    // Search filter
    const matchesSearch = searchQuery === "" || 
      thought.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      thought.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thought.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Tag filter
    const matchesTag = activeFilter === null || 
      thought.tags.includes(activeFilter);
    
    return matchesSearch && matchesTag;
  });

  // Get all unique tags
  const allTags = Array.from(new Set(thoughts.flatMap(thought => thought.tags)));

  // Render the appropriate icon based on thought type
  const getThoughtIcon = (type: ThoughtType) => {
    switch (type) {
      case "task": return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "idea": return <Lightbulb className="h-5 w-5 text-yellow-500" />;
      case "note": return <MessageCircle className="h-5 w-5 text-blue-500" />;
      default: return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search your thoughts..." 
              className="pl-9 bg-photo-dark border-photo-light-gray"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
        
        {/* Tag filters */}
        <div className="flex flex-wrap gap-2 mt-2">
          {allTags.map(tag => (
            <Button
              key={tag}
              size="sm"
              variant={activeFilter === tag ? "default" : "outline"}
              className={activeFilter === tag ? "bg-photo-purple" : "bg-photo-dark"}
              onClick={() => setActiveFilter(activeFilter === tag ? null : tag)}
            >
              <Tag className="mr-1 h-3 w-3" />
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="ideas">Ideas</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4 space-y-4">
          {filteredThoughts.length > 0 ? (
            filteredThoughts.map((thought) => (
              <Card key={thought.id} className="bg-photo-gray border-photo-light-gray">
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  {getThoughtIcon(thought.type)}
                  <div>
                    <CardTitle className="text-lg">{thought.title}</CardTitle>
                    <CardDescription>
                      {new Date(thought.createdAt).toLocaleDateString()} • {thought.type}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <p>{thought.content}</p>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <div className="flex flex-wrap gap-2">
                    {thought.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs bg-photo-light-gray px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="h-4 w-4 mr-1" /> Chat
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No thoughts found matching your search criteria.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="tasks" className="mt-4">
          {filteredThoughts.filter(t => t.type === "task").length > 0 ? (
            filteredThoughts
              .filter(thought => thought.type === "task")
              .map((thought) => (
                // Similar card as above but for tasks only
                <Card key={thought.id} className="mb-4 bg-photo-gray border-photo-light-gray">
                  <CardHeader className="flex flex-row items-center gap-2 pb-2">
                    {getThoughtIcon("task")}
                    <div>
                      <CardTitle className="text-lg">{thought.title}</CardTitle>
                      <CardDescription>
                        {new Date(thought.createdAt).toLocaleDateString()}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <p>{thought.content}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <div className="flex flex-wrap gap-2">
                      {thought.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="text-xs bg-photo-light-gray px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="h-4 w-4 mr-1" /> Chat
                    </Button>
                  </CardFooter>
                </Card>
              ))
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No tasks found.</p>
            </div>
          )}
        </TabsContent>
        
        {/* Similar content for ideas and notes tabs */}
        <TabsContent value="ideas" className="mt-4">
          {/* Similar structure for ideas */}
          {filteredThoughts.filter(t => t.type === "idea").length > 0 ? (
            filteredThoughts
              .filter(thought => thought.type === "idea")
              .map((thought) => (
                <Card key={thought.id} className="mb-4 bg-photo-gray border-photo-light-gray">
                  <CardHeader className="flex flex-row items-center gap-2 pb-2">
                    {getThoughtIcon("idea")}
                    <div>
                      <CardTitle className="text-lg">{thought.title}</CardTitle>
                      <CardDescription>
                        {new Date(thought.createdAt).toLocaleDateString()}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <p>{thought.content}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <div className="flex flex-wrap gap-2">
                      {thought.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="text-xs bg-photo-light-gray px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="h-4 w-4 mr-1" /> Chat
                    </Button>
                  </CardFooter>
                </Card>
              ))
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No ideas found.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="notes" className="mt-4">
          {/* Similar structure for notes */}
          {filteredThoughts.filter(t => t.type === "note").length > 0 ? (
            filteredThoughts
              .filter(thought => thought.type === "note")
              .map((thought) => (
                <Card key={thought.id} className="mb-4 bg-photo-gray border-photo-light-gray">
                  <CardHeader className="flex flex-row items-center gap-2 pb-2">
                    {getThoughtIcon("note")}
                    <div>
                      <CardTitle className="text-lg">{thought.title}</CardTitle>
                      <CardDescription>
                        {new Date(thought.createdAt).toLocaleDateString()}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <p>{thought.content}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <div className="flex flex-wrap gap-2">
                      {thought.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="text-xs bg-photo-light-gray px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="h-4 w-4 mr-1" /> Chat
                    </Button>
                  </CardFooter>
                </Card>
              ))
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No notes found.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
