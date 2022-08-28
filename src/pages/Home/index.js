import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import * as C from "./styles";

import { Api } from '../../services/Api';
import { useEffect } from "react";

const Home = () => {

  async function getAllQuestions() {
   await Api.getAllQuestions()
  }

  useEffect(() => {
    getAllQuestions();
  },[])

  return (
    <C.Container>
      <SideBar />
      <Header />
      <C.Titulo>Home</C.Titulo>
    </C.Container>
  );
};

export default Home;