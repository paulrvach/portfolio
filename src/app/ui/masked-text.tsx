import { forwardRef, HTMLAttributes } from "react";
import { cn } from "../utils/utils";
import { Text } from "@radix-ui/themes";

interface MaskedTextProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  size: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
}

const MaskedText = forwardRef<HTMLDivElement, MaskedTextProps>(
  ({ text, size, className, ...rest }, ref) => {
    return (
      <div
        {...rest}
        className={cn(" overflow-hidden m-0 leading-none py-2", className)}
      >
        <div className="masked-text" ref={ref}>
          <Text size={size}>{text}</Text>
        </div>
      </div>
    );
  }
);

MaskedText.displayName = "MaskedText";

export { MaskedText };
export type { MaskedTextProps };
