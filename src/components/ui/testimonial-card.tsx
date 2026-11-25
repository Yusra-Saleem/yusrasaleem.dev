import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div';
  
  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex flex-col rounded-lg border-t border-secondary/20",
        "bg-gradient-to-b from-[#0F2826]/90 to-[#071917]/70",
        "p-4 text-start sm:p-6",
        "hover:from-[#133532] hover:to-[#0A221F] hover:border-accent/40",
        "w-[300px] sm:w-[320px] shrink-0",
        "shadow-lg backdrop-blur-sm",
        "transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 border border-secondary/20 shrink-0">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start min-w-0">
          <h3 className="text-sm sm:text-base font-semibold leading-tight font-space text-foreground truncate w-full">
            {author.name}
          </h3>
          <p className="text-xs text-secondary/70 truncate w-full font-mono mt-0.5">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="sm:text-sm mt-4 text-xs text-foreground/80 leading-relaxed font-sans line-clamp-4">
        {text}
      </p>
    </Card>
  );
}

export default TestimonialCard;
