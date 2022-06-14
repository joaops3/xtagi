import styled from "styled-components";
import {FaFacebookF} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Section = styled.div`
  height: 200px;
  background: linear-gradient(120deg, #333, #666);
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1024px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Footer1 = styled.div`
  color: #ccc;
  text-align: center;
`;

const SocialMediaFooter = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .FaFacebookF,
  .FaInstagram,
  .FaYoutube,
  .FaLinkedinIn {
    color: #ccc;

    &:hover {
      color: #d4af37;
    }
  }
`;

const Footer2 = styled.div`
  text-align: center;
  color: #ccc;
`;

const Footer3 = styled.p`
  color: #ccc;
  z-index: 1000;

  a {
    text-decoration: none;
    color: #ccc;

    &:hover {
      color: #d4af37;
    }
  }
`;

export const Footer = () => {
  return (
    <Section>
      <Footer1>
        <p style={{ display: "block" }}>Siga o Xtagi nas Redes Sociais.</p>
        <SocialMediaFooter>
          <a href="https://pt-br.facebook.com/" target="_blank">
            {" "}
            <FaFacebookF className="FaFacebookF" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagram className="FaInstagram" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <FaYoutube className="FaYoutube" />
          </a>
          <a href="https://br.linkedin.com/" target="_blank">
            <FaLinkedinIn className="FaLinkedinIn" />
          </a>
        </SocialMediaFooter>
      </Footer1>
      <Footer2>
        <p>
          Xtagi Financeira e Serviços Digitais © 2022. <br />
          Todos os direitos reservados.
        </p>
      </Footer2>
      <Footer3>
        <adress>
          Av. Paulo Motta dos Anjos, 1928. <br />
          Jardim Santa Conceição.
          <br />
          Vnhedo - SP. <br />
          <a href="#">Tel: +55 57 44500-0921.</a>
          <br />
          <a href="#">E-mail: contato@xtagi.com</a>
        </adress>
      </Footer3>
    </Section>
  );
};
