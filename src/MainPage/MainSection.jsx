import styled from "styled-components";
import MainPhoto from "./assets/Images/MainPhoto.png";

const AreaMainSection = styled.div`
  display: flex;
  height: 100vh;
  width: auto;
  background-image: url(${MainPhoto});
  background-size: cover;

  @media (max-width: 768px) {
    height: 600px;
  }
`;

const TextMainSection = styled.p`
  margin-top: 18%;
  padding-left: 50px;
  max-width: 500px;
  font-size: 35px;
  background-image: linear-gradient(120deg, #000, #666, #d4af37);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1024px) {
    margin-top: 20%;
  }

  @media (max-width: 768px) {
    margin-top: 24%;
  }
  @media (max-width: 425px) {
    margin-top: 40%;
    padding-left: 30px;
  }
  @media (max-width: 375px) {
    margin-top: 50%;
    font-size: 30px;
  }
`;

const TextLink = styled.a`
  margin-top: 5px;
  display: block;
  font-size: 16px;
  &:hover {
    border-bottom: 2px solid #d4af37;
    width: 80px;
  }

  @media (max-width: 375px) {
    display: none;
  }

  @media (max-width: 320px) {
    display: none;
  }
`;

const HelpButton = styled.a`
  position: fixed;
  width: 120px;
  height: 40px;
  bottom: 40px;
  right: 20px;
  background-color: #d4af37;
  color: #000;
  border-radius: 50px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    width: 155px;
    transition: all 0.5s ease-in-out;
  }

  @media (max-width: 425px) {
    display: none;
  }
`;

export const MainSection = () => {
  return (
    <AreaMainSection id="MainSection">
      <TextMainSection>
        Torne-se Xtagier e faça parte da maior rede de estagíários do Brasil.
        <TextLink href="https://www.google.com.br" target="_blank">
          Saiba mais
        </TextLink>
      </TextMainSection>
      <HelpButton href="https://google.com.br">Ajuda?</HelpButton>
    </AreaMainSection>
  );
};
