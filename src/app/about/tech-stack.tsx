import { useState } from "react";
import { Avatar, Tooltip } from "@radix-ui/themes";

const TechStack = () => {
  const [selected, setSelected] = useState<string | null>(null);
  

  const handleHover = (name: string) => {
    setSelected(name);
  };
  const handleLeave = () => {
    setSelected(null);
  };

  return (
    <div className="w-full flex items-center justify-center h-1/3">
      <div className="flex flex-wrap gap-4 w-1/3 items-center justify-center ">
        {/* {technologies.map((tech) => (
          <Tooltip content={tech.name} key={tech.name}>
            <Avatar
              onMouseOver={() => handleHover(tech.name)}
              onMouseLeave={handleLeave}
              fallback={tech.fallback}
              src={tech.src}
              radius="small"
              size={selected == tech.name ? "5" : "3"}
              className=" transition-all duration-800"
            />
          </Tooltip>
        ))} */}
      </div>
    </div>
  );
};

export default TechStack;
