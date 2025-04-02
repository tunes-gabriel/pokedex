'use client'
import axios from "axios";
import { useEffect, useState } from "react";

function Listagem() {

    const [pokemons,alteraPokemons] = useState([])

    async function buscaTodosPokemons(){
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
        alteraPokemons(response.data.results)

    }
 useEffect(()=> { buscaTodosPokemons()}, [])

    return ( 
        <div>

        <h1 className="p-10 mb-10 text-indigo-700 bg-indigo-200 text-2xl text-center">Pokédex</h1>

        <div className="px-20"> 

        <hr/>
        <br/>
        {
            pokemons.length > 0 ?
        <ul>

            {
                pokemons.map((i, index)=>
            <li className="flex-wrap items-center gap-4">
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/"+(index+1)+".gif"}/>
                <p><strong>{index+1}</strong><br/>{i.name}</p>
                

            </li>
                
                )
            }


        </ul>
        :
        <p>carregando...</p>

        }
        </div>

        </div>


     );
    }
export default Listagem;