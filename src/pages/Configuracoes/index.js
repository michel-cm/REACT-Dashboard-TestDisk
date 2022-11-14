import * as C from "./styled";

import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { Button } from "../../components/Button";

import { useConfigs } from "../../hooks/useConfigs";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Api } from "../../services/Api";
import { useState } from "react";

export const Configuracoes = () => {
  const {
    timer,
    setTimer,
    msg,
    setMsg,
    handleSaveConfig,
    subject,
    setSubject,
  } = useConfigs();

  const [emailForUpdate, setEmailForUpdate] = useState("");

  const { user, logoutAccount } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  async function handleUpdatePassowrd(email) {
    await Api.updatePassword(email);
  }

  return (
    <C.Container>
      <SideBar />
      <Header />
      <C.MainContent className={"MainContentPadingAndMargin"}>
        <C.AreaTimerTest>
          <p>Tempo do questionário:</p>
          <input
            name="points"
            type="range"
            min="1"
            max="20"
            value={timer ? timer : ""}
            onChange={(e) => setTimer(e.target.value)}
          />
          <label htmlFor="points">{timer ? timer : ""}:</label>
        </C.AreaTimerTest>

        <C.AreaMsgEmail>
          <label htmlFor="story">Mensagem corpo do email:</label>

          <textarea
            id="story"
            name="story"
            rows="10"
            cols="40"
            value={msg ? msg : ""}
            onChange={(e) => setMsg(e.target.value)}
          />
          <p
            style={{
              marginTop: "32px",
              marginBottom: "8px",
            }}
          >
            Assunto do email pré-definido
          </p>
          <input
            style={{
              padding: "16px",
              width: "300px",
              height: "80px",
            }}
            type="text"
            value={subject ? subject : ""}
            onChange={(e) => setSubject(e.target.value)}
          />
        </C.AreaMsgEmail>

        <C.AreaUpdatePassword>
          <p>Alterar senha:</p>

          <input
            type="email"
            placeholder="Digite o email"
            required
            onChange={(e) => setEmailForUpdate(e.target.value)}
          />
          <button onClick={(e) => handleUpdatePassowrd(emailForUpdate)}>
            Enviar
          </button>
        </C.AreaUpdatePassword>

        <C.ButtonArea>
          <Button title="salvar" fn={handleSaveConfig} />
        </C.ButtonArea>
        <C.Logout onClick={logoutAccount}>
          <p>Desconectar</p>
        </C.Logout>
      </C.MainContent>
    </C.Container>
  );
};
