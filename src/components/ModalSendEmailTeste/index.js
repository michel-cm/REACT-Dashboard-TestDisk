import React from "react";

import { useState } from "react";
import * as C from "./styled";
import { ButtonMailto } from "./ButtonMailto";
import { useCandidatesTests } from "../../hooks/useCandidatesTests";
import { useListQuestionsTest } from "../../hooks/useListQuestionsTest";

export const ModalSendEmailTeste = ({ setModal, msg,subject }) => {
  const handleCloseModal = () => {
    setModal(false);
  };

  const [email, setEmail] = useState("");

  const { addNewCandidate } = useCandidatesTests();

  const { testListQuestionsActive } = useListQuestionsTest();

  return (
    <C.Container>
      <C.Modal>
        <C.AreaClose>
          <p onClick={handleCloseModal}>X</p>{" "}
        </C.AreaClose>
        <C.Title>Enviar Questionário para:</C.Title>
        
        <C.Content>
          <input
            type="email"
            required
            placeholder="Email do candidato"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <ButtonMailto 
          mailto={`mailto:${email}?subject=${subject}&body=${msg}`}
          label="Enviar"
          email={email}
          testListQuestionsActive={testListQuestionsActive}
          addNewCandidate={addNewCandidate} 
           />
        </C.Content>
      </C.Modal>
    </C.Container>
  );
};
