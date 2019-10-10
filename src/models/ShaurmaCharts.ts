import { LinearChart } from "./LinearChart";

export class ShaurmaCharts {
  private readonly chartsCanvasId = 'shaurma-charts-charts-canvas'
  private readonly frameCanvasId = 'shaurma-charts-frame-canvas'
  private chartsCtx: CanvasRenderingContext2D
  private frameCtx: CanvasRenderingContext2D

  private mousedownEventTarget: HTMLElement = null

  private readonly leftCurtain: HTMLElement
  private readonly rightCurtain: HTMLElement
  private readonly frame: HTMLElement
  private readonly frameParent: HTMLElement

  private left: number
  private right: number

  private drawableObjects: IDrawableObject[] = []

  private defaults: IShaurmaOptions = {
    width: 500,
    height: 300
  }
  private options: IShaurmaOptions = {} as IShaurmaOptions

  constructor(
    private wrapperElement: HTMLElement,
    options?: Partial<IShaurmaOptions>
  ) {
    for (const key of Object.keys(this.defaults)) {
      this.options[key] = options ? options[key] || this.defaults[key] : this.defaults[key]
    }

    wrapperElement.innerHTML = `
      <div class="shaurma-charts-charts-wrapper">
        <canvas id="${this.chartsCanvasId}" width="${this.options.width}" height="${this.options.height}"></canvas>
      </div>
      <div class="shaurma-charts-frame-editor">
        <div class="shaurma-charts-frame-wrapper">
          <div class="shaurma-charts-frame">
            <div class="shaurma-charts-frame-left-control"></div>
            <div class="shaurma-charts-frame-right-control"></div>
          </div>
        </div>
        <canvas id="${this.frameCanvasId}" width="${this.options.width}" height="100"></canvas>
      </div>
    `
    const chartsElement: HTMLCanvasElement = document.getElementById(this.chartsCanvasId) as HTMLCanvasElement
    this.chartsCtx = chartsElement.getContext('2d')
    const frameElement: HTMLCanvasElement = document.getElementById(this.frameCanvasId) as HTMLCanvasElement
    this.frameCtx = frameElement.getContext('2d')

    this.leftCurtain = document.querySelector('.shaurma-charts-frame-left-control')
    this.rightCurtain = document.querySelector('.shaurma-charts-frame-right-control')
    this.frame = document.querySelector('.shaurma-charts-frame')
    this.frameParent = document.querySelector('.shaurma-charts-frame-wrapper')

    this.frame.style.left = '50px'
    this.frame.style.width = '25%'
    this.calculateEdges()

    this.chartsCtx.translate(0, this.options.height)
    this.chartsCtx.scale(1, -1)

    document.addEventListener('mousedown', (event: MouseEvent) => {
      this.mousedownEventTarget = event.target as HTMLElement
    })

    document.addEventListener('mouseup', () => {
      this.mousedownEventTarget = null
    })

    document.addEventListener('mousemove', (event: MouseEvent) => {
      let button: number = event.buttons
      if (typeof button !== 'undefined') {
        button = event.buttons
      } else {
        button = 0
      }

      const parentWidth = this.frameParent.getBoundingClientRect().width

      if (button === 1) { // lmb
        if (this.mousedownEventTarget) {
          const oldFrameLeftPosition = this.frame.offsetLeft
          const oldFrameWidth = this.frame.getBoundingClientRect().width
          const oldFrameRightPosition = oldFrameLeftPosition + oldFrameWidth

          let newFrameLeftPosition
          let newFrameWidth

          if (this.mousedownEventTarget === this.leftCurtain) {
            newFrameLeftPosition = Math.min(Math.max(0, oldFrameLeftPosition + event.movementX), oldFrameRightPosition)
            newFrameWidth = oldFrameWidth + (oldFrameLeftPosition - newFrameLeftPosition)
          } else if (this.mousedownEventTarget === this.rightCurtain) {
            newFrameLeftPosition = oldFrameLeftPosition
            newFrameWidth = Math.max(0, oldFrameWidth + event.movementX)
            newFrameWidth = Math.min(newFrameWidth, parentWidth - newFrameLeftPosition)
          } else if (this.mousedownEventTarget === this.frame) {
            newFrameWidth = oldFrameWidth
            newFrameLeftPosition = Math.min(Math.max(0, oldFrameLeftPosition + event.movementX), parentWidth - newFrameWidth)
          }

          this.frame.style.left = `${newFrameLeftPosition}px`
          this.frame.style.width = `${newFrameWidth}px`

          this.calculateEdges()
        }
      } else {
        this.mousedownEventTarget = null // detach the element. This is for the case when we made mouseup outside the document (e.g. browser window)
      }
    })

  }

  public draw(): void {
    for (const drawableObj of this.drawableObjects) {
      drawableObj.draw(this.frameCtx)
    }
    window.requestAnimationFrame(this.draw)
  }

  public addChart(points: {x: number, y: number}[], color: string) {
    const chart = new LinearChart(points, color, 500, 300)
    this.drawableObjects.push(chart)
    chart.draw(this.chartsCtx)
  }

  private calculateEdges(): void {
    this.left = this.frame.offsetLeft
    this.right = this.frame.offsetLeft + this.frame.clientWidth
  }
}