import * as C from "./styled";

import { BsFillStarFill } from "react-icons/bs";

import { TableAreaUsers } from "../../components/TableAreaUsers";
import { Search } from "../../components/Search";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";

import { useCandidatesTests } from "../../hooks/useCandidatesTests";
import { useState } from "react";

export const Favoritos = () => {
  const { listCandidadtes, ListCandidatesFavorites } = useCandidatesTests();

  const [search, setSearch] = useState("");
  const filteredListCandidates =
    search.length > 0
      ? listCandidadtes.filter((candidate) =>
          candidate.name.toLowerCase().includes(search)
        )
      : [];

  if (ListCandidatesFavorites.length > 0) {
    return (
      <C.Container>
        <SideBar />
        <Header />
        <C.MainContent className={"MainContentPadingAndMargin"}>
          <C.TitleBancoTalentos>Banco de Talentos</C.TitleBancoTalentos>
          <Search
            placeholder="Digite o nome do candidato"
            state={search}
            setSearch={setSearch}
          />
          {search.length === 0 ? (
            <TableAreaUsers candidates={ListCandidatesFavorites} />
          ) : (
            <TableAreaUsers candidates={filteredListCandidates} />
          )}
        </C.MainContent>
      </C.Container>
    );
  } else {
    return (
      <C.MainContent>
        <SideBar />
        <Header />
        <C.AreaNoUsersFavorites>
          <C.ContentNoUsersFavorites>
            <C.titleAreaNoUsers>
              Nenhum candidato encontrado...
            </C.titleAreaNoUsers>
            <C.descriptionAreaNoUsers>
              No momento não há usuários salvos no banco de talentos!
            </C.descriptionAreaNoUsers>
            <BsFillStarFill style={{ fontSize: "48px" }} />
          </C.ContentNoUsersFavorites>
        </C.AreaNoUsersFavorites>
      </C.MainContent>
    );
  }
};
