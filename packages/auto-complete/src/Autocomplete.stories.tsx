import * as React from "react";
import { storiesOf } from "@storybook/react";
import Autocomplete from "./Autocomplete";
const countries = [
  "india",
  "australia",
  "new zealand",
  "united kingdom",
  "america",
  "kenya",
  "bhutan"
];

storiesOf("Autocomplete", module).add("default", () => (
  <Autocomplete
    items={countries}
    rowRenderer={({ isHighlighted, item }) => {
      return (
        <div
          style={{
            background: isHighlighted ? "yellow" : "#ccc"
          }}
        >
          {item}
        </div>
      );
    }}
    filter={(value, item) => item.includes(value)}
  />
));
