import Stack from "react-bootstrap/esm/Stack";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


export function Footer () {
    return(
        <Stack 
            className="d-flex flex-row justify-content-between align-content-center p-5 bg-light"
        >
            <a href="#home" className="text-dark list-group-item">Cadufc</a>
            <p>fernandes.cadu@gmail.com</p>
            <div className='social-icon '>
                <a href='https://github.com/Cadufc91'><AiFillGithub size={30} className={'text-dark link-secondary'}/></a>
                <a href='https://www.linkedin.com/in/carloseduardo-fernandes/'><AiFillLinkedin size={30} className={'text-dark link-secondary'}/></a>
            </div>
        </Stack>
    )
}

export default Footer;