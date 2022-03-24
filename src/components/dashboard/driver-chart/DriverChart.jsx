import React, { Component } from 'react'

import './DriverChart.css'

import CanvasJSReact from '../../../static/assets/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

class DriverChart extends Component {
  render() {
    const options = {
      head: '',
      tite: {
        text: ''
      },
      backgroundColor: '#b9c4cb',
      height: 250,
      width: 450,
      colorSet: ['#2F4F4F', '#008080', '#2E8B57', '#3CB371', '#90EE90'],
      animationEnabled: true,
      data: [
        {
          type: 'column',
          dataPoints: [
            { label: 'Driver 1', y: 55, color: '#707070' },
            { label: 'Driver 2', y: 50, color: '#707070' },
            { label: 'Driver 3', y: 45, color: '#707070' },
            { label: 'Driver 4', y: 35, color: '#707070' },
            { label: 'Driver 5', y: 30, color: '#707070' },
            { label: 'Driver 6', y: 25, color: '#707070' },
            { label: 'Driver 7', y: 20, color: '#707070' },
            { label: 'Driver 8', y: 15, color: '#707070' },
            { label: 'Driver 9', y: 10, color: '#707070' },
            { label: 'Driver 10', y: 5, color: '#707070' }
          ]
        }
      ]
    }

    return (
      <div className='driver-chart-wrapper'>
        <CanvasJSChart options={options} />
      </div>
    )
  }
}

export default DriverChart
