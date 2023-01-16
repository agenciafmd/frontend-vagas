import { FormSDivStyled } from "./style";

const Form = () => {
  return (
    <FormSDivStyled>
      <h2>Assine Nosso Newsletter</h2>
      <form>
        <input type="text" placeholder="Digite seu nome..."/>
        <input type="email" placeholder="Digite seu email..."/>
        <button>Enviar</button>
      </form>
    </FormSDivStyled>
  );
};

export default Form;
