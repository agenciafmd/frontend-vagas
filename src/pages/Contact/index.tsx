import { IoLogoWhatsapp, } from 'react-icons/io5';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { Container } from './styles';

const Contact = () => {
  return (
    <Container>
      <div className='content'>
        <h1>Contact</h1>
        <div className='icons'>
          <p>+ 1 (00)0 0000-0000</p>
          <IoLogoWhatsapp size={50} />
          <AiOutlineLinkedin size={50} />
          <AiOutlineFacebook size={50} />
          <AiOutlineInstagram size={50} />
        </div>
      </div>
    </Container>
  );
};

export default Contact;


