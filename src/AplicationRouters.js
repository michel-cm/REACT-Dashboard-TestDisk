import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Questionario } from "./pages/Questionario";
import { Candidatos } from "./pages/Candidatos";

import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";

export const AplicationRouters = () => (
  <>
    <BrowserRouter>
      <SideBar />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/questionario" element={<Questionario />}></Route>
        <Route exact path="/candidatos" element={<Candidatos />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);
