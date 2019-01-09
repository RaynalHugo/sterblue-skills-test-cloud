import { configure } from "@storybook/react";

const req = require.context("../src/stories");
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);
