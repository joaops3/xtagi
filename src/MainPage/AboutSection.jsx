import styled from "styled-components";
import CardImg from "./assets/Images/CardImg.png";

const Section = styled.div`
  height: 60vh;
  width: auto;
  background: linear-gradient(120deg, #222, #666);
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1024px) {
    //flex-direction: column;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 425px) {
    padding: 0 20px;
  }
`;

const TextSection = styled.p`
  max-width: 500px;
  font-size: 30px;
  background-image: linear-gradient(120deg, #cbaa00, #d4af37, #cdb53b);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1024px) {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 375px) {
    font-size: 16px;
    //max-width: 375px;
  }
`;

const TextLink = styled.a`
  margin-top: 10px;
  display: block;
  font-size: 16px;
  &:hover {
    border-bottom: 1px solid #d4af37;
    width: 80px;
  }

  @media (max-width: 425px) {
    font-size: 14px;
  }

  @media (max-width: 320px) {
    display: none;
  }
`;

const ImgSection = styled.img`
  transform: rotate(-60deg);
  width: 300px;

  @media (max-width: 1024px) {
    width: 200px;
    margin-bottom: 50px;
  }

  @media (max-width: 375px) {
    width: 150px;
    //margin-bottom: 50px;
  }
`;

export const AboutSection = () => {
  return (
    <Section id="AboutSection">
      <TextSection>
        Somos a maior instituição financeira da América exclusiva para estagiários.
        <ol style={{ listStyleType: "circle", color: "#d4af37" }}>
          <li style={{ fontSize: "20px" }}>Zero anuidade.</li>
          <li style={{ fontSize: "20px" }}>Milhares de benefícios.</li>
          <li style={{ fontSize: "20px" }}>Conta digital.</li>
          <li style={{ fontSize: "20px" }}>Cartão de Crédito.</li>
        </ol>
        <TextLink href="https://www.google.com.br" target="_blank">
          Saiba mais
        </TextLink>
      </TextSection>
      <ImgSection src={CardImg} alt="" />
    </Section>
  );
};
