import React from "react";
import { Container } from "./styles";
import logo from "../../assets/logo.png"

export const Footer = () => {
  return (
    <Container id="footer">

      <div>
        <img src={logo} alt="Logo da serie rick and morty" />
      </div>

      <div className="link">

        <h1>Email@email.com</h1>

        <a href="https://api.whatsapp.com/send?phone=5517991972659" target={"_blank"}>(17)99197-2659</a>
      </div>

    </Container>
  );
};