import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ExampleSite from "./ExampleSite";

interface GradientPreviewProps {
  gradientClass: string;
  gradientName: string;
}

export default function GradientPreview({
  gradientClass,
  gradientName,
}: GradientPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">See Preview</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] border  overflow-y-auto">
        <ExampleSite gradientClass={gradientClass} />
      </DialogContent>
    </Dialog>
  );
}
