import * as C from "./styled";

import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { Button } from "../../components/Button";

import { useConfigs } from "../../hooks/useConfigs";

export const Configuracoes = () => {
  const {
    timer,
    setTimer,
    msg,
    setMsg,
    handleSaveConfig,
    emailRecebimentoTeste,
    subject,
    setEmailRecebimentoTeste,
    setSubject
  } = useConfigs();

  return (
    <C.Container>
      <SideBar />
      <Header />
      <C.MainContent className={"MainContentPadingAndMargin"}>
        <C.AreaTimerTest>
          <p>Tempo do questionário:</p>
          <input
            type="number"
            value={timer ? timer : ""}
            onChange={(e) => setTimer(e.target.value)}
          />
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
              marginBottom:'8px'
            }}
          >
            Assunto do email pré-definido
          </p>
          <input
            style={{
              padding: "16px",
              width: "300px",
              height: '80px'
            }}
            type="text"
            value={subject ? subject : ""}
            onChange={(e) => setSubject(e.target.value)}
          />
        </C.AreaMsgEmail>
        <C.ButtonArea>
          <Button title="salvar" fn={handleSaveConfig} />
        </C.ButtonArea>
      </C.MainContent>
    </C.Container>
  );
};
