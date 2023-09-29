import { forwardRef, type Ref, HTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/utils";
export interface AnimationWrapperProps extends HTMLAttributes<HTMLDivElement> {}

export const AnimationWrapper = forwardRef<HTMLDivElement, AnimationWrapperProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div {...props} className={cn("leading-0 overflow-hidden", className)}>
        <div ref={ref}>{children}</div>
      </div>
    );
  }
);

AnimationWrapper.displayName = "AnimationWrapper";

