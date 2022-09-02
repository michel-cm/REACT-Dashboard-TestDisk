import * as C from "./styled";

import { BsFillStarFill } from "react-icons/bs";

import { TableAreaUsers } from "../../components/TableAreaUsers";
import { size } from "polished";
import { Search } from "../../components/Search";

export const Favoritos = () => {
  // TEMP
  const data = [];

  if (data.length > 0) {
    return (
      <C.Container className={"MainContentPadingAndMargin"}>
        <C.TitleBancoTalentos>Banco de Talentos</C.TitleBancoTalentos>
        <Search placeholder="Digite o nome do candidato" />
        <TableAreaUsers />
      </C.Container>
    );
  } else {
    return (
      <C.AreaNoUsersFavorites className={"MainContentPadingAndMargin"}>
        <C.ContentNoUsersFavorites>
          <C.titleAreaNoUsers>Nenhum candidato encontrado...</C.titleAreaNoUsers>
          <C.descriptionAreaNoUsers>
            No momento não há usuários salvos no banco de talentos!
          </C.descriptionAreaNoUsers>
          <BsFillStarFill style={{ fontSize: '48px' }}/>
        </C.ContentNoUsersFavorites>
      </C.AreaNoUsersFavorites>
    );
  }
};
