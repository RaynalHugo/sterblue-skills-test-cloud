import React from "react";
import { storiesOf } from "@storybook/react";
import { Structure } from "../components/structure";

const mockData1 = {
  /* some mock data */
};

storiesOf("Structure", module)
  .add("with styledProp1 set to true", () => (
    <Structure data={mockData1} styleProp1={true} />
  ))
  .add("with styledProp1 set to false", () => (
    <Structure data={mockData1} styleProp1={false} />
  ));
