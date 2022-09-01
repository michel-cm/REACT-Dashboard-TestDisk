import * as C from "./styled";
import { Card } from "./Card";
import { TableAreaUsers } from "./TableAreaUsers/index";
import { Search } from "../../components/Search";
import { Button } from "../../components/Button";

import iconArrowRight from "../../assets/actions/arrowRight.png";
import { useState } from "react";

export const Candidatos = () => {

  const [areaQuestionsActiveShow, setAreaQuestionsActiveShow] = useState(true);
  const [areaQuestionsDisableShow, setAreaQuestionsDisableShow] =
    useState(true);

  function handleShowAreaQuestionsActive() {
    setAreaQuestionsActiveShow(!areaQuestionsActiveShow);
  }

  function handleShowAreaQuestionsDisable() {
    setAreaQuestionsDisableShow(!areaQuestionsDisableShow);
  }

  return (
    <C.Container className={"MainContentPadingAndMargin"}>
      <C.AreaCardsResume >
        <Card
          title={"Total Candidatos"}
          color={"#2261BC"}
          value={5}       
        />
        <Card title={"Banco de Talentos"} color={"#E2992B"} value={5}  />
        
        
      </C.AreaCardsResume>

     

      <C.AreaSearchAndAdd>
        <Button />

        <Search placeholder="Digite o nome do candidato"/>
      </C.AreaSearchAndAdd>

      <C.AreaAccordion value="#2261BC">
      <h3>Todos Candidatos</h3>
          <C.ArrowIcon src={iconArrowRight} show={areaQuestionsDisableShow} />
      </C.AreaAccordion>
      <TableAreaUsers />
      
      <C.AreaAccordion value="#E2992B">
      <h3>Banco de Talentos</h3>
          <C.ArrowIcon src={iconArrowRight} show={areaQuestionsDisableShow} />
      </C.AreaAccordion>
      <TableAreaUsers />
    </C.Container>
  );
};

