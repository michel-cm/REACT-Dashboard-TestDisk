import * as C from "./styled";
import { Card } from "./Card";
import { TableAreaUsers } from "../../components/TableAreaUsers";
import { Search } from "../../components/Search";
import { Button } from "../../components/Button";
import { Accordion } from "../../components/Accordion";

import { useState } from "react";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import { ModalSendEmailTeste } from "../../components/ModalSendEmailTeste";

import { useCandidatesTests } from "../../hooks/useCandidatesTests";

import { useConfigs } from "../../hooks/useConfigs";

export const Candidatos = () => {
  const [areaAllCandidates, setAreaAllCandidates] = useState(true);

  const [modal, setModal] = useState(false);

  const { listCandidadtes, ListCandidatesFavorites } = useCandidatesTests();

  const [search, setSearch] = useState("");

  const { msg } = useConfigs();

  const filteredListCandidates =
    search.length > 0
      ? listCandidadtes.filter((candidate) =>
          candidate.name.toLowerCase().includes(search)
        )
      : [];

  function handleModalSendEmail() {
    setModal(true);
  }

  return (
    <C.Container>
      <SideBar />
      <Header />
      <C.MainContent className={"MainContentPadingAndMargin"}>
        <C.AreaCardsResume>
          <Card title={"Total Candidatos"} color={"#2261BC"} value={listCandidadtes && listCandidadtes.length} />
          <Card title={"Banco de Talentos"} color={"#E2992B"} value={ListCandidatesFavorites && ListCandidatesFavorites.length} />
        </C.AreaCardsResume>

        <C.AreaSearchAndAdd>
          <Button title="Enviar novo Teste" fn={handleModalSendEmail} />

          <Search
            placeholder="Digite o nome do candidato"
            state={search}
            setSearch={setSearch}
          />
        </C.AreaSearchAndAdd>

        {search.length > 0 ? (
          <>
            <C.AreaFiltered>
              <h3>Filtrando</h3>
              <div></div>
            </C.AreaFiltered>
            <TableAreaUsers candidates={filteredListCandidates} />
          </>
        ) : (
          <>
            <Accordion
              color="#2261BC"
              state={areaAllCandidates}
              setState={setAreaAllCandidates}
              title="Todos Candidatos"
            />
            {areaAllCandidates ? (
              <TableAreaUsers candidates={listCandidadtes} />
            ) : (
              <div></div>
            )}
          </>
        )}
      </C.MainContent>
      {modal && <ModalSendEmailTeste setModal={setModal} msg={msg} />}
    </C.Container>
  );
};
