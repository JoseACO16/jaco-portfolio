import * as React from "react";
function cn(...cls: Array<string | false | undefined>) { return cls.filter(Boolean).join(" "); }
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => ( <label ref={ref} className={cn("text-sm font-medium", className)} {...props} /> )
);
Label.displayName = "Label";
