import * as C from "./styled";
import { Card } from "./Card";
import { TableAreaUsers } from "../../components/TableAreaUsers";
import { useEffect } from "react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

import { useAuth } from "../../hooks/useAuth";
import { useCandidatesTests } from "../../hooks/useCandidatesTests";
import { useQtdPredominancias } from "../../hooks/useQtdPredominancias";

import { useNavigate } from "react-router-dom";
import { PieChart } from "../../components/PieChart";
import { useState } from "react";
import { ModalFeedback } from "../../components/ModalFeedback";

const Home = () => {
  const { user } = useAuth();

  const { listCandidadtes } = useCandidatesTests();

  const { predominancias } = useQtdPredominancias();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <C.Container>
      <SideBar />
      <Header />
      <C.MainContent className={"MainContentPadingAndMargin"}>
        <C.AreaCardsResume>
          <Card
            title={"Dominantes"}
            color={"#FC5A5A"}
            value={predominancias && predominancias.dominantes}
            dominancia="D"
          />
          <Card
            title={"Influentes"}
            color={"#E2992B"}
            value={predominancias && predominancias.influentes}
            dominancia="I"
          />
          <Card
            title={"Estáveis"}
            color={"#3AB04D"}
            value={predominancias && predominancias.estaveis}
            dominancia="S"
          />
          <Card
            title={"Condescendentes"}
            color={"#2261BC"}
            value={predominancias && predominancias.condescendentes}
            dominancia="C"
          />
        </C.AreaCardsResume>
        {listCandidadtes.length > 0 && <PieChart />}
        <C.AreaSearchAndAdd>{/** removido */}</C.AreaSearchAndAdd>
        <TableAreaUsers candidates={listCandidadtes} />
      </C.MainContent>
    </C.Container>
  );
};

export default Home;
