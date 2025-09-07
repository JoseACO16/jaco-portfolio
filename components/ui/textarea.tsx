import * as React from "react";
function cn(...cls: Array<string | false | undefined>) { return cls.filter(Boolean).join(" "); }
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn("w-full rounded-xl border px-3 py-2 outline-none focus:ring focus:ring-blue-500/40", className)} {...props} />
  )
);
Textarea.displayName = "Textarea";
