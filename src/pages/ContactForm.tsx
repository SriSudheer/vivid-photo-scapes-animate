
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mic, MicOff, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function ContactForm() {
  const { toast } = useToast();
  const [isRecording, setIsRecording] = useState(false);
  const [thought, setThought] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!thought.trim()) {
      toast({
        title: "Empty thought",
        description: "Please enter your thought or record a voice message.",
        variant: "destructive",
      });
      return;
    }
    
    // Here we would normally send the thought to the AI for processing
    toast({
      title: "Thought submitted",
      description: "Your thought is being processed by AI.",
    });
    
    // Reset form
    setThought("");
    setTitle("");
  };

  const toggleRecording = () => {
    if (!isRecording) {
      // Request microphone permission and start recording
      navigator.mediaDevices?.getUserMedia({ audio: true })
        .then(() => {
          setIsRecording(true);
          toast({
            title: "Recording started",
            description: "Speak your thought clearly...",
          });
        })
        .catch(err => {
          toast({
            title: "Microphone access denied",
            description: "Please allow microphone access to record thoughts.",
            variant: "destructive",
          });
          console.error("Error accessing microphone:", err);
        });
    } else {
      // Stop recording and process audio
      setIsRecording(false);
      toast({
        title: "Recording stopped",
        description: "Processing your voice input...",
      });
      
      // Here we would normally process the audio and convert to text
      // For now, we'll simulate it
      setTimeout(() => {
        const simulatedText = "This is a simulated transcription of your voice recording.";
        setThought(simulatedText);
      }, 1000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-photo-gray rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gradient">Capture Your Thoughts</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium">
            Title (Optional)
          </label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give your thought a title"
            className="w-full bg-photo-dark border-photo-light-gray"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="thought" className="block text-sm font-medium">
            Your Thought
          </label>
          <div className="relative">
            <Textarea
              id="thought"
              value={thought}
              onChange={(e) => setThought(e.target.value)}
              placeholder="Enter your thought here or use voice recording..."
              className="min-h-[150px] w-full bg-photo-dark border-photo-light-gray"
            />
            
            <div className="absolute bottom-2 right-2 flex space-x-2">
              <Button 
                type="button" 
                size="icon" 
                variant="outline" 
                onClick={toggleRecording}
                className={`rounded-full ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-photo-dark hover:bg-photo-light-gray'}`}
              >
                {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-photo-purple hover:bg-photo-purple/80"
        >
          <Send className="mr-2 h-4 w-4" /> Process My Thought
        </Button>
      </form>
    </div>
  );
}
