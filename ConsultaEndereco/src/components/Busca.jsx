//rcc
import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from "primereact/button"
import viaCep from '../util/viaCep'


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

        if (this.state.termoDeBusca === "") {
            alert("O campo deve ser preenchido")
            return
        }

        if (this.state.termoDeBusca.length !== 8) {
            alert('Por favor, digite um CEP válido com 8 dígitos.')
            return
        }

        viaCep.get(`${this.state.termoDeBusca}/json`)
            .then((response) => {
                const dados = response.data

                if (dados.erro) {
                    alert("O CEP não foi encontrado")
                    return
                }

                this.props.onBuscaRealizada(dados)

                console.log(dados)
            })
            .catch((erro) => {
                alert("Erro ao buscar o CEP. Verifique sua conexão ou tente novamente mais tarde.")
                console.error('Erro ao buscar CEP:', erro)
            })
    }

    somenteNumeros = (event) => {
        const asciiNumeros = event.charCode;
        if (asciiNumeros < 48 || asciiNumeros > 57) {
            event.preventDefault()
        }
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className='flex flex-column w-20rem'>
                    <InputText
                        className='mb-2 w-full text-center'
                        placeholder={this.props.dica}
                        maxLength={8}
                        onKeyPress={this.somenteNumeros}
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