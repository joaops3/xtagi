import styled from "styled-components";
import Rocketseat from "./assets/GridPhotos/Rocketseat.png";
import BaltaIo from "./assets/GridPhotos/Balta.png";
import Alura from "./assets/GridPhotos/Alura.png";
import Udemy from "./assets/GridPhotos/Udemy.png";
import Trybe from "./assets/GridPhotos/Trybe.png";
import OpenEnglish from "./assets/GridPhotos/OpenEnglish.png";
import WiseUp from "./assets/GridPhotos/WiseUp.png";
import CubosAcademy from "./assets/GridPhotos/CubosAcademy.png";
import GamaAcademy from "./assets/GridPhotos/GamaAcademy.png";

const Section = styled.div`
  height: 550px;
  width: auto;
  background: linear-gradient(120deg, #222, #666);
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 425px) {
    padding: 0 20px;
  }
`;

const TextSection = styled.p`
  max-width: 500px;
  font-size: 32px;
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
`;

const TextLink = styled.a`
  margin-top: 10px;
  display: block;
  font-size: 16px;
  &:hover {
    border-bottom: 1px solid #d4af37;
    width: 80px;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;

const GridArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 180px);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 150px);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 100px);
  }

  @media (max-width: 320px) {
    gap: 5px;
  }
`;

const GridElement = styled.div`
  background: linear-gradient(120deg, #444, #888);
  padding: 20px;
  font-size: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridImg = styled.img`
  width: 100px;
  margin-top: 0;
`;

export const BenefitsSection = () => {
  return (
    <Section id="BeneSection">
      <GridArea>
        <GridElement>
          <GridImg src={Rocketseat} />
        </GridElement>
        <GridElement>
          <GridImg src={BaltaIo} />
        </GridElement>
        <GridElement>
          <GridImg src={Alura} />
        </GridElement>
        <GridElement>
          <GridImg src={Udemy} />
        </GridElement>
        <GridElement>
          <GridImg src={Trybe} />
        </GridElement>
        <GridElement>
          <GridImg src={OpenEnglish} />
        </GridElement>
        <GridElement>
          <GridImg src={WiseUp} />
        </GridElement>
        <GridElement>
          <GridImg src={CubosAcademy} />
        </GridElement>
        <GridElement>
          <GridImg src={GamaAcademy} />
        </GridElement>
      </GridArea>
      <TextSection>
        Tenha acesso ao BeneX, um programa repleto de benefícios para você estagiário.
        <TextLink href="https://www.google.com.br" target="_blank">
          Saiba mais
        </TextLink>
      </TextSection>
    </Section>
  );
};
