import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import * as C from "./styles";

const Home = () => {
  return (
    <C.Container>
      <SideBar />
      <Header />
      <C.Titulo>Home</C.Titulo>
    </C.Container>
  );
};

export default Home;