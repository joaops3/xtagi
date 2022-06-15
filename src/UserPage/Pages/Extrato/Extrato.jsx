import "./Extrato.css";
import { Header } from "../Header/index";

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
          <tr>
            <td className="table-item">27/02/2000</td>
            <td className="table-item">alura</td>
            <td className="table-item">2000</td>
          </tr>
          <tr>
            <td className="table-item">27/02/2000</td>
            <td className="table-item">alura</td>
            <td className="table-item">2000</td>
          </tr>
          <tr>
            <td className="table-item">27/02/2000</td>
            <td className="table-item">alura</td>
            <td className="table-item">2000</td>
          </tr>
        </table>
      </section>
    </>
  );
};

export default Extrato;
