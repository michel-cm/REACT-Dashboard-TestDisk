import * as C from "./Styled";
import IconSearchB from "../../assets/actions/searchb.png";
import IconSearchW from "../../assets/actions/searchw.png";

import { useTheme } from "../../hooks/useTheme";

export const Search = (props) => {

    const { isDarkTheme } = useTheme();

  return (
    <>
      <C.SearchInput placeholder={props.placeholder} type="search" />
      <img src={isDarkTheme ? IconSearchW : IconSearchB} alt="icon lupa"/>
    </>
  );
};
