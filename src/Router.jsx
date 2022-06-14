import { BrowserRouter, Routes, Route } from "react-router-dom";

import PagLogin from "./Login/PagLogin";
//import Perfil from "./Privado/Perfil";
import Private from "./Context/Private";
import {FirstPage} from "./MainPage/FirstPage"
import FormCadastro from "./form/FormCadastro";
import {Home} from "./UserPage/Pages/Home";
import {TransferArea} from "../src/UserPage/Pages/TransferArea";
import AlterarDados from "./UserPage/Pages/AlterarDados/AlterarDados";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage></FirstPage>}></Route>
        <Route path="/PagLogin" element={<PagLogin></PagLogin>}></Route>
        <Route
          path="/FormCadastro"
          element={<FormCadastro></FormCadastro>}
        ></Route>
        <Route
          path="/home"
          element={
            <Private>
              <Home></Home>
            </Private>
          }
        ></Route>
        <Route path="/transfer" element={<TransferArea></TransferArea>}></Route>
        <Route path="/alterar" element={<AlterarDados></AlterarDados>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
