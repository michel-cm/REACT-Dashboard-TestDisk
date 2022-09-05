import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Questionario } from "./pages/Questionario";
import { Candidatos } from "./pages/Candidatos";
import { Favoritos } from "./pages/Favoritos";
import { Login } from "./pages/Login";
import { Configuracoes } from "./pages/Configuracoes";

export const AplicationRouters = () => (
  <>
    <BrowserRouter>      
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/questionario" element={<Questionario />}></Route>
        <Route exact path="/candidatos" element={<Candidatos />}></Route>
        <Route exact path="/favoritos" element={<Favoritos />}></Route>
        <Route exact path="/configuracoes" element={<Configuracoes />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);
