import React from 'react'
import Busca from './Busca'
import LocalidadeLista from './LocalidadeLista'
import viaCep from '../util/viaCep'


class App extends React.Component {

  onBuscaRealizada = (cep) => {
  if(cep.trim()===""){
    alert("O campo deve ser preenchido")
    return
  }
  else{
  viaCep.get(`${cep}/json`)
  .then((response) => {
      const dados = response.data; 
      if(dados.erro){
          alert("O cep não foi encontrado")
          return
      }
      else{
          console.log(dados);
          alert("Funcionou")
      }
  })
  .catch((erro) => {
      alert("Insira somente os 8 numeros do cep")
      console.error('Erro ao buscar CEP:', erro); 
  }); 
}
};

  render() {
    return (
      <div className='container mt-4'>
        <div className="mb-4">
          <Busca
            onBuscaRealizada={this.onBuscaRealizada} 
          />
          <br/>
          <LocalidadeLista/>
        </div>
      </div>
    )
  }
}

export default App