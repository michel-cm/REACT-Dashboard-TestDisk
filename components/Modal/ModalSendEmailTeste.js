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
          <input
            type="email"
            required
            placeholder="Email do candidato"
            name="email"
            onChange={e => setEmail(e.target.value)}
          />
        <form action={`https://formsubmit.co/${email}`} method="POST">
        <input
            type="hidden"
            required            
            name="email"
            value="giroagroadm@gmail.com"
           
          />
          <input type="hidden" name="_next" value="http://localhost:3000/candidatos" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="GiroAgro-Questionário"></input>

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
