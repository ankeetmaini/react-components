import React from "react";
import Portal from "@hoppingfrog/portal";
import { styled } from "linaria/react";

const Container = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  opacity: 0.2;
`;

const Content = styled.div`
  position: absolute;
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
