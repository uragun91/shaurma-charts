export class LinearChart implements IDrawableObject {

  private opacity: number = 1
  public coefX: number
  public coefY: number
  public xMin: number
  public yMin: number

  constructor(
    public points: {x: number, y: number}[],
    private color: string = 'green'
  ) {}

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath()
    ctx.strokeStyle = this.color
    this.points.forEach((point: {x: number, y: number}, index: number) => {
      const x = (point.x - this.xMin) * this.coefX
      const y = (point.y - this.yMin) * this.coefY
      // draw
      index !== 0 ? ctx.lineTo(x, y) : ctx.moveTo(x, y)
    })
    ctx.stroke()
  }
}