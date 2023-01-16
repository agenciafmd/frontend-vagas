import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { Container } from './styles';

const Contact = () => {
  return (
    <Container>
      <div className='content'>
        <h1>Contact</h1>
        <div className='fone-icons'>
          <p>+ 55 (00)0 0000-0000</p>
          <div className="icons">
            <IoLogoWhatsapp size={50} />
            <AiOutlineLinkedin size={50} />
            <AiOutlineFacebook size={50} />
            <AiOutlineInstagram size={50} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;


