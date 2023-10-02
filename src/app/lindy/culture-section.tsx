import React from "react";
import { values } from "./lindy-values";
import CultureValue from "./culture-value";
type Props = {};

const CultureSection = (props: Props) => {
  return (
    <div className="w-full h-full">
        <CultureValue
         values={values}
        />
    </div>
  );
};

export default CultureSection;
