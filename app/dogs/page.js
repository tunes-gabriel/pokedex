'use client'

import axios from "axios";
import { useEffect, useState } from "react";

function Dogs() {

    const [ dogs, setDogs ] = useState([])
    const [ breeds, setBreeds ] = useState([])

    async function searchAllDogs(){
        const response = await axios.get("https://dog.ceo/api/breeds/image/random/30")
        setDogs( response.data.message )
    }   

    async function searchBreeds( breed ){
        const response = await axios.get("https://dog.ceo/api/breed/"+breed+"/images")
        setDogs( response.data.message )
    }
    
    async function searchAllBreeds( ){
        const response = await axios.get("https://dog.ceo/api/breeds/list/all")
        setBreeds(Object.keys(response.data.message))
    }


    useEffect(()=> {
        searchAllDogs()
        searchAllBreeds()
    }, [])

    return (
        <div className="px-20">
            
            <h1 className="p-10 mb-10 text-center text-green-700 bg-green-50 text-2xl" >Lista de Doguinhos</h1>
            <p>Os melhores hotdogs estão aqui:</p>

            <hr/>
            <div>
               
                <div className="overflow-x-auto flex">

                    <button onClick={()=> searchAllDogs() } className="bg-green-200 text-green-700 m-3 p-3">Mostrar tudo</button>
                    {
                        breeds.length > 0 && 
                            breeds.map(i =>
                                <button onClick={()=> searchBreeds(i) } className="bg-green-200 text-green-700 m-3 p-3">{i}</button>


                            )
                    
                    }
                    

                </div>



     
                {
                    dogs.length > 0 ?
                        <div className="flex gap-5 flex-wrap" >
                            {
                                dogs.map( i => 
                                    <img src={i} width={150} />
                                )
                            }
                        </div>
                    :
                        <p>Carregando...</p>
                }
            
            </div>
        
        </div>
    );
}


export default Dogs;