import { createContext, useCallback, useEffect, useState } from "react";
import { Api } from "../services/Api";

export const ConfigsContext = createContext();

export const ConfigsContextProvider = ({ children }) => {
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
    await Api.updateConfig(timer, msg)
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
        handleSaveConfig,
      }}
    >
      {children}
    </ConfigsContext.Provider>
  );
};
