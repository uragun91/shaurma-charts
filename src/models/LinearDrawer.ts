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

    // x
    this.xMin = Math.min(...this.linearCharts.map((chart: LinearChart) => Math.min(...chart.points.map(val => val.x))))
    this.xMax = Math.max(...this.linearCharts.map((chart: LinearChart) => Math.max(...chart.points.map(val => val.x))))
    const pointsXAxisLength = Math.abs(this.xMax - this.xMin)

    const frameXMin = this.xMin + this.left / this.width * pointsXAxisLength
    const frameXMax = this.xMin + this.right / this.width * pointsXAxisLength


    // y
    const stripedChartsPoints: IPoint[][] = this.linearCharts.map((chart: LinearChart) => {
      const filtered: IPoint[] = []

      chart.points.reduce(
        (prevPoint: IPoint, currPoint: IPoint) => {
          if (currPoint.x >= frameXMin && currPoint.x <= frameXMax) {
            filtered.push(currPoint)
          } else if (prevPoint && currPoint.x - prevPoint.x >= frameXMax - frameXMin) {
            filtered.push(currPoint)
          }
          return currPoint
        },
        null
      )

      return filtered
    })
    this.yMin = Math.min(...stripedChartsPoints.map((points: IPoint[]) => Math.min(...points.map(val => val.y))))
    this.yMax = Math.max(...stripedChartsPoints.map((points: IPoint[]) => Math.max(...points.map(val => val.y))))


    this.coefX = this.width / Math.abs(frameXMax - frameXMin)
    this.coefY = this.height / Math.abs(this.yMax - this.yMin)
    this.linearCharts.forEach((ch: LinearChart) => {
      ch.xMin = frameXMin
      ch.yMin = this.yMin
      ch.coefX = this.coefX
      ch.coefY = this.coefY

      ch.draw(this.ctx)
    })
  }
}