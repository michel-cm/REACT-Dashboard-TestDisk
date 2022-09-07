import ToggleTheme from "../../ToggleTheme";
import * as C from "./styled";

import logo from "../../../assets/Giro-Agro-logo.png";

import { menu } from "../../../helpers/menu";

import { Link } from "react-router-dom";

import { shade } from "polished";

import { useTheme } from "../../../hooks/useTheme";

import { useEffect, useState } from "react";

export const SideBarMobile = ({showMenu}) => {
  const { isDarkTheme } = useTheme();

  const [colorHover, setColorHover] = useState();

  const [pathName, setPathName] = useState(window.location.pathname);

  function handleCurrentPathName() {
    setPathName(window.location.pathname);
  }

  useEffect(() => {
    isDarkTheme === "dark"
      ? setColorHover(shade(0.2, "#222"))
      : setColorHover(shade(0.4, "#ED3237"));
  }, [isDarkTheme]);

  console.log(showMenu)

  return (
    <C.Container showMenu>
      <img src={logo} alt="logo" />
      <C.AreaMenuItems>
        {menu.map((item, index) => {
          return (
            <C.MenuItem
              key={index}
              color={colorHover}
              className={pathName == item.to ? "selected" : ""}
              onClick={handleCurrentPathName}
            >
              <img src={item.icon} alt="icon menu"></img>
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
