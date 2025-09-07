import * as React from "react";
function cn(...cls: Array<string | false | undefined>) { return cls.filter(Boolean).join(" "); }
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"; size?: "sm" | "md" | "lg" | "icon";
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-2xl transition px-4 py-2 border";
    const variants: Record<string, string> = {
      default: "bg-blue-600 text-white border-transparent hover:bg-blue-700",
      outline: "bg-transparent text-white border-gray-600 hover:bg-gray-800",
    };
    const sizes: Record<string, string> = { sm:"text-sm h-9", md:"text-base h-10", lg:"text-lg h-12", icon:"h-10 w-10 p-0" };
    return <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />;
  }
);
Button.displayName = "Button";
