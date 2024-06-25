import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && instructions) {
      // Here you can handle the form submission, e.g., send it to a backend or store it locally
      console.log("Recipe Submitted:", { title, instructions });
      toast("Recipe submitted successfully!");
      setTitle("");
      setInstructions("");
    } else {
      toast("Please fill in all fields.");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-6 p-4">
      <h1 className="text-4xl font-bold">Recipe Sharing Website</h1>
      <p className="text-lg text-center">Share your favorite recipes with the world!</p>
      
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Submit a Recipe</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit}>
            <Input 
              placeholder="Recipe Title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
            />
            <Textarea 
              placeholder="Recipe Instructions" 
              value={instructions} 
              onChange={(e) => setInstructions(e.target.value)} 
            />
            <Button type="submit" variant="outline">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;