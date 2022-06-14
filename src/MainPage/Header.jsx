import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoXtagi from "./assets/Images/logoWeb.png";
import { useNavigate } from "react-router-dom";


const HeaderContainer = styled.div`
  width: 100vw;
  height: 8vh;
  background: linear-gradient(120deg, #222, #666);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 9;
`;
const HeaderLogoImg = styled.img`
  padding: 5px 10px;
  width: 100px;
  height: 100px;
`;

const NavItems = styled.nav`
  padding: 0 25px;

  .signIn,
  .signUp {
    background-color: #d4af37;
    color: #000;
    border-radius: 5px;

    &:hover {
      background-color: transparent;
      color: #d4af37;
      border-top: 2px solid #d4af37;
      border-bottom: 2px solid #d4af37;
      transition: all ease 0.4s;
    }
  }
  @media (max-width: 425px) {
    padding: 0;
    //display: none;
  }

  @media (max-width: 425px) {
    display: none;
  }
`;

const NavAncora = styled.a`
  padding: 5px 10px;
  margin: 0 5px;
  background-color: transparent;
  text-decoration: none;
  color: #d4af37;
  border-radius: 5px;

  &:hover {
    border-bottom: 1px solid #d4af37;
  }

  @media (max-width: 425px) {
    padding: 2px;
    font-size: 12px;
  }
`;

export const Header = () => {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <HeaderLogoImg src={LogoXtagi} alt="Logo da Xtagi Bank" onClick={() => navigate("/")} />
      <NavItems>
        <NavAncora href="#MainSection">Home</NavAncora>
        <NavAncora href="#AboutSection">Sobre</NavAncora>
        <NavAncora href="#BeneSection">Benefícios</NavAncora>
        <NavAncora href="#AppSection">Aplicativo</NavAncora>
        <NavAncora className="signIn" onClick={() => navigate("/PagLogin")}>logar</NavAncora>
        <NavAncora className="signUp"  onClick={() => navigate("/FormCadastro")}>Criar conta</NavAncora>
      </NavItems>
    </HeaderContainer>
  );
};
