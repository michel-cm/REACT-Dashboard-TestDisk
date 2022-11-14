import { createContext, useEffect, useState } from "react";
import { Api } from "../services/Api";

export const ConfigsContext = createContext();

export const ConfigsContextProvider = ({ children }) => {
  const [timer, setTimer] = useState();
  const [msg, setMsg] = useState();
  const [emailRecebimentoTeste, setEmailRecebimentoTeste] = useState();
  const [subject, setSubject] = useState();
  const [emailAdmin, setEmailAdmin] = useState();

  useEffect(() => {
    if (!timer || !msg || !emailAdmin)
      Api.getConfigs().then((data) => {
        setTimer(data[0].timer / 60);
        setMsg(data[0].msg);
        setEmailRecebimentoTeste(data[0].emailRecebimentoTeste);
        setSubject(data[0].subject);
        setEmailAdmin(data[0].emailAdminAcesso);
      });
  }, [timer, msg, emailAdmin]);

  async function handleSaveConfig() {
    await Api.updateConfig(timer, msg, subject, emailRecebimentoTeste)
      .then(() => {
        alert("Configurações salvas com sucesso");
      })
      .catch(() => {
        console.log("erro update configuracaoGiro");
      });
  }

  return (
    <ConfigsContext.Provider
      value={{
        timer,
        setTimer,
        setMsg,
        msg,
        emailRecebimentoTeste,
        setEmailRecebimentoTeste,
        subject,
        setSubject,
        emailAdmin,
        handleSaveConfig,
      }}
    >
      {children}
    </ConfigsContext.Provider>
  );
};
