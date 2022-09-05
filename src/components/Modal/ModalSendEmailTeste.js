import { useState } from "react";
import * as C from "./styled";

export const ModalSendEmailTeste = ({ setModal, msg }) => {
  const handleCloseModal = () => {
    setModal(false);
  };

  const [email, setEmail] = useState('');

  return (
    <C.Container>
      <C.Modal>
        <C.AreaClose>
          <p onClick={handleCloseModal}>X</p>{" "}
        </C.AreaClose>
        <C.Title>Enviar Questionário para:</C.Title>
        
        <form action={`mailto:${email}`} method="POST" encType="text/plain">             
             <input
            type="email"
            name="email"
            required
            placeholder="Email do candidato"           
            onChange={e => setEmail(e.target.value)}
          />
         

          <label htmlFor="message">Mensagem corpo do email:</label>
          <textarea
            id="story"
            name="message"
            rows="7"
            cols="40"
            value={msg ? msg : ""}
          />
          <input
            className="buttonSubmit"
            type="submit"
            value="Enviar Questionário"
          />
        </form>
      </C.Modal>
    </C.Container>
  );
};
