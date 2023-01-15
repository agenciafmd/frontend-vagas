import Icon from "../../../assets/img/pokeIcon.png"

interface iCardProps{
    name?: string,
    url?: string
}

const Card = ({name, url} : iCardProps) => {

    const img = url?.slice(34,-1)
    const gif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${img}.gif`
    
    return ( 
        <li key={img}>
             <img src={gif} alt={name} />
             <h2>{name}</h2>
             <button>Escolher!</button>
             <img className="icon"  src={Icon} alt="icone" />
        </li>
    )
}

export default Card 