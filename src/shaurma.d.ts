interface IShaurmaOptions {
  [key: string]: any
}

interface IChart {
  a: string
}

interface IDrawableObject {
  draw: (ctx: CanvasRenderingContext2D) => void
}