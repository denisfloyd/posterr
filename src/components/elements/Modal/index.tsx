import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { ContainerModal, Content, Header } from "./styles";

export const Modal: React.FC = ({ children }) => {
  const navigate = useNavigate();

  const handleOnClose = () => {
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
    document.getElementById("modal_root") as HTMLElement
  );
};
