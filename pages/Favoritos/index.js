import * as C from "./styled";

import { BsFillStarFill } from "react-icons/bs";

import { TableAreaUsers } from "../../components/TableAreaUsers";
import { Search } from "../../components/Search";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";

export const Favoritos = () => {
  // TEMP
  const data = [];

  if (data.length > 0) {
    return (
      <C.Container>
        <SideBar />
        <Header />
        <C.MainContent className={"MainContentPadingAndMargin"}>
          <C.TitleBancoTalentos>Banco de Talentos</C.TitleBancoTalentos>
          <Search placeholder="Digite o nome do candidato" />
          <TableAreaUsers />
        </C.MainContent>
      </C.Container>
    );
  } else {
    return (
      <C.MainContent >
        <SideBar />
        <Header />
        <C.AreaNoUsersFavorites >
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
