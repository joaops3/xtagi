import { Route, Routes } from "react-router-dom";

import { Home } from "./Pages/Home";
import { TransferArea } from "./Pages/TransferArea";
import AlterarDados from "./Pages/AlterarDados/AlterarDados";
import Private from "../Context/Private";
import Pagamento from "./Pages/Pagamento/Pagamento";
import Extrato from "./Pages/Extrato/Extrato";
const Profile = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Private>
            <Home></Home>
          </Private>
        }
      ></Route>
      <Route path="/transfer" element={<TransferArea></TransferArea>}></Route>
      <Route path="/alterar" element={<AlterarDados></AlterarDados>}></Route>
      <Route path="/extrato" element={<Extrato></Extrato>}></Route>
      <Route path="/Pagamento" element={<Pagamento></Pagamento>}></Route>
    </Routes>
  );
};

export default Profile;
