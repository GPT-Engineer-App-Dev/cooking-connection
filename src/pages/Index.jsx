import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-6 p-4">
      <h1 className="text-4xl font-bold">Recipe Sharing Website</h1>
      <p className="text-lg text-center">Share your favorite recipes with the world!</p>
      
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Submit a Recipe</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Recipe Title" />
          <Textarea placeholder="Recipe Instructions" />
          <Button variant="outline">Submit</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;