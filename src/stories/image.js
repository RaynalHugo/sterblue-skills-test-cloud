import React from "react";
import { storiesOf } from "@storybook/react";
import { Image } from "../components/image";

const mockData1 = {
  /* some mock data */
};

storiesOf("Image", module)
  .add("with styledProp1 set to true", () => (
    <Image data={mockData1} styleProp1={true} />
  ))
  .add("with styledProp1 set to false", () => (
    <Image data={mockData1} styleProp1={false} />
  ));
