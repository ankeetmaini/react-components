import * as React from "react";
import { storiesOf } from "@storybook/react";
import Modal from "./Modal";

storiesOf("Modal", module).add("default", () => (
  <Modal>
    <h1>I am directly in body</h1>
  </Modal>
));
