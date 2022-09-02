import * as C from "./styled";
import { Card } from "./Card";
import { TableAreaUsers } from "../../components/TableAreaUsers";
import { Button } from "../../components/Button";

const Home = () => {
  return (
    <C.Container className={"MainContentPadingAndMargin"}>
      <C.AreaCardsResume>
        <Card title={"Dominantes"} color={"#FC5A5A"} value={5} dominancia="D" />
        <Card title={"Influentes"} color={"#E2992B"} value={5} dominancia="I" />
        <Card title={"Estáveis"} color={"#3AB04D"} value={5} dominancia="S" />
        <Card
          title={"Condescendentes"}
          color={"#2261BC"}
          value={5}
          dominancia="C"
        />
      </C.AreaCardsResume>     

      <C.AreaSearchAndAdd>
        <Button />       
      </C.AreaSearchAndAdd>

      <TableAreaUsers />
    </C.Container>
  );
};

export default Home;
