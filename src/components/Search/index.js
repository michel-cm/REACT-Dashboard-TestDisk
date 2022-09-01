import * as C from "./Styled";

import { BsSearch } from "react-icons/bs";

import { useTheme } from "../../hooks/useTheme";
import { toColorString } from "polished";

export const Search = (props) => {
  const { isDarkTheme } = useTheme();

  return (
    <C.AreaInput>
      <C.SearchInput placeholder={props.placeholder} type="search" />
      <C.IconSearch>
        <BsSearch />
      </C.IconSearch>
    </C.AreaInput>
  );
};
