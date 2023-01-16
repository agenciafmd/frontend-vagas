import React from "react";
import { Container } from "./styles";
import { useRef } from "react";
import emailjs from "emailjs-com";

export const Newslatter = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_gqyv51j",
      "template_ncgzvvb",
      form.current,
      "GgxQI2Ka5RIwDYAAR"
    );
    e.target.reset();
  };
  return (
    <Container id="Newslatter">
      <h1>Assine nossa newslatter</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input type="email" name="email" placeholder="Seu Email" required />
        <button type="submit">Assinar</button>
      </form>
    </Container>
  );
};