import React from "react";

import "./styles.scss";

export default function Contact() {
  return (
    <section className="Contact" id="contact">
      <div className="container">
        <h2>Entre em contato conosco agora!</h2>
        <form action="#">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="E-mail" />
          <button type="submit" disabled>
            <img src="/submit.svg" alt="Icone Enviar" />
          </button>
        </form>
      </div>
    </section>
  );
}
