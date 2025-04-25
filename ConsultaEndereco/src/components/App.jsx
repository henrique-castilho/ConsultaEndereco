import React from 'react'
import Busca from './Busca'
import LocalidadeLista from './LocalidadeLista'
import Grafico from './Grafico';

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
      <div className="relative container mt-8">
        
        <div className="mb-6 ml-8">
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
        </div>

        <div className="w-1/2 ml-8">
          <LocalidadeLista dados={this.state.resultadoDaBusca} />
        </div>

        {this.state.resultadoDaBusca.length > 0 && (
          <div className="absolute top-0 w-1/2 p-4" style={{ right: '250px'}}>
            <Grafico dados={this.state.resultadoDaBusca} />
          </div>
        )}
      </div>
    );
  }
}

export default App;