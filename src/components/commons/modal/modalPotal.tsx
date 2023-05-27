import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as S from "../../styles/modal/modalPotal.styles";

interface IProps {
  children: React.ReactNode;
  closePortal: () => void;
}

export default function ModalPortal({ children, closePortal }: IProps) {
  const ref = useRef<Element | null>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen((prev) => !prev);
    if (document) {
      const dom = document.querySelector("#root-modal");
      ref.current = dom;
    }
  }, []);

  if (ref.current && open) {
    return createPortal(
      <S.Container>
        <section className="modal-background" onClick={closePortal} />
        {children}
      </S.Container>,
      ref.current
    );
  }
  return null;
}
