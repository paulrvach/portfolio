import { Button, Heading, Text } from "@radix-ui/themes"; 
type Props = {};

const Intro = (props: Props) => {
  return (
    <div className="flex items-center w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full h-2/3 border rounded-xl text-center">
        <Text size={"5"} weight={"light"}>Paul Vachon</Text>
        <h1 className="text-[64px] lg:text-[126px]">🄰BOÜT ᛖℰ</h1>
        <Button variant="soft">software engineer</Button>
      </div>
    </div>
  );
};

export default Intro;
