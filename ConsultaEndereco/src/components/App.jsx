import React from 'react'
import Busca from './Busca'


class App extends React.Component {

  onBuscaRealizada = (termoDigitado) => {
    alert(termoDigitado)
  }

  render() {
    return (
      <div className='container mt-4'>
        <div className="mb-4">
          <Busca
            onBuscaRealizada={this.onBuscaRealizada} />
        </div>
      </div>
    )
  }
}

export default App