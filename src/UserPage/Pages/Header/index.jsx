import header from './Header.module.css';
import Logo from './assets/logoWeb.png';
import { BsPersonCircle } from 'react-icons/bs';
import { BsCaretDownFill } from 'react-icons/bs';
import { useState, useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useNavigate, Link } from 'react-router-dom';


export const Header = () => {

  const {logout} = useContext(AuthContext) 
  
  const navigate = useNavigate()



  const [showConfig, setShowConfig] = useState(false);

  const ShowConfigFunction = () => {
    setShowConfig(!showConfig);
  };

  const [showValue, setShowValue] = useState(false);

  const ShowValueFunction = () => {
    setShowValue(!showValue);
  };
  return (
    <>
      <div className={header.container}>
        <img src={Logo} className={header.logo} />
        <div onClick={ShowConfigFunction}>
          <BsPersonCircle className={header.personCircle} />
          <BsCaretDownFill className={header.caretDown} />
          {showConfig ? (
            <div className={header.ConfigArea}>
              <Link to="/alterar"  target='_blank' className={header.ConfigAreaItem}>
                Alteração de Dados.
              </Link>
              <a href="#" onClick={() =>logout()} target='_blank' className={header.ConfigAreaItem}>
                Fazer Logout.
              </a>
              <a href='#' target='_blank' className={header.ConfigAreaItem}>
                Encerrar Conta.
              </a>
            </div>
          ) : null}
        </div>
      </div>
      <div className={header.subContainer}>
        <p className={header.welcomeMessage}>Olá, Fred Lucas.</p>
        <div className={header.balance} onClick={ShowValueFunction}>
          <BsCaretDownFill className={header.caretDown2} />
          Meu Saldo
          {showValue ? <p className={header.balanceValue}>R$100,00</p> : null}
        </div>
      </div>
      <a href='https://www.google.com.br' className={header.helpButton}>
        Ajuda?
      </a>
    </>
  );
};
