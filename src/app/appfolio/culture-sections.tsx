import React from "react";
import { Text } from "@radix-ui/themes";
import { values } from "./appfolio-values";
import CultureValue from "../lindy/culture-value";
type Props = {};

const CultureSection = (props: Props) => {
  return (
    <div className="w-full h-full">
      <Text size={"6"} mb={"2"}>{"Where I stand on Appfolio's values:"}</Text>
        <CultureValue
         values={values}
        />
    </div>
  );
};

export default CultureSection;