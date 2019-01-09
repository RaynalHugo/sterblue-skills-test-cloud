import React from "react";
import { storiesOf } from "@storybook/react";
import { User } from "../components/user";

const mockData1 = {
  /* some mock data */
};

storiesOf("User", module)
  .add("with styledProp1 set to true", () => (
    <User data={mockData1} styleProp1={true} />
  ))
  .add("with styledProp1 set to false", () => (
    <User data={mockData1} styleProp1={false} />
  ));
