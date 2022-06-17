import home from "./Home.module.css";
import { Link } from "react-router-dom";
import { BiTransferAlt } from "react-icons/bi";
import { MdPayments } from "react-icons/md";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsPiggyBankFill } from "react-icons/bs";
import { RiBillFill } from "react-icons/ri";
import { Header } from "../Header/index";


export const Home = () => {
  return (
    <>
    <Header></Header>
      <div className={home.container}>
        <div className={home.grid}>
          <Link to="/transfer" className={home.link}>
            <div className={home.gridItem}>
              <BiTransferAlt className={home.ico} />
              Transferência
            </div>
          </Link>
          <Link to="/pagamento" className={home.link}>
            <div className={home.gridItem}>
              <MdPayments className={home.ico} />
              Pagamentos
            </div>
          </Link>
          <Link to="/extrato" className={home.link}>
            <div className={home.gridItem}>
              <RiBillFill className={home.ico} />
              Extrato
            </div>
          </Link>
          <Link to="/home" className={home.link}>
            <div className={home.gridItem}>
              <BsCreditCard2BackFill className={home.ico} />
              Crédito
            </div>
          </Link>
          <Link to="/home" className={home.link}>
            <div className={home.gridItem}>
              <BsCurrencyDollar className={home.ico} />
              Conversão
            </div>
          </Link>
          <Link to="/home" className={home.link}>
            <div className={home.gridItem}>
              <BsPiggyBankFill className={home.ico} />
              Cofrinho
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
