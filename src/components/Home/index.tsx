import {Container, Content} from './styles';
import LogoImg from '../../assets/logo.png';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import DefaultImg from '../../assets/default.png';

interface RandomPokemon {
    id: number;
    name: string;
    sprites: {
        other : {
            dream_world: {
                front_default : string;
            }
        }
    }
}
export function Home (){
    const [randomPokemon,setRandomPokemon] = useState<RandomPokemon | null>(null);
    const [pokemon,setPokemon] = useState(0);
    const [text,setText] = useState('Click on "Get a random pokémon"');



    function handleClick(){
        setPokemon( Math.floor((Math.random() * 100) + 1) )
       
       if(randomPokemon === null){
        setText('');
       }
    }

     useEffect(() => {
        api.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => setRandomPokemon(response.data))
        
    }, [pokemon] )
   
   
    
    return(
        <>
          <Container>
              <img src={LogoImg} alt="logoPokemon" /> <br />

              <button type="button" onClick={handleClick}>
              Get a random pokémon
              </button>
              <Content>
                <h2 className={text ? 'text' : 'Notext'}>{text}</h2>

                {randomPokemon && (
                    <div>
                     <img src={randomPokemon.sprites.other.dream_world.front_default} alt="imagem do pokemon" />
                     <h3> {randomPokemon.name}</h3>
                    </div>
                )}

              </Content>
  

          </Container>
        </>
    )
}