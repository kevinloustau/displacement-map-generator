class AppState {
  constructor() {
    if (AppState.instance == null) {
      this.state = {
        iterations: 2500,
        size: 500,
        shape: 'square',
      }
      AppState.instance = this
    }
    return AppState.instance
  }

  get iterations() {
    return this.state.iterations
  }
  set iterations(iterations) {
    this.state = { ...this.state, iterations }
  }

  get size() {
    return this.state.size
  }
  set size(size) {
    this.state = { ...this.state, size }
  }

  get shape() {
    return this.state.shape
  }
  set shape(shape) {
    this.state = { ...this.state, shape }
  }
}

const state = new AppState()
export default state
