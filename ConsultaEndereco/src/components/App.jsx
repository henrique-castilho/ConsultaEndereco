import React from 'react'
import Busca from './Busca'
import LocalidadeLista from './LocalidadeLista'


class App extends React.Component {
  render() {
    return (
      <div className='container mt-4'>
        <div className="mb-4">
          <Busca />
          <br />
          <LocalidadeLista />
        </div>
      </div>
    )
  }
}

export default App