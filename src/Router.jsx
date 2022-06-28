import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagLogin from "./Login/PagLogin";
import { FirstPage } from "./MainPage/FirstPage";
import Cadastro from "./form/Cadastro";
import Profile from "./UserPage/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage></FirstPage>}></Route>
        <Route path="/PagLogin" element={<PagLogin></PagLogin>}></Route>
        <Route path="/cadastro/*" element={<Cadastro></Cadastro>}></Route>
        <Route path="/profile/*" element={<Profile></Profile>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
