import React, { Component } from 'react'
import { Chart } from 'primereact/chart'

export default class Grafico extends Component {
  prepararDadosDoGrafico() {
    const { dados } = this.props

    const contagemPorEstado = dados.reduce((contador, item) => {
      const estado = item.uf
      if (!contador[estado]) {
        contador[estado] = 0
      }
      contador[estado]++
      return contador
    }, {})

    const nomesDosEstados = Object.keys(contagemPorEstado)
    const totalDeBuscas = Object.values(contagemPorEstado).reduce((soma, valor) => soma + valor, 0)
    const quantidadePorEstado = Object.values(contagemPorEstado)
    const porcentagens = quantidadePorEstado.map(qtd => ((qtd / totalDeBuscas) * 100).toFixed(1))

    const dadosDoGrafico = {
      labels: nomesDosEstados.map((estado, i) => `${estado} (${porcentagens[i]}%)`),
      datasets: [
        {
          data: quantidadePorEstado,
          backgroundColor: [
            '#00BFFF', '#7CFC00', '#FF69B4', '#9370DB', '#20B2AA',
            '#FFD700', '#FF4500', '#ADFF2F', '#00CED1', '#FF6347',
            '#00FF7F', '#BA55D3', '#FF8C00', '#48D1CC', '#C71585',
            '#F0E68C', '#DC143C', '#40E0D0', '#FF00FF', '#1E90FF',
            '#32CD32', '#8A2BE2', '#FF1493', '#B0C4DE', '#228B22',
            '#DA70D6', '#87CEFA'
          ],
          hoverBackgroundColor: [
            '#1E90FF', '#ADFF2F', '#FF85B3', '#B39DDB', '#40E0D0',
            '#FFE066', '#FF6347', '#BFFF00', '#40E0D0', '#FF7F50',
            '#66FFB2', '#DDA0DD', '#FFA500', '#76EEC6', '#DB7093',
            '#FAFAD2', '#FF3030', '#5F9EA0', '#EE82EE', '#63B8FF',
            '#7FFF00', '#9A32CD', '#FF69B4', '#B0E0E6', '#2E8B57',
            '#EE82EE', '#B0E2FF'
          ]
        }
      ]
    }

    const opcoesDoGrafico = {
      plugins: {
        legend: {
          position: 'right'
        }
      }
    }

    return { dadosDoGrafico, opcoesDoGrafico }
  }

  render() {
    const { dadosDoGrafico, opcoesDoGrafico } = this.prepararDadosDoGrafico();

    return (
      <div className="w-full md:w-30rem mx-auto mt-4">
        <Chart type="pie" data={dadosDoGrafico} options={opcoesDoGrafico} />
      </div>
    )
  }
}
