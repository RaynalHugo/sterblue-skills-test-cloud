import React from "react";
import { storiesOf } from "@storybook/react";
import { Anomaly } from "../components/anomaly";

const mockData1 = {
  /* some mock data */
};

storiesOf("Anomaly", module)
  .add("with styledProp1 set to true", () => (
    <Anomaly data={mockData1} styleProp1={true} />
  ))
  .add("with styledProp1 set to false", () => (
    <Anomaly data={mockData1} styleProp1={false} />
  ));
