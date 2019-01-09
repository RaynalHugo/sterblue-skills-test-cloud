import React from "react";
import { storiesOf } from "@storybook/react";
import { Mission } from "../components/mission";

const mockData1 = {
  /* some mock data */
};

storiesOf("Mission", module)
  .add("with styledProp1 set to true", () => (
    <Mission data={mockData1} styleProp1={true} />
  ))
  .add("with styledProp1 set to false", () => (
    <Mission data={mockData1} styleProp1={false} />
  ));
