import * as C from "./styled";
import { BsList } from "react-icons/bs";
import logo from "../../assets/Giro-Agro-logo.png";

import { SideBarMobile } from "./SideBarMobile";

import { useState } from "react";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <C.Container>
      {showMenu && <SideBarMobile showMenu />}
      <C.Logo src={logo} alt="logo giro agro" />
      <BsList
        onClick={handleMenu}
        style={{
          width: "24px",
          height: "24px",
          cursor: "pointer",
        }}
      />
    </C.Container>
  );
};
