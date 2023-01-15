import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Container } from "./styles";

const Footer = () => {
  return (
    <Container>
      <div className="footer1">
        <h1>Lorem Ipsum</h1>
        <p>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        </p>
      </div>
      <div className="footer2">
        <p>
          © {new Date().getFullYear()} My Site
          <span>daksonc@gmail.com</span>
        </p>
      </div>
      <div className="footer3">
        <div className="icons">
          <IoLogoWhatsapp size={30} />
          <AiOutlineLinkedin size={30} />
          <AiOutlineFacebook size={30} />
          <AiOutlineInstagram size={30} />
        </div>
        <h3>+55 (00)0 0000-0000</h3>
      </div>
    </Container>
  );
};

export default Footer;