import * as React from "react";
import { css } from "emotion";
import styled from "@emotion/styled";
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

function Autocomplete<T>(props: Props<T>) {
  const [value, setValue] = React.useState("");
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [bcr, setBcr] = React.useState<ClientRect>();
  const inputElement = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputElement && inputElement.current) {
      setBcr(inputElement.current.getBoundingClientRect());
    }
  }, []);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setShowDropdown(true);
    props.onChange && props.onChange(e);
  };

  return (
    <div>
      <input
        ref={inputElement}
        type="text"
        value={value}
        onChange={onInputChange}
      />

      {showDropdown && bcr && (
        <Portal>
          <Overlay onClick={() => setShowDropdown(false)}>
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
          </Overlay>
        </Portal>
      )}
    </div>
  );
}

export default Autocomplete;
