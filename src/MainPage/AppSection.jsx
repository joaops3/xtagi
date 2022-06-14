import styled from "styled-components";
import AppMockUp from "./assets/Images/AppMockUp.png";
import QRCODE from "./assets/Images/qr-code.png";

const Section = styled.div`
  height: 550px;
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
  font-size: 25px;
  background-image: linear-gradient(120deg, #cbaa00, #d4af37, #cdb53b);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    margin-top: 120px;
  }
`;

const AppDownloadText = styled.a`
  font-size: 20px;
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const QrCodeImg = styled.img`
  width: 200px;
  height: 200px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;

const ImgSection = styled.img`
  transform: rotate(10deg); //skew(15deg, -15deg);
  width: 170px;

  @media (max-width: 1024px) {
    width: 150px;
  }
  @media (max-width: 768px) {
    width: 110px;
    margin-bottom: 100px;
  }
`;

export const AppSection = () => {
  return (
    <Section id="AppSection">
      <TextSection>
        O Xtagi tem a missão de simplificar a vida dos estagiários, por isso temos nosso próprio App.
        <AppDownloadText href="#" target="_blank">
          Download para IOS.
        </AppDownloadText>
        <AppDownloadText href="#" target="_blank">
          Download para Android.
        </AppDownloadText>
        <QrCodeImg src={QRCODE} />
      </TextSection>
      <ImgSection src={AppMockUp} alt="" />
    </Section>
  );
};
