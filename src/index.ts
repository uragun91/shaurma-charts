import './styles/shaurma.css'
import { ShaurmaCharts } from './models/ShaurmaCharts'

const data = require('./data.json')
console.log(data)

const wrapper: HTMLElement = document.getElementById('charts-wrapper')
const shaurma: ShaurmaCharts = new ShaurmaCharts(wrapper)
shaurma.addChart(data.points, 'blue')
