import * as C from "./styled";

import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { Button } from "../../components/Button";
import { useState } from "react";
import { Api } from "../../services/Api";
import { useEffect } from "react";

export const Configuracoes = () => {
  const [timer, setTimer] = useState();
  const [msg, setMsg] = useState();

  useEffect(() => {
    if (!timer || !msg)
      Api.getConfigs().then((data) => {
        setTimer(data[0].timer / 60);
        setMsg(data[0].msg);
      });
  }, [timer, msg]);

 async function handleSaveConfig() {
    await Api.updateConfig(timer, msg).then(() => {
        alert('Configurações salvas com sucesso')
    }).catch(() => {
        console.log('erro update configuracaoGiro')
    });
 }

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
            cols="50"
            value={msg ? msg : ""}
            onChange={(e) => setMsg(e.target.value)}
          />
        </C.AreaMsgEmail>
        <C.ButtonArea>
          <Button title="salvar" fn={handleSaveConfig}/>
        </C.ButtonArea>
      </C.MainContent>
    </C.Container>
  );
};
