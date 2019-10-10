import { LinearChart } from "./LinearChart";

export class LinearDrawer {
  public linearCharts: LinearChart[] = []

  public xMin: number
  public yMin: number
  public xMax: number
  public yMax: number

  private coefX: number
  private coefY: number

  constructor(
    private ctx: CanvasRenderingContext2D,
    private width: number,
    private height: number
  ) {}

  addChart(chart: LinearChart) {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.linearCharts.push(chart)

    this.xMin = Math.min(...this.linearCharts.map((chart: LinearChart) => Math.min(...chart.points.map(val => val.x))))
    this.yMin = Math.min(...this.linearCharts.map((chart: LinearChart) => Math.min(...chart.points.map(val => val.y))))

    this.xMax = Math.max(...this.linearCharts.map((chart: LinearChart) => Math.max(...chart.points.map(val => val.x))))
    this.yMax = Math.max(...this.linearCharts.map((chart: LinearChart) => Math.max(...chart.points.map(val => val.y))))

    this.coefX = this.width / Math.abs(this.xMax - this.xMin)
    this.coefY = this.height / Math.abs(this.yMax - this.yMin)
    this.linearCharts.forEach((ch: LinearChart) => {
      ch.xMin = this.xMin
      ch.yMin = this.yMin
      ch.coefX = this.coefX
      ch.coefY = this.coefY

      ch.draw(this.ctx)
    })
  }
}