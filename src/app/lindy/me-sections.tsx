import { EnvelopeClosedIcon, MobileIcon } from "@radix-ui/react-icons";
import { ResourceSection } from "../components";
import { Heading, Text } from "@radix-ui/themes";
import { PhoneNumber } from "libphonenumber-js";
type Props = {};

const MeSection = (props: Props) => {
  return (
    <div className="flex w-full h-screen justify-between items-center align-middle">
      <div className="h-2/3 flex flex-col justify-between">
        <Text size={"6"}>Thank you!</Text>
        <Text>Lorem Ipsum</Text>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <EnvelopeClosedIcon className="w-5 h-5" />
            paulrvach@gmail.com
          </div>
          <div className="flex gap-2">
            <MobileIcon className="w-5 h-5" />
            +1(626)733-7708
          </div>
        </div>
      </div>
        <ResourceSection/>
    </div>
  );
};

export default MeSection;
