'use client'

import axios from "axios"
import { useEffect, useState } from "react"

function Usuarios() {
    const[usuarios, alteraUsuarios] = useState ([])

    async function buscaUsuarios() {
            const response = await axios.get("http://localhost:3001/api/usuarios")
            console.log(response)
            alteraUsuarios(response.data)
    }
    useEffect(()=>{
        buscaUsuarios()
    }, [])

    return (
        <div className="px-20">
            <h1 className="p-10 mb-10 text-indigo-700 bg-indigo-200 text-2xl text-center">Usuários</h1>
            <p>Estes são os usuários do backend:</p>
            <hr/>
            {usuarios.map(i=> <p>{i.nome} Idade: {i.idade}</p>)}
            
        </div>
    );
}

export default Usuarios;