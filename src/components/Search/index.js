import * as C from "./styled";

import { BsSearch } from "react-icons/bs";

export const Search = (props) => {
  

  return (
    <C.AreaInput>
      <C.SearchInput placeholder={props.placeholder} type="search" />
      <C.IconSearch>
        <BsSearch />
      </C.IconSearch>
    </C.AreaInput>
  );
};
