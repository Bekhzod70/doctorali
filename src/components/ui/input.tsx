import * as React from "react";

import { cn } from "@/lib/utils";
import { LucideIcon, Phone } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon | JSX.ElementType;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    const Icon = icon;

    return (
      <div className="relative">
        <span className="absolute top-1/2 -translate-y-1/2 left-[30px] text-gray">
          {Icon ? <Icon /> : <Phone />}
        </span>
        <input
          type={type}
          className={cn(
            "flex w-full text-green-dark border border-input bg-background pl-[64px] pr-[30px] sm:py-7 py-5 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
