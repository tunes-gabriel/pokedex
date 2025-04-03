'use client'

import axios from "axios"
import { useEffect, useState } from "react"

function Produtos() {
    const [produtos, alteraProdutos] = useState([])

    async function buscaProdutos() {
        const response = await axios.get("http://localhost:3001/api/produtos")
        console.log(response)
        alteraProdutos(response.data)
    }

    useEffect(() => {
        buscaProdutos()
    }, [])

    return (
        <div className="px-20">
            <h1 className="p-10 mb-10 text-teal-700 bg-teal-200 text-2xl text-center">Produtos</h1>
            <p>Estes são os produtos:</p>
            <hr />
            <div className="p-5">
                {
                    produtos.length > 0 &&
                     produtos.map(i => <p className="p-5 border-2 m-3 border-teal-800 rounded-xl bg-teal-50"> <strong>{i.nome}</strong> - R$ {i.preco.toFixed(2)} <br /><span className="text-teal-600"> Quantidade em estoque: <strong>{i.quantidade}</strong>  </span> </p>) 
                }
            </div>



        </div>
    );
}

export default Produtos;