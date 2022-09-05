import * as C from "./styled";
import { Card } from "./Card";
import { TableAreaUsers } from "../../components/TableAreaUsers";
import { Button } from "../../components/Button";
import { useEffect } from "react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

import { useAuth } from "../../hooks/useAuth";
import { useCandidatesTests } from "../../hooks/useCandidatesTests";

import { useNavigate } from "react-router-dom";



const Home = () => {
  const { user } = useAuth();

  const { listCandidadtes } = useCandidatesTests();  

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <C.Container >
      <SideBar />
      <Header />
      <C.MainContent className={"MainContentPadingAndMargin"}>
        <C.AreaCardsResume>
          <Card
            title={"Dominantes"}
            color={"#FC5A5A"}
            value={5}
            dominancia="D"
          />
          <Card
            title={"Influentes"}
            color={"#E2992B"}
            value={5}
            dominancia="I"
          />
          <Card title={"Estáveis"} color={"#3AB04D"} value={5} dominancia="S" />
          <Card
            title={"Condescendentes"}
            color={"#2261BC"}
            value={5}
            dominancia="C"
          />
        </C.AreaCardsResume>

        <C.AreaSearchAndAdd>
         {/** removido */}
        </C.AreaSearchAndAdd>

        <TableAreaUsers candidates={listCandidadtes}/>
      </C.MainContent>
    </C.Container>
  );
};

export default Home;
