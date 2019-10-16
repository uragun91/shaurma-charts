export class Animation {
  private startTime: number
  private lastValue: number

  constructor (
    private startValue: number,
    private endValue: number,
    private duration: number,
    private onStepCompleted: (value: number) => void
  ) {}

  public tick(): Promise<void> {
    if (!this.startTime) {
      this.startTime = new Date().getTime()
    }
    return new Promise((resolve: any) => {

      const runAnimation = () => {
        let currentTimePhaze = Math.min(new Date().getTime() - this.startTime, this.duration)
        const timeFraction = currentTimePhaze / this.duration
        const progress = this.getProgress(timeFraction) // modify timeFraction in the range [0, 1]
        const newValue = this.startValue + (this.endValue - this.startValue) * progress
        if (currentTimePhaze <= this.duration && this.lastValue !== this.endValue) {
          this.lastValue = newValue
          this.onStepCompleted(newValue)
          requestAnimationFrame(() => runAnimation())
        } else {
          resolve()
        }
      }

      requestAnimationFrame(() => runAnimation())
    })
  }

  private getProgress(timeFraction: number) {
    return Math.sqrt(timeFraction)
  }

}