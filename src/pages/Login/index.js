import * as C from "./styled";
import logo from "../../assets/Giro-Agro-logo.png";

import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import { useNavigate } from "react-router-dom";

const ADM = "admin@giroagro.com";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, loginWithEmail } = useAuth();
  const navigate = useNavigate();

  const handleLoginEmail = async (e) => {
    e.preventDefault();
    if (!user) {
      await loginWithEmail(email, password).then(() => navigate("/"));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

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
          <C.ButtonSubmitEmail onClick={handleLoginEmail} type="submit">
            ENTRAR
          </C.ButtonSubmitEmail>
        </C.FormArea>
      </C.AreaAccount>
    </C.Container>
  );
};
