import * as React from "react";
import Portal from "@hoppingfrog/portal";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #e2e1e0;
  opacity: 0.6;
`;

const Content = styled.div`
  position: absolute;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  padding: 10px;
  background: white;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const Modal: React.SFC = ({ children }) => {
  return (
    <Portal>
      <Container>
        <Overlay>
          <Content>{children}</Content>
        </Overlay>
      </Container>
    </Portal>
  );
};

export default Modal;
