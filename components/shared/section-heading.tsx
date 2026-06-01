import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, className, light }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2
        className={cn(
          "font-heading text-4xl md:text-5xl font-bold lowercase",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg max-w-2xl mx-auto",
            light ? "text-gray-300" : "text-charcoal-light"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
