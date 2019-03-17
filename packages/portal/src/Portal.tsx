import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const body = document.body;

interface Props {
  className?: string;
}
const Portal: React.SFC<Props> = ({ children, className }) => {
  const [el] = useState(document.createElement("div"));
  className && el.classList.add(className);

  useEffect(() => {
    body.appendChild(el);
    return () => {
      body.removeChild(el);
    };
  }, []);

  return createPortal(children, el);
};

export default Portal;
