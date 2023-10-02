import { Text } from "@radix-ui/themes";
import React, { HTMLAttributes, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "ui";
import { cn } from "../utils/utils";

interface CultureValueProps extends HTMLAttributes<HTMLDivElement> {
  values: Values[];
}

type Values = {
  value: string;
  experiences: string;
};

const CultureValue = ({ values, className }: CultureValueProps) => {
  const [focused, isFocused] = useState<string>('');
  const handleHover = (value: string) => {
    isFocused(value);
  };
  const handleLeave = () => {
    isFocused('');
  };

  return (
    <Accordion type="single" collapsible>
      {values.map((value) => (
        <AccordionItem
          value={value.value}
          key={value.value}
          onFocus={() => handleHover(value.value)}
          onBlur={handleLeave}
          className={cn(
            focused === value.value ? "bg-white text-black" : "",
            "transition-all duration-200 px-4",
            className
          )}
        >
          <AccordionTrigger>{value.value}</AccordionTrigger>
          <AccordionContent>{value.experiences}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CultureValue;
