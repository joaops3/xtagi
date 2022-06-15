import "./alterarDados.css"
import { Header } from "../Header/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputMask, { MaskedInput } from "react-input-mask";
import axios from "axios";
import { api } from "../../../hooks/Api";

const schma = yup
  .object({
    email: yup
      .string()
      .email("Coloque um email valido"),
    document_number: yup
      .string()
      .matches(/^[0-9]+$/),
    birth_date: yup.string(),
    password: yup
      .string()
      .min(6, "Minimo 6 caracteres")
      .max(8, "Max 8 digitos")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "A senha deve conter no minimo 6 caracteres, uma letra maiuscula, um numero e um caractere especial"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser iguais."),

    street: yup.string(),
    district: yup.string(),
    number: yup
      .string()
      .matches(/^[0-9]+$/, "Numero deve ser numerico"),
    city: yup.string(),
    estate: yup.string(),
    cep: yup
      .string()
      .matches(
        /^([\d]{2})([\d]{3})([\d]{3})|^[\d]{2}.[\d]{3}-[\d]{3}/,
        "CEP invalido"
      ),
    complement: yup.string(),
  })
  .required();


  function alterarDados(dados){
    api.put("/local", dados )
  }

const AlterarDados = () => {

    useEffect( ()=> {
        api.get("usuario")
    }, [])

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, dirtyFields },
        control,
      } = useForm({ resolver: yupResolver(schma) });
    
    
     
    return ( 
    <>
    <Header></Header>
   
    <main className="main-form">
      <h1 className="display-1 h1-form">Alteração de dados</h1>
      <form className="form p-3" onSubmit={handleSubmit(alterarDados)}>
        <div className="container mb-5 shadow-lg p-3 mb-5 bg-body rounded">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <InputMask
                  formatChars={
                    {
                      'a': '[A-Za-z]',
                    }
                  }
                  className="form-control"
                  value="joao"
                  type="text"
                  placeholder="Nome"
                  readOnly
                ></InputMask>
                {
                  <div className="form-text" style={{ color: "red" }}>
                    {errors.name?.message}
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 mt-4">
              <div className="form-group">
                <input
                  className="form-control"
                  {...register("email")}
                  type="text"
                  placeholder="Email"
                ></input>
                {
                  <div className="form-text" style={{ color: "red" }}>
                    {errors.email?.message}
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="row mt-4 ">
           
          </div>
          <div className="row-sm mt-4">
            <div className="form-group">
            
              <div className="col-12 col-md-5">
                <InputMask
                  mask="999.999.999-99"
                  type="text"
                  {...register("ducument_number")}
                  className="form-control"
                  placeholder="999.999.999-99"
                  readOnly                />
                {
                  <div className="form-text" style={{ color: "red" }}>
                    {errors.document_number?.message}
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 mt-4">
              <div className="form-group">
                <InputMask
                  mask="99/99/9999"
                  className="form-control"
                
                  type="text"
                  placeholder="Nascimento DD/MM/YYYY"
                  readOnly
                ></InputMask>
                {
                  <div className="form-text" style={{ color: "red" }}>
                    {errors.birth_date?.message}
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 mt-4">
              <div className="form-group">
                <input
                  className="form-control"
                  {...register("password")}
                  type="password"
                  placeholder="Senha"
                ></input>
                <div class="form-text">
                  A senha deve ter no min 6 e max 8 caracteres.No minimo uma
                  letra minuscula, uma letra maiuscula, um caractere especial e
                  um numero.
                </div>
                {
                  <div className="form-text" style={{ color: "red" }}>
                    {errors.password?.message}
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 mt-4">
              <div className="form-group">
                <input
                  className="form-control"
                  {...register("passwordConfirm")}
                  type="password"
                  placeholder="Comfirmar Senha"
                ></input>
                {
                  <div className="form-text" style={{ color: "red" }}>
                    {errors.passwordConfirm?.message}
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
        {/*--------------------------endereco--------------------*/}
        <div className="container mt-4 shadow-lg p-3 mb-5 bg-body rounded ">
          <div className="row g-3">
            <div class="col-5">
              <label for="inputAddress2" class="form-label">
                Rua
              </label>
              <input
                type="text"
                {...register("street")}
                class="form-control"
                id="inputAddress2"
                name="street"
                placeholder="Rua imperador"
              />
              {
                <div className="form-text" style={{ color: "red" }}>
                  {errors.street?.message}
                </div>
              }
            </div>
            <div className="col-5">
              <label for="bairro" className="form-label">
                Bairro
              </label>
              <input
                type="text"
                {...register("district")}
                className="form-control"
                id="bairro"
                name="district"
                placeholder="Bairro Napoleao"
              />
              {
                <div className="form-text" style={{ color: "red" }}>
                  {errors.district?.message}
                </div>
              }
            </div>
            <div className="col-1">
              <label for="numero" className="form-label">
                Numero
              </label>
              <InputMask
                mask="9999"
                type="text"
                {...register("number")}
                className="form-control"
                id="numero"
              />
              {
                <div className="form-text" style={{ color: "red" }}>
                  {errors.number?.message}
                </div>
              }
            </div>
          </div>
          <div className="row g-4 mt-">
            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                Cidade
              </label>
              <input
                type="text"
                {...register("city")}
                class="form-control"
                id="inputCity"
                placeholder="Paris"
              />
              {
                <div className="form-text" style={{ color: "red" }}>
                  {errors.city?.message}
                </div>
              }
            </div>

            <div class="col-sm-2">
              <label for="inputState" class="form-label">
                Estado
              </label>
              <select
                id="inputState"
                class="form-select"
                {...register("estate")}
              >
                <option value="">Selecione</option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
              {
                <div className="form-text" style={{ color: "red" }}>
                  {errors.estate?.message}
                </div>
              }
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">
                CEP
              </label>
              <InputMask
                mask="99999-999"
                type="text"
                {...register("cep")}
                class="form-control"
                id="inputZip"
                name="cep"
                placeholder="00000-00"
              />
              {
                <div className="form-text" style={{ color: "red" }}>
                  {errors.cep?.message}
                </div>
              }
            </div>
            <div class="col-md-2">
              <label for="complement" class="form-label">
                Complemento
              </label>
              <input
                type="text"
                {...register("complement")}
                class="form-control"
                id="complement"
                name="complement"
                placeholder="Condominio"
              />
            </div>
          </div>
       
        </div>

    

        {/*--------botao---------*/}
        <div className="container">
          <input className="btn btn-primary" type="submit"></input>
        </div>
      </form>
    </main>
    







    </> );
}
 
export default AlterarDados;