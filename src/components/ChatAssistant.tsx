
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { MessageCircle, Send, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hi there! I'm your thought assistant. How can I help you organize your thoughts today?",
      sender: "assistant",
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const { toast } = useToast();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: newMessage,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        content: "I've processed your request. You can view your organized thoughts in the main dashboard. Would you like me to explain anything or help you further?",
        sender: "assistant",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button 
            className="rounded-full h-14 w-14 bg-photo-purple hover:bg-photo-purple/90 shadow-lg"
            aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MessageCircle className="h-6 w-6" />
            )}
          </Button>
        </CollapsibleTrigger>
        
        <CollapsibleContent className="mt-4">
          <div className="bg-photo-dark border border-photo-light-gray rounded-lg shadow-lg w-80 md:w-96 overflow-hidden flex flex-col">
            <div className="bg-photo-gray p-3 border-b border-photo-light-gray">
              <h3 className="font-medium">Thought Assistant</h3>
            </div>
            
            <div className="flex-1 p-3 h-80 overflow-y-auto flex flex-col gap-3">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`max-w-[85%] p-3 rounded-lg ${
                    msg.sender === 'user' 
                      ? 'bg-photo-purple text-white self-end' 
                      : 'bg-photo-gray text-white self-start'
                  }`}
                >
                  {msg.content}
                  <div className="text-xs opacity-70 mt-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSendMessage} className="p-3 border-t border-photo-light-gray flex gap-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-photo-dark border-photo-light-gray"
              />
              <Button type="submit" size="icon" className="bg-photo-purple hover:bg-photo-purple/90">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
