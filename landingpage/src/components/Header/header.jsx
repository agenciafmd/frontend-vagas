import React, { useState } from "react";
import { Container } from "./styles";
import logo from "../../assets/logo.png"

export const Header = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <Container>
      <div>
        <img src={logo} alt="Logo da serie rick and morty" />
      </div>


      <div className="link">
        <a
          href="#banners"
          onClick={() => setActiveNav("#banners")}
          className={activeNav === "#banners" ? "active" : ""}
        >
          Banners
        </a>

        <a
          href="#card"
          onClick={() => setActiveNav("#card")}
          className={activeNav === "#card" ? "active" : ""}
        >
          Personagens vivos
        </a>

        <a
          href="#carousel"
          onClick={() => setActiveNav("#carousel")}
          className={activeNav === "#carousel" ? "active" : ""}
        >
          Personagens mortos
        </a>

        <a
          href="#Newslatter"
          onClick={() => setActiveNav("#Newslatter")}
          className={activeNav === "#Newslatter" ? "active" : ""}
        >
          Newslatter
        </a>

        <a
          href="#footer"
          onClick={() => setActiveNav("#footer")}
          className={activeNav === "#footer" ? "active" : ""}
        >
          Footer
        </a>
      </div>
    </Container>
  );
};