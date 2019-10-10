export class LinearChart implements IDrawableObject {

  private opacity: number = 1
  private coefX: number
  private coefY: number
  private xMin: number
  private yMin: number

  constructor(
    private points: {x: number, y: number}[],
    private color: string,
    private width: number,
    private height: number
  ) {
    if (points.length) {
      const xs = points.map((point: {x: number, y: number}) => point.x)
      this.xMin = Math.min(...xs)
      this.coefX = width / Math.abs(Math.max(...xs) - this.xMin)

      const ys = points.map((point: {x: number, y: number}) => point.y)
      this.yMin = Math.min(...ys)
      this.coefY = height / Math.abs(Math.max(...ys) - this.yMin)
    }
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = 'green'
    this.points.forEach((point: {x: number, y: number}, index: number) => {
      const x = (point.x - this.xMin) * this.coefX
      const y = (point.y - this.yMin) * this.coefY
      if (index !== 0) {
        ctx.lineTo(x, y)
      } else {
        ctx.moveTo(x, y)
      }
    })
    ctx.stroke()
  }
}