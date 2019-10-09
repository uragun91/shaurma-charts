import './styles/shaurma.css'
import { ShaurmaCharts } from './models/ShaurmaCharts'

const wrapper: HTMLElement = document.getElementById('charts-wrapper')
const shaurma: ShaurmaCharts = new ShaurmaCharts(wrapper)