import { useState } from "react";
import Icon from "../../../assets/img/pokeIcon.png";
import { pokeChoose } from "../../../services/toast";
import { ButtonStyled } from "../../../styles/button";

interface iCardProps {
  name?: string;
  url?: string;
  slideCard?: boolean;
  setOn: React.Dispatch<React.SetStateAction<boolean>>,
  on:boolean
}

const Card = ({ name, url, slideCard,setOn,on }: iCardProps) => {

  const [ choosen, setChoosen ] = useState(false)
 
  const img = url?.slice(34, -1);
  const gif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${img}.gif`;
   

   const choose = (id ?: string)=>{
      if(id === img){
        setOn(!on)
        setChoosen(!choosen)
        pokeChoose()
      }
   }
  return (
    <li key={img}>
      {!slideCard ? (
        <>
          <img src={gif} alt={name} />
          <h2>{name}</h2>
          {on && <ButtonStyled onClick={() => choose(img)}  on={on}>Escolher!</ButtonStyled>}
          {choosen ? <ButtonStyled onClick={() => choose(img)} disabled={!on} on={choosen}>Escolhido!</ButtonStyled> : 
          !on && <ButtonStyled onClick={() => choose(img)}  on={on} disabled={!on}>Não foi esse.</ButtonStyled>}
          <img className="icon" src={Icon} alt="icone" />
        </>
      ) : (
        <>
          <img src={gif} alt={name} />
          <div>
            <h2>{name}</h2>
            <img className="icon" src={Icon} alt="icone" />
          </div>
        </>
      )}
    </li>
  );
};

export default Card;
