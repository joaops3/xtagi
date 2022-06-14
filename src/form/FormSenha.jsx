import "./FormSenha.css"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import {useNavigate} from "react-router-dom"
import { useState } from "react";

const FormSenha = () => {


const validationSchema = yup.object().shape({
     account_password: yup
       .string()
       .required("Coloque uma senha")
       .matches(
        /^[0-9]+$/, " A senha deve ser apenas numeros"
       ),
     account_passwordConfirmation: yup
       .string()
       .required("Coloque uma senha")
       .oneOf([yup.ref('account_password'), null], "As senhas nao conferem")
   });

 const {register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(validationSchema)})

async function enviar(dados){
    let dadosStr = JSON.stringify(dados)
    await fetch("", {method: "post", body: dadosStr , header: {'Content-type': 'application/json; charset=UTF-8'}})
      .then(resp => {return resp.json()})
      .then(json => console.log(json))
      .catch(e => console.log(e))
}



  return (
    <main className="main-form main-flex">
      <div className="container  form-container">
        <form className="shadow-lg p-3 bg-body rounded form-senha" onSubmit={handleSubmit(enviar)}>
            <h1 className=" display-4 h1-form">Cadastrar Senha</h1>
            <div className="form-text mb-3 senha-texto">Senha do cartão que será usada para fazer transações.</div>
            <div className="row">
            <div className="col-12 col-md">
              <div className="form-group">
                <input
                  className="form-control"
                  {...register("account_password")}
                  // {required: "Campo obrigatorio", pattern: {value: /^[0-9]+$/, message: "A senha deve ser numerica" }, minLength: {value: 6},  maxLength: {value: 6, message:  "A senha deve ter 6 caracteres" }}
                  type="password"
                  placeholder="Senha"
                  
                ></input>
             
              <div className="form-text">Senha deve ser um valor numerico de 6 caracteres</div>
              {<div className="form-text" style={{color: "red"}}>{errors.account_password?.message}</div>} 
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12 col-md">
              <div className="form-group">
                <input
                  className="form-control"
                  {...register("account_passwordConfirmation")}
                  type="password"
                  placeholder="Comfirmar Senha"
                ></input>
               {<div className="form-text" style={{color: "red"}}>{errors.account_password?.message}</div>} 
              </div>
            </div>
          </div>

          <div className="container botao mt-2">
          <button className="btn btn-primary " type="submit" >Cadastrar</button>
          </div>
        
        </form>
      </div>
    </main>
  );
};

export default FormSenha;
