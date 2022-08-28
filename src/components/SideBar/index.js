import ToggleTheme from "../ToggleTheme";
import * as C from "./styles";

const Header = () => {
  return (
    <C.Container>
      <h5>Logo</h5>
      <ToggleTheme />
    </C.Container>
  );
};

export default Header;
