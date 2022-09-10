import React from "react";

import { useState } from "react";
import * as C from "./styled";
import { ButtonMailto } from "./ButtonMailto";

export const ModalSendEmailTeste = ({ setModal, msg }) => {
  const handleCloseModal = () => {
    setModal(false);
  };

  const [email, setEmail] = useState("");

  return (
    <C.Container>
      <C.Modal>
        <C.AreaClose>
          <p onClick={handleCloseModal}>X</p>{" "}
        </C.AreaClose>
        <C.Title>Enviar Questionário para:</C.Title>
        {/**
       * 
         <form action={`mailto:${email}`} method="POST" >
          <input
            type="email"           
            required
            placeholder="Email do candidato"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <input type="hidden" value={msg ? msg : ""} />
          <input
            className="buttonSubmit"
            type="submit"
            value="Enviar Questionário"
          />
        </form>
        
       */}
        <C.Content>
          <input
            type="email"
            required
            placeholder="Email do candidato"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <ButtonMailto label="Enviar Teste" mailto={`mailto:${email}?subject=Giro Agro - Processo seletivo&body=${msg}`} /></C.Content>
      </C.Modal>
    </C.Container>
  );
};
