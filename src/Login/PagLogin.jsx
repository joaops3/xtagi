import "./PagLogin.css";
import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Header } from "../MainPage/Header";
import { useEffect } from "react";
import { getUserLocalStore } from "../hooks/Api";
const PagLogin = () => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    signin(email, password);
    navigate("/profile");
  }

  useEffect(()=>{
    const user = getUserLocalStore()
    if(!user){
      return
    }
    navigate("/profile")

  })


  // {
  //   "email": "eve.holt@reqres.in",
  //   "password": "cityslicka"
  // }

  return (<>
    <Header></Header>
    <main className="main-form main-flex">
      <div className="container  form-container">
        <form
          onSubmit={handleLogin}
          className="shadow-lg p-3 bg-body rounded form-login"
        >
          <h1 className=" display-4 h1-form">Login</h1>

          <div className="row">
            <div className="col-12 col-md">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {<div className="form-text" style={{ color: "red" }}></div>}
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12 col-md">
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => SetPassword(e.target.value)}
                ></input>
                {<div className="form-text" style={{ color: "red" }}></div>}
              </div>
            </div>
          </div>

          <div className="container botao mt-2">
            <button className="btn btn-primary " type="submit">
              Entrar
            </button>
          </div>

          <div className="form-text mt-4">
            <a href="">esqueci minha senha</a>
          </div>
        </form>
      </div>
    </main>
    </>
  );
};

export default PagLogin;
