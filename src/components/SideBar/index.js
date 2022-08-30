import ToggleTheme from "../ToggleTheme";
import * as C from "./styled";

import logo from "../../assets/Giro-Agro-logo.png";

import { menu } from "../../helpers/menu";

import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <C.Container>
      <img src={logo} />
      <C.AreaMenuItems>
        {menu.map((item) => {
          return (
            <C.MenuItem>
              <img src={item.icon}></img>
              <Link to={item.to}>
                <p>{item.title}</p>
              </Link>
            </C.MenuItem>
          );
        })}
      </C.AreaMenuItems>

      <ToggleTheme />
    </C.Container>
  );
};
