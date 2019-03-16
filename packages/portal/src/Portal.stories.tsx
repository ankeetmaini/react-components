import * as React from "react";
import { storiesOf } from "@storybook/react";
import Portal from "./Portal";

storiesOf("Portal", module).add("default", () => (
  <div>
    I am in react root
    <Portal>
      <h1>I am directly in body</h1>
    </Portal>
  </div>
));
