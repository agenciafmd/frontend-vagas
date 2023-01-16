import { useState } from "react";
import CloseBtn from "../../assets/img/Closed.svg";
import Logo from "../../assets/img/pokeLogo.png";
import { HeaderStyled } from "./styles";

const Header = () => {
  const [menuOn, setMenuOn] = useState(false);
  
  return (
    <HeaderStyled>
      <div>
          <img className="logo" src={Logo} alt="" />

          {!menuOn ? (
            <div>
              <img
                className="menu-btn"
                src={CloseBtn}
                alt="Menu de Opções"
                onClick={() => setMenuOn(true)}
              />
              <div className="link-div">
                <a href="#choosen">Escolha Seu Inicial!</a>
                <a href="#pokedex">Pokedex</a>
                <a href="#footer">Sobre</a>
              </div>
            </div>
          ) : (
            <div className="menu">
              <button onClick={() => setMenuOn(false)}>X</button>
              <a href="#choosen">Escolha Seu Inicial!</a>
              <a href="#pokedex">Pokedex</a>
              <a href="#footer">Sobre</a>
            </div>
          )}
      </div>
    </HeaderStyled>
  );
};

export default Header;
