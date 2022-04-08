import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { ContainerModal, Content, Header } from "./styles";

interface ModalProps {
  returnToMain?: boolean;
  rootElement?: HTMLElement;
}

export const Modal: React.FC<ModalProps> = ({
  returnToMain,
  rootElement,
  children,
}) => {
  const navigate = useNavigate();

  const handleOnClose = () => {
    if (returnToMain) {
      navigate("/");
      return;
    }
    navigate(-1); // go back
  };

  useEffect(() => {
    const body = document.getElementById("body");

    if (body) {
      body.style.overflow = "hidden";
    }

    return () => {
      const body = document.getElementById("body");
      if (body) {
        body.style.overflow = "overlay";
      }
    };
  }, []);

  return createPortal(
    <ContainerModal>
      <Content>
        <Header>
          <AiOutlineClose size={18} onClick={handleOnClose} />
        </Header>
        {children}
      </Content>
    </ContainerModal>,
    rootElement ?? document.body
  );
};
