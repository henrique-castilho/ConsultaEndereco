import React from 'react'
import Busca from './Busca'
import LocalidadeLista from './LocalidadeLista'


class App extends React.Component {

  state = {
    resultadoDaBusca: []
  }

  onBuscaRealizada = (dados) => {
    this.setState((prevState) => ({
      resultadoDaBusca: [dados, ...prevState.resultadoDaBusca]
    }))
  }

  render() {
    return (
      <div className='container mt-4'>
        <div className="mb-4">
          <Busca 
            onBuscaRealizada={this.onBuscaRealizada}
          />
          <br />
          <LocalidadeLista
            dados={this.state.resultadoDaBusca}
          />
        </div>
      </div>
    )
  }
}

export default App