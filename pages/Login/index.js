import * as C from "./styled";

import logo from "../../assets/Giro-Agro-logo.png";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");

  return (
    <C.Container>
      <C.AreaAccount>
        <C.Logo src={logo} alt="Giro Agro Logo"></C.Logo>
        <C.FormArea>
          <C.Email
            onChange={(e) => setEmail(e.target.value)}
            type={"email"}
            placeholder="Email"
          ></C.Email>
          <C.Passoword
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            placeholder="Senha"
          ></C.Passoword>
          <C.ButtonSubmitEmail onClick={"handleLoginEmail"} type="submit">
            ENTRAR
          </C.ButtonSubmitEmail>
        </C.FormArea>
      </C.AreaAccount>
    </C.Container>
  );
};
