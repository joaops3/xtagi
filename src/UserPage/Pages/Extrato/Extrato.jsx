import "./Extrato.css";
import { Header } from "../Header/index";

import ValorExtrato from "./ValorExtrato";

const Extrato = () => {
  return (
    <>
      <Header></Header>
      <section className="extrato-container">
        <h1 className="extrato">Extrato</h1>
        <table>
          <tr>
            <th className="table-title">Data</th>
            <th className="table-title">Nome</th>
            <th className="table-title">Valor</th>
          </tr>
          
          
         <ValorExtrato date="02/20/2000" name="alura" preco="1000"></ValorExtrato>
         <ValorExtrato date="02/20/2000" name="alura" preco="1000"></ValorExtrato>
         <ValorExtrato date="02/20/2000" name="alura" preco="1000"></ValorExtrato>
        </table>
      </section>
    </>
  );
};

export default Extrato;
