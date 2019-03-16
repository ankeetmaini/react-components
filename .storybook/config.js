import { configure } from "@storybook/react";

// automatically import all files ending in *.stories
const req = require.context("../packages", true, /.stories/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
