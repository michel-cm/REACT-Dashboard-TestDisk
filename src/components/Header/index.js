import ToggleTheme from "../ToggleTheme";
import * as C from "./styled";

export const Header = () => {
  return (
    <C.Container>
      <h5>Logo</h5>
      <ToggleTheme />
    </C.Container>
  );
};


