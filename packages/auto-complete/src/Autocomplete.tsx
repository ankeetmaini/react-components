import * as React from "react";
import { css } from "emotion";
import Portal from "@hoppingfrog/portal";

type RowRenderer<T> = (args: {
  isHighlighted: boolean;
  item: T;
}) => JSX.Element;

interface Props<T> {
  items: T[];
  rowRenderer: RowRenderer<T>;
  filter: (value: string, item: T) => boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  onSelected?: (item: T) => any;
}

function Autocomplete<T>(props: Props<T>) {
  const [value, setValue] = React.useState("");
  const [bcr, setBcr] = React.useState<ClientRect>();
  const inputElement = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputElement && inputElement.current) {
      setBcr(inputElement.current.getBoundingClientRect());
    }
  }, []);

  return (
    <div>
      <input
        ref={inputElement}
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      {value && bcr && (
        <Portal>
          <div>
            <div
              className={css`
                position: absolute;
                top: ${bcr.bottom}px;
                left: ${bcr.left}px;
                width: ${bcr.width + 20}px;
              `}
            >
              {props.items
                .filter(props.filter.bind({}, value))
                .map(item => props.rowRenderer({ isHighlighted: false, item }))}
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}

export default Autocomplete;
