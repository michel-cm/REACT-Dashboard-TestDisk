import * as C from "./styled";
import { Card } from "./Card";
import { TableAreaUsers } from "./TableAreaUsers/index";
import { Search } from "../../components/Search";
import { Button } from "../../components/Button";
import { Accordion } from "../../components/Accordion";

import iconArrowRight from "../../assets/actions/arrowRight.png";
import { useState } from "react";

export const Candidatos = () => {
  const [areaAllCandidates, setAreaAllCandidates] = useState(true);
  const [areaBancoTalents, setAreaBancoTalents] = useState(true);

  return (
    <C.Container className={"MainContentPadingAndMargin"}>
      <C.AreaCardsResume>
        <Card title={"Total Candidatos"} color={"#2261BC"} value={5} />
        <Card title={"Banco de Talentos"} color={"#E2992B"} value={5} />
      </C.AreaCardsResume>

      <C.AreaSearchAndAdd>
        <Button />

        <Search placeholder="Digite o nome do candidato" />
      </C.AreaSearchAndAdd>

      <Accordion
        color="#2261BC"
        state={areaAllCandidates}
        setState={setAreaAllCandidates}
        title="Todos Candidatos"
      />
      {areaAllCandidates ? <TableAreaUsers /> : <div></div>}

      <Accordion
        color="#E2992B"
        state={areaBancoTalents}
        setState={setAreaBancoTalents}
        title="Banco de Talentos"
      />
      {areaBancoTalents ? <TableAreaUsers /> : <div></div>}

    </C.Container>
  );
};
