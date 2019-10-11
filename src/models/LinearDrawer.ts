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
    private height: number,
    private left: number,
    private right: number
  ) {}

  addChart(chart: LinearChart) {
    this.linearCharts.push(chart)
    this.drawAll()
  }

  updateBorders(left: number, right: number) {
    this.left = left
    this.right = right
    this.drawAll()
  }

  private drawAll() {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.xMin = Math.min(...this.linearCharts.map((chart: LinearChart) => Math.min(...chart.points.map(val => val.x))))
    this.yMin = Math.min(...this.linearCharts.map((chart: LinearChart) => Math.min(...chart.points.map(val => val.y))))

    this.xMax = Math.max(...this.linearCharts.map((chart: LinearChart) => Math.max(...chart.points.map(val => val.x))))
    this.yMax = Math.max(...this.linearCharts.map((chart: LinearChart) => Math.max(...chart.points.map(val => val.y))))

    const pointsLength = Math.abs(this.xMax - this.xMin)

    const frameXMin = this.left / this.width * pointsLength
    const frameXMax = this.right / this.width * pointsLength
    this.coefX = this.width / Math.abs(frameXMax - frameXMin)
    this.coefY = this.height / Math.abs(this.yMax - this.yMin)
    this.linearCharts.forEach((ch: LinearChart) => {
      ch.xMin = this.xMin + frameXMin
      ch.yMin = this.yMin
      ch.coefX = this.coefX
      ch.coefY = this.coefY

      ch.draw(this.ctx)
    })
  }
}