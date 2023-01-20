import React, { useState } from "react";
import "./styles.scss";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="./">
            <img src="/menosdomesmo.svg" alt="Logo Menos do Mesmo" />
          </a>
        </div>
        <ul className={`menuDesktop  ${openMenu && "show"}`}>
          <li>
            <a href="#" onClick={handleOpenMenu}>
              Início
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleOpenMenu}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={handleOpenMenu}>
              Depoimentos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleOpenMenu}>
              Contato
            </a>
          </li>
          <button className="closeMenu" onClick={handleOpenMenu}>
            <img
              src="/menu-close.svg"
              alt="Fechar Menu Mobile"
              width="48"
              height="48"
            />
          </button>
        </ul>
        <button className="menuMobile" onClick={handleOpenMenu}>
          <img
            src="/menu-mobile.svg"
            alt="Abrir Menu Mobile"
            width="32"
            height="32"
          />
        </button>
      </div>
    </header>
  );
}
