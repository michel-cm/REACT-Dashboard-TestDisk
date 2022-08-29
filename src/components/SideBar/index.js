import ToggleTheme from "../ToggleTheme";
import * as C from "./styled";

import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <C.Container>
      <h5>Logo</h5>

      <Link to={"/"}>
        Home
      </Link>
      <Link to={"/questionario"}>
        Questionario
      </Link>

      <ToggleTheme />
    </C.Container>
  );
};


