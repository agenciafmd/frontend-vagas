import { FooterStyled } from "./style";
import Logo from "../../assets/img/pokeLogo.png";

const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <img src={Logo} alt="logo" />
        <p>poke@mail.com</p>
        <p>9 9999-0909</p>
      </div>
    </FooterStyled>
  );
};

export default Footer;
