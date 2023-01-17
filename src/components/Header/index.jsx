import React from "react";
import "./styles.scss";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <a href="#">
              <img src="/menosdomesmo.svg" alt="Logo Menos do Mesmo" />
            </a>
          </div>

          <ul className="menu">
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Depoimentos</a>
            </li>
            <li>
              <a href="#">Fique por dentro</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
