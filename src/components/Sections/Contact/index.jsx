import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "@mui/material/Modal";

import "./styles.scss";

export default function Contact() {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false);

  const validationForm = yup.object().shape({
    name: yup.string().required("O campo nome é obrigatório."),
    email: yup.string().required("O campo e-mail é obrigatório."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationForm),
  });

  const onSubmit = (data) => {
    //console.log(data);
    setOpenModal(true);
  };

  return (
    <section className="Contact" id="contact">
      <div className="container">
        <h2>Entre em contato conosco agora!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input type="text" placeholder="Nome" name="name" {...register("name")} />
            <p className="error">{errors.name?.message}</p>
          </div>
          <div>
            <input type="text" placeholder="E-mail" name="email" {...register("email")} />
            <p className="error">{errors.email?.message}</p>
          </div>
          <button type="submit">
            <img src="/submit.svg" alt="Icone Enviar" />
          </button>
        </form>
      </div>

      <Modal open={openModal} onClose={handleClose}>
        <div className="bgModal">
          <img src="/icone-sucesso.svg" alt="icone Sucesso" />
          <h3>Sucesso!</h3>
          <p>Sua inscrição foi realizada e em breve você começará a receber nossas notícias.</p>
        </div>
      </Modal>
    </section>
  );
}
