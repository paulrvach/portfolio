import {  Text, Code } from "@radix-ui/themes";


const HeroSection = () => {
  const message = (
    <>
      Hello, I&apos;m <Code>Paul</Code>, and this is the place where I discover
      the crossroads of innovation and design. Join me as we explore my recent
      discoveries and explorations.
    </>
  );

  return (
    <div className="flex items-center justify-between h-[65vh]">
      <Text className="inline" size={"7"}>
        {message}
      </Text>
    </div>
  );
};

export { HeroSection };
