import React from 'react'
import Busca from './Busca'
import LocalidadeLista from './LocalidadeLista'

class App extends React.Component {

  onBuscaRealizada = (termoDigitado) => {
    alert(termoDigitado)
  }

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