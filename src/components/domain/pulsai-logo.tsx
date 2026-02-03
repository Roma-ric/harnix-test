import { cn } from "@/lib/utils";

const PulsAILogo = ({ className }: { className?: string }) => {
  return (
    <h1 className={cn("font-heading text-xl", className)}>
      <span className="text-pulsai-primary">Puls</span>
      <span className="text-pulsai-secondary">AI</span>
    </h1>
  );
};

export default PulsAILogo;
