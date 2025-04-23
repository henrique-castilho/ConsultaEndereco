//rcc
import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from "primereact/button"

export class Busca extends Component {
    state = {
        termoDeBusca: ''
    }

    onTermoAlterado = (event) => {
        this.setState({
            termoDeBusca: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className='flex flex-column w-20rem'>
                    <InputText
                        className='mb-2 w-full text-center' 
                        placeholder={this.props.dica}
                        maxLength={8}
                        onChange={this.onTermoAlterado}
                        value={this.state.termoDeBusca}
                    />
                    <Button
                        className='w-full'
                        label='OK'
                        outlined
                    />
                </div>
            </form>

        )
    }
}

Busca.defaultProps = {
    dica: "Digite um CEP"
}

export default Busca