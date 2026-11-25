import { cn } from "@/lib/utils";
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card";

export interface TestimonialItem {
  author: TestimonialAuthor;
  text: string;
  href?: string;
}

export interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: TestimonialItem[];
  className?: string;
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-12 sm:py-20 md:py-24 px-0 w-full",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 text-center sm:gap-12 w-full">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 px-4 sm:gap-4 max-w-3xl">
          <h2 className="max-w-[720px] text-2xl font-bold uppercase tracking-tight font-space sm:text-4xl md:text-5xl leading-tight">
            {title}
          </h2>
          <p className="text-sm max-w-[600px] font-sans text-secondary/80 sm:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1.25rem] [gap:var(--gap)] flex-row [--duration:45s] w-full">
            {/* Primary Track */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`track1-${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>

            {/* Duplicate Track for 100% Seamless Infinite Loop */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]" aria-hidden="true">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`track2-${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          {/* Left & Right Soft Seamless Feather Gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-background to-transparent sm:block z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-background to-transparent sm:block z-10" />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
