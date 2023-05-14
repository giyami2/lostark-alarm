import styled from "@emotion/styled";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ModalPortal({ children, openPortal, closePortal }) {
  const ref = useRef();

  useEffect(() => {
    if (document) {
      ref.current = document.getElementById("root-modal");
    }
  }, [openPortal]);

  if (ref.current && openPortal) {
    return createPortal(
      <PortalContainer>
        <PortalBackground role="presentation" onClick={closePortal} />
        <PortalContent>
          {children}
        </PortalContent>
      </PortalContainer>,
      ref.current
    );
  }

  return null;
}

const PortalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
`;

const PortalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;

const PortalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  width: 520px;
  height: 540px;
  border: 4px solid ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  background: white;
`;
