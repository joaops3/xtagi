import { useState } from 'react';
import transfer from './Transfer.module.css';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Header } from "../Header/index";

export const TransferArea = () => {
  const [value, setValue] = useState(null);
  const [idRecipient, setIdRecipient] = useState('');
  const [recipientStatus, setRecipientStatus] = useState(false);
  const [description, setDescription] = useState(false);
  const [showData, setShowData] = useState(false);
  const [verifyData, setVerifyData] = useState(false);
  const [Check, setCheck] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [sendTransfer, setSendTransfer] = useState(false);
  const [password, setPassword] = useState('');

  const Admin = {
    account: '4321',
    name: 'Fred Lucas',
    cpf: '87645367598',
    balance: 100000000000,
    passwordAccount: '123456',
  };
  const UserRecipient = {
    account: '1234',
    name: 'Bruno Santos',
    cpf: '490324675398',
    balance: 100000000000,
    passwordAccount: '?',
  };

  const handleClick = () => {
    setShowData(true);
    setCheck(true);
  };

  return (
    <>
    <Header></Header>
    <div className={transfer.container}>
      <h1 className={transfer.title}>Área de Transferência</h1>
      <div className={transfer.value}>
        <input type='text' onChange={(e) => setValue(e.target.value)} className={transfer.valueToTransfer} placeholder='Valor da transferência' />
        {/*<p>{Number(value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>*/}

        {UserRecipient.balance >= value && value > 5 && value < 1000000 && <AiOutlineArrowDown className={transfer.arrow} onClick={() => setRecipientStatus(true)} />}
      </div>
      {recipientStatus && (
        <div>
          <div>
            <input type='text' onChange={(e) => setIdRecipient(e.target.value)} className={transfer.recipientInput} placeholder='Conta do destinatário' />
            {idRecipient == UserRecipient.account && <AiOutlineArrowDown onClick={() => setDescription(true)} className={transfer.arrow} />}
          </div>
          {idRecipient == UserRecipient.account && (
            <div className={transfer.recipientDataArea}>
              <p className={transfer.recipientDataItem}>Nome: {UserRecipient.name}</p>
            </div>
          )}
          {description && (
            <div>
              <input type='text' name='' id='' className={transfer.descArea} onChange={(e) => setDescription(e.target.value)} placeholder='Descrição da transferência' />
              <AiOutlineArrowDown className={transfer.arrow} onClick={handleClick} />
            </div>
          )}
          {showData && (
            <button style={{ display: 'block', marginTop: '20px' }} onClick={() => setVerifyData(!verifyData)} className={transfer.btnData}>
              {verifyData ? 'Esconder dados' : 'Mostrar dados'}
            </button>
          )}

          {verifyData && (
            <div className={transfer.verifyData}>
              <p className={transfer.verifyDataItem}>Origem: {Admin.name}</p>
              <p className={transfer.verifyDataItem}>Valor: {Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              <p className={transfer.verifyDataItem}>Conta: {UserRecipient.account}</p>
              <p className={transfer.verifyDataItem}>Destinatário: {UserRecipient.name}</p>
              <p className={transfer.verifyDataItem}>CPF: {UserRecipient.cpf}</p>
              <p className={transfer.verifyDataItem}>Descrição: {description}</p>
            </div>
          )}

          {Check && (
            <>
              <label htmlFor='checkBox' onClick={() => setConfirmed(true)} className={transfer.confirmCheckBox}>
                <input type='checkbox' name='checkBox' id='checkBox' className={transfer.confirmInput} />
                Eu, {UserRecipient.name} confirmo a transação.
              </label>
            </>
          )}

          {confirmed && (
            <div>
              <input type='password' name='psw' id='psw' minLength='6' maxLength='6' placeholder='Senha da conta' className={transfer.psw} onChange={(e) => setPassword(e.target.value)} />
              {password == Admin.passwordAccount && <AiOutlineArrowDown onClick={() => setSendTransfer(true)} className={transfer.arrow} />}
            </div>
          )}
        </div>
      )}
      {sendTransfer && <button className={transfer.realizeTransfer}>Realizar transação</button>}
    </div>
    </>
  );
};
