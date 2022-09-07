import * as C from "./styled";
import { BsList } from "react-icons/bs";
import logo from '../../assets/Giro-Agro-logo.png'


export const Header = () => {
  return (
    <C.Container>
      <img src={logo} alt="logo giro agro" />      
      < BsList style={{
        width:"24px",
        height:"24px",
        cursor: "pointer",
      }}/>
    </C.Container>
  );
};
