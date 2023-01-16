import { useState } from "react";
import { newsletterActive } from "../../services/toast";
import { FormSDivStyled } from "./style";

const Form = () => {
  const [userInfo, setUserInfo] = useState("");
  const [emailInfo, setEmailInfo] = useState("");
  const [errorOn, setErrorOn] = useState(false);

  const test = (event: any) => {
    event.preventDefault();
    if (userInfo === "" || emailInfo === "") {
      setErrorOn(true);
    }
    else{
      setErrorOn(false)
      setEmailInfo('')
      setUserInfo('')
      newsletterActive()
    }
  };

  return (
    <FormSDivStyled>
      <h2>Assine Nosso Newsletter</h2>
      <form onSubmit={test}>
        <div>
          <input
            type="text"
            placeholder="Digite seu nome..."
            onChange={(event) => setUserInfo(event.target.value)}
            value={userInfo}
          />
          {errorOn && <span>Digite um nome valido</span>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Digite seu email..."
            onChange={(event) => setEmailInfo(event.target.value)}
            value={emailInfo}
          />
          {errorOn && <span>Digite um email valido</span>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </FormSDivStyled>
  );
};

export default Form;
