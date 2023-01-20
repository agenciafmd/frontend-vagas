import React from "react";
import "./styles.scss";

export default function About() {
  return (
    <section className="About" id="about">
      <div className="container">
        <h2 data-aos="fade-up">Porque estudar conosco?</h2>
        <ul className="cards">
          <li className="card" data-aos="fade-up">
            <img
              src="/icone-1.svg"
              alt="Tudo para você aprender"
              className="icon"
            />
            <h3>Tudo para você aprender</h3>
            <p>São aulas, exercícios e arquivos pra download</p>
            <a href="#" className="btnCard">
              <img src="/button.svg" alt="Botão" />
            </a>
          </li>
          <li className="card" data-aos="fade-down">
            <img
              src="/icone-2.svg"
              alt="Nenhuma dúvida sem resposta"
              className="icon"
            />
            <h3>Nada de dúvida sem resposta</h3>
            <p>Através do fórum fale direto com o professor</p>
            <a href="#" className="btnCard">
              <img src="/button.svg" alt="Botão" />
            </a>
          </li>
          <li className="card" data-aos="fade-up">
            <img
              src="/icone-3.svg"
              alt="Didática que te faz aprender"
              className="icon"
            />
            <h3>Didática que te faz aprender</h3>
            <p>Temos um extremo cuidado didático</p>
            <a href="#" className="btnCard">
              <img src="/button.svg" alt="Botão" />
            </a>
          </li>
          <li className="card" data-aos="fade-down">
            <img
              src="/icone-4.svg"
              alt="Estudar online é a melhor opção"
              className="icon"
            />
            <h3>Estudar online é a melhor opção</h3>
            <p>Toda aula uma música nova pra você praticar</p>
            <a href="#" className="btnCard">
              <img src="/button.svg" alt="Botão" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
