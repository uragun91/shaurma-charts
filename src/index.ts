import './styles/shaurma.css'
import { ShaurmaCharts } from './models/ShaurmaCharts'

const data1 = require('./data1.json')
const data2 = require('./data2.json')

const wrapper: HTMLElement = document.getElementById('charts-wrapper')
const shaurma: ShaurmaCharts = new ShaurmaCharts(wrapper, { width: 700 })

shaurma.addChart(data1.points, 'blue')
shaurma.addChart(data2.points, 'red')
