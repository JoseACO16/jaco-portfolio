import * as React from "react";
function cn(...cls: Array<string | false | undefined>) { return cls.filter(Boolean).join(" "); }
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn("w-full rounded-xl border px-3 py-2 outline-none focus:ring focus:ring-blue-500/40", className)} {...props} />
  )
);
Input.displayName = "Input";
