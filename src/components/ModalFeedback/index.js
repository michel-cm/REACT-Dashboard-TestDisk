import { useEffect } from "react";
import { useState } from "react";
import * as C from "./styled";

// COMPONENT NOT USED

export const ModalFeedback = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const handleModal = () => {
    setModalShow(!modalShow);
  };

  useEffect(() => {
    if (modalShow) {
      setTimeout(() => {
        handleModal();
      }, 2000);
    }
  }, [modalShow]);

  return (
    <C.Container modalClose={modalShow}>
      <C.Title>{props.title}</C.Title>
    </C.Container>
  );
};
