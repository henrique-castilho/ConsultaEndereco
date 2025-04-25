import React, { Component } from 'react'
import { Card } from 'primereact/card'

export default class LocalidadeLista extends Component {
    render() {
        const { dados } = this.props
        
        return (
            <div className='flex flex-column gap-3'>
                {dados.map((dados, index) => (
                <Card key={index} className='w-20rem text-center border-2 border-round-md p-3'>
                    <p>{dados.cep}</p>
                    <p>{dados.logradouro}</p>
                    <p>{dados.bairro}</p>
                    <p>{dados.localidade} - {dados.uf}</p>
                </Card>
                ))}
            </div>
        );
    }
}
