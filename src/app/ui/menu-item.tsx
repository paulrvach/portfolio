import { type HTMLAttributes } from "react";
import { Text, Separator } from "@radix-ui/themes";
import { cn } from "../utils/utils";

interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  selected: number | null;
  index: number;
}

function MenuItem({
  name,
  description,
  selected,
  ...props
}: MenuItemProps): JSX.Element {
  return (
    <div key={name} className="relative cursor-pointer " {...props}>
      <div className=" flex justify-between gap-2 items-center py-4 px-3">
        <div className="flex flex-col ">
          <Text size={"5"} className="">
            {name}
          </Text>
          <Text size={"1"}>{description}</Text>
        </div>
      </div>
      <Separator size={"4"} />
    </div>
  );
}
MenuItem.displayName = "MenuItem";

export { MenuItem };
export type { MenuItemProps };
