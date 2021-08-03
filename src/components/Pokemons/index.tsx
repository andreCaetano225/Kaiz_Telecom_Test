import { PokemonsD} from "./styles";

interface PropsPokemons{
    image: string;
    name: string;
    type: string;
}

export function Pokemons ({image, name, type}: PropsPokemons) {
    const style = `poke ${type}`
    return(
        <PokemonsD>
            <img src={image} alt="" />
            <div>
            <h1>{name}</h1>
            <span className={style}>
            <p>{type}</p>
            </span>
            </div>
        </PokemonsD>
    )
}