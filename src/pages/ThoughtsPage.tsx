
import { useState } from "react";
import ThoughtDisplay from "@/components/ThoughtDisplay";
import ChatAssistant from "@/components/ChatAssistant";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

export default function ThoughtsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  return (
    <div className="container mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gradient">Your Organized Thoughts</h1>
        <p className="text-muted-foreground mt-2">
          AI-powered organization of your thoughts into tasks, ideas, and notes
        </p>
      </header>
      
      <div className="mb-6 flex justify-end">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-photo-purple hover:bg-photo-purple/90">
              <Plus className="mr-2 h-4 w-4" /> New Thought
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px] bg-photo-dark border-photo-light-gray">
            <DialogHeader>
              <DialogTitle>Add New Thought</DialogTitle>
            </DialogHeader>
            <div className="mt-2">
              <ContactForm />
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <ThoughtDisplay />
      <ChatAssistant />
    </div>
  );
}
