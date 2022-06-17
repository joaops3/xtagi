import { Header } from "../Header/index";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { string } from "yup";
import "./Pagamento.css"

const Pagamento = () => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  async function handleLogin(e) {}
  return (
    <>
      <Header></Header>
      <div className="container ">
        <form
          onSubmit={handleLogin}
          className="shadow-lg p-3 bg-body rounded form-pagamentos "
        >
          <h1 className=" display-4 h1-form">Pagamentos</h1>
          <div className="row offset-4">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="numero do boleto"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {<div className="form-text" style={{ color: "red" }}></div>}
              </div>
            </div>
          </div>

          <div className="container botao mt-2">
            <button className="btn btn-primary " type="submit">
              Comfirmar
            </button>
          </div>

        </form>
      </div>
    </>
  );
};

export default Pagamento;
