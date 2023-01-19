import React from "react";
import "./styles.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="./">
            <img src="/menosdomesmo.svg" alt="Logo Menos do Mesmo" />
          </a>
        </div>
        <ul className="menuDesktop">
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#testimonials">Depoimentos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
        <button className="menuMobile" aria-label="Menu Mobile">
          <img src="/menu-mobile.svg" alt="Menu Mobile" width="32" height="32" />
        </button>
      </div>
    </header>
  );
}
