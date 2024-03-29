import * as React from "react";
import { storiesOf } from "@storybook/react";
import Modal from "./Modal";

storiesOf("Modal", module)
  .add("default", () => (
    <Modal>
      <h1>I am the modal body</h1>
    </Modal>
  ))
  .add("background visible", () => (
    <div>
      <h1>Ipsum Lorem</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <Modal>
        <h3>Hello, Modal!</h3>
      </Modal>
    </div>
  ))
  .add("toggle", () => <MyComponent />);

const MyComponent = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <h1>
        Click the button to toggle Modal{" "}
        <button onClick={() => setShowModal(true)}>Open Portal</button>
      </h1>
      {showModal && (
        <Modal>
          <h2>I am the modal</h2>
          <button onClick={() => setShowModal(false)}>Close me</button>
        </Modal>
      )}
    </div>
  );
};
