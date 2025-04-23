import React, { Component } from 'react'
import { Card } from 'primereact/card'

const localidadesFicticias = [
    {
        cep: "04094-050",
        logradouro: "Avenida Pedro Álvares Cabral",
        bairro: "Parque Ibirapuera",
        cidade: 'São Paulo',
        uf: 'SP'
    },
    {
        cep: "55592-970",
        logradouro: "Rua dos Navegantes",
        bairro: "Vila de Porto de Galinhas",
        cidade: 'Ipojuca',
        uf: 'PE'
    }
]
export default class LocalidadeLista extends Component {

    render() {
        return (
            <div className='flex flex-column gap-3'>
                {localidadesFicticias.map((localidadesFicticias, index) => (
                    <Card key={index} className='w-20rem text-center border-2 border-round-md p-3'>
                        <p>{localidadesFicticias.cep}</p>
                        <p>{localidadesFicticias.logradouro}</p>
                        <p>{localidadesFicticias.bairro}</p>
                        <p>{localidadesFicticias.cidade} - {localidadesFicticias.uf}</p>
                    </Card>
                ))}
            </div>
        )
    }
}
