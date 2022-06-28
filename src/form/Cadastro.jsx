import { Route, Routes } from "react-router-dom";
import FormCadastro from "./FormCadastro";
import FormSenha from "./FormSenha";

const Cadastro = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormCadastro></FormCadastro>}></Route>
        <Route path="/cadastro/senha" element={<FormSenha></FormSenha>}></Route>
      </Routes>
    </>
  );
};

export default Cadastro;
