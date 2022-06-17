import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputMask, { MaskedInput } from "react-input-mask";
import { Header } from "../MainPage/Header";
const schma = yup
  .object({
    name: yup.string().required("Campo obrigatorio"),
    email: yup
      .string()
      .email("Coloque um email valido")
      .required("Campo obrigatorio"),
    gender: yup.string("Campo obrigatorio").required("Campo obrigatorio"),
    document_type: yup
      .string("Campo obrigatorio")
      .required("Campo obrigatorio"),
    document_number: yup
      .string()
      .required("Campo obrigatorio")
      .matches(/^[0-9]+$/),
    birth_date: yup.string().required("Campo obrigatorio"),
    password: yup
      .string()
      .required("Campo obrigatorio")
      .min(6, "Minimo 6 caracteres")
      .max(8, "Max 8 digitos")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "A senha deve conter no minimo 6 caracteres, uma letra maiuscula, um numero e um caractere especial"
      ),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatorio")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais."),

    street: yup.string().required("Campo obrigatorio"),
    district: yup.string().required("Campo obrigatorio"),
    number: yup
      .string()
      .required("Campo obrigatorio")
      .matches(/^[0-9]+$/, "Numero deve ser numerico"),
    city: yup.string().required("Campo obrigatorio"),
    estate: yup.string().required("Campo obrigatorio"),
    cep: yup
      .string()
      .required("Campo obrigatorio")
      .matches(
        /^([\d]{2})([\d]{3})([\d]{3})|^[\d]{2}.[\d]{3}-[\d]{3}/,
        "CEP invalido"
      ),
    complement: yup.string(),
  })
  .required();

const FormCadastro = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },
    control,
  } = useForm({ resolver: yupResolver(schma) });
  
  const [checado, setChecado] = useState(null);

  const checar = (e) => {
    if (checado === null) {
      setChecado(true);
      console.log(checado);
    } else if (checado === false) {
      setChecado(true);
    } else {
      setChecado(false);
      console.log(checado);
    }
  };

  async function enviar(dados) {
   
    console.log(dados);
    let dadosStr = JSON.stringify(dados);
    await fetch("", {
      method: "post",
      body: dadosStr,
      header: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((json) => console.log(json))
      .then(() => {navigate("/FormSenha")})
      .catch((e) => console.log(e));
  }
  return (<>
    
    <main className="main-form">
      <h1 className="display-1 h1-form">Cadastro</h1>
      <form className="form p-3" onSubmit={handleSubmit(enviar)}>
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
                  {...register("name")}
                  type="text"
                  placeholder="Nome"
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
            <div className="col-12 col-md-5 flex">
              <div className="form-group flex">
                <label form="label" className="form-label">
                  Selecione seu genero:{" "}
                </label>
                <div className="row g-2">
                  <div className="col-sm-4">
                    <div className="form-check">
                      <span>
                        Masculino{" "}
                        <input
                          className="form-check-input"
                          type="radio"
                          {...register("gender")}
                          id="masc"
                          name="gender"
                          value={"M"}
                          checked
                        />
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <span>
                        Feminino{" "}
                        <input
                          className="form-check-input"
                          {...register("gender")}
                          type="radio"
                          id="fem"
                          name="gender"
                          value={"F"}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm mt-4">
            <div className="form-group">
              <label>Tipo de documento: </label>
              <div className="row g-2">
                <div className="col-sm-2">
                  <div className="form-check">
                    <span className="">
                      Pessoa fisica
                      <InputMask
                        className="form-check-input"
                        {...register("document_type")}
                        type="radio"
                        id="CPF"
                        name="document_type"
                        value={"CPF"}
                        checked
                      />
                      {
                        <div className="form-text" style={{ color: "red" }}>
                          {errors.document_type?.message}
                        </div>
                      }
                    </span>
                  </div>
                </div>
                <div className="col">
                  <div className="form-check">
                    <span className="">
                      Pessoa Jurifica
                      <input
                        className="form-check-input"
                        {...register("document_type")}
                        value="CNPJ"
                        type="radio"
                        id="CNPJ"
                        name="document_type"
                      />
                      {
                        <div className="form-text" style={{ color: "red" }}>
                          {errors.document_type?.message}
                        </div>
                      }
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5">
                <InputMask
                  mask="999.999.999-99"
                  type="text"
                  {...register("ducument_number")}
                  className="form-control"
                  placeholder="999.999.999-99"
                />
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
                  {...register("birth_date")}
                  type="text"
                  placeholder="Nascimento DD/MM/YYYY"
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
          <div class="col-12 mt-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="gridCheck"
                value={checado}
                onClick={checar}
              />
              <label class="form-check-label" for="gridCheck">
                Concordo com os termos de utilização
              </label>
              {checado === false ? (
                <div className="form-text" style={{ color: "red" }}>
                  Concorde com os termos
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        {/* <Controller
          name="your input name"
          control={control}
          defaultValue=""
          rules={{
            required: true,
          }}
          render={({ field, value }) => (
            <InputMask
              mask="999.999.999.99"
              maskChar=""
              value={field.value}
              onChange={field.onChange}
            >
              {(inputProps) => <input {...inputProps} type="text" />}
            </InputMask>
          )}
        /> */}

        {/*--------botao---------*/}
        <div className="container">
          <input className="btn btn-primary" type="submit"></input>
        </div>
      </form>
    </main>
    </>
  );
};

export default FormCadastro;
