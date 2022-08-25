import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";


export const AplicationRouters = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>        
      </Routes>
    </BrowserRouter>
  </>
);
