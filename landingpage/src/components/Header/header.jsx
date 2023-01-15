import React, { useState } from "react";
import "./header.css";

export const Header = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <header>
        <div className="icon">
            <h1>Rick and Morty</h1>
        </div>

      <a
        href="#banners"
        onClick={() => setActiveNav("#banners")}
        className={activeNav === "#banners" ? "active" : ""}
      >
        Primeira seção
      </a>

      <a
        href="#1card"
        onClick={() => setActiveNav("#1card")}
        className={activeNav === "#1card" ? "active" : ""}
      >
        Segunda seção
      </a>

      <a
        href="#2card"
        onClick={() => setActiveNav("#2card")}
        className={activeNav === "#2card" ? "active" : ""}
      >
        Terceira seção
      </a>

      <a
        href="#footer"
        onClick={() => setActiveNav("#footer")}
        className={activeNav === "#footer" ? "active" : ""}
      >
        Footer
      </a>
     
    </header>
  );
};