import Icon from "../../../assets/img/pokeIcon.png";

interface iCardProps {
  name?: string;
  url?: string;
  slideCard?: boolean;
}

const Card = ({ name, url, slideCard }: iCardProps) => {
  const img = url?.slice(34, -1);
  const gif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${img}.gif`;

  return (
    <li key={img}>
      {!slideCard ? (
        <>
          <img src={gif} alt={name} />
          <h2>{name}</h2>
          <button>Escolher!</button>
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
