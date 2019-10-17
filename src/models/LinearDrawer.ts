import { LinearChart } from "./LinearChart";
import { Animation } from "./Animation";

export class LinearDrawer {
  public linearCharts: LinearChart[] = []

  public xMin: number
  public yMin: number
  public xMax: number
  public yMax: number

  private coefX: number
  private coefY: number

  private frameXMin: number
  private frameXMax: number

  private yMaxAnimation: Animation = null
  private yMinAnimation: Animation = null

  constructor(
    private ctx: CanvasRenderingContext2D,
    private width: number,
    private height: number,
    private left: number,
    private right: number
  ) { }

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
    // x
    this.xMin = Math.min(...this.linearCharts.map((chart: LinearChart) => Math.min(...chart.points.map(val => val.x))))
    this.xMax = Math.max(...this.linearCharts.map((chart: LinearChart) => Math.max(...chart.points.map(val => val.x))))
    const pointsXAxisLength = Math.abs(this.xMax - this.xMin)

    this.frameXMin = this.xMin + this.left / this.width * pointsXAxisLength
    this.frameXMax = this.xMin + this.right / this.width * pointsXAxisLength

    this.coefX = this.width / Math.abs(this.frameXMax - this.frameXMin)

    // y
    const stripedChartsPoints: IPoint[][] = this.linearCharts.map((chart: LinearChart) => {
      const filtered: IPoint[] = []

      chart.points.reduce(
        (prevPoint: IPoint, currPoint: IPoint) => {
          if (currPoint.x >= this.frameXMin && currPoint.x <= this.frameXMax) {
            filtered.push(currPoint)
          } else if (prevPoint && currPoint.x - prevPoint.x >= this.frameXMax - this.frameXMin) {
            // this is for the case when frame borders are between 2 points. We just push those points
            filtered.push(prevPoint)
            filtered.push(currPoint)
          }
          return currPoint
        },
        null
      )

      return filtered
    })

    const yMin = Math.min(...stripedChartsPoints.map((points: IPoint[]) => Math.min(...points.map(val => val.y))))
    const yMax = Math.max(...stripedChartsPoints.map((points: IPoint[]) => Math.max(...points.map(val => val.y))))

    if (typeof this.yMin === 'undefined') this.yMin = yMin
    if (typeof this.yMax === 'undefined') this.yMax = yMax

    if (!this.yMinAnimation) {
      this.yMinAnimation = new Animation(this.yMin, yMin, 150, (currentYMin: number) => {
        this.yMin = currentYMin
        this.coefY = this.height / Math.abs(this.yMax - this.yMin)
        drawCharts()
      })
      this.yMinAnimation.tick().then(() => {
        this.yMinAnimation = null
      })
    }

    if (!this.yMaxAnimation) {
      this.yMaxAnimation = new Animation(this.yMax, yMax, 150, (currentYMax: number) => {
        this.yMax = currentYMax
        this.coefY = this.height / Math.abs(this.yMax - this.yMin)
        drawCharts()
      })
      this.yMaxAnimation.tick().then(() => {
        this.yMaxAnimation = null
      })
    }


    const drawCharts = () => {
      this.ctx.clearRect(0, 0, this.width, this.height)
      this.linearCharts.forEach((ch: LinearChart) => {
        ch.xMin = this.frameXMin
        ch.yMin = this.yMin
        ch.coefX = this.coefX
        ch.coefY = this.coefY

        ch.draw(this.ctx)
      })
    }


  }
}