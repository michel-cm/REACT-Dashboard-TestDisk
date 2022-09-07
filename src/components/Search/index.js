import * as C from "./styled";

import { BsSearch } from "react-icons/bs";

export const Search = ({ placeholder, state, setSearch }) => {
  return (
    <C.AreaInput>
      <C.SearchInput
        placeholder={placeholder}
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        value={state}
      />
      <C.IconSearch>
        <BsSearch />
      </C.IconSearch>
    </C.AreaInput>
  );
};
