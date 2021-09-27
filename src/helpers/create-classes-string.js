export class CreateClassesString {
  constructor(classes) {
    this.store = classes;
  }

  get() {
    return (
      (typeof this.store !== 'undefined')
        ? this.store.constructor === Array
        ? ` ${this.store.join(' ')}` : ` ${this.store}`
        : ''
    )
  }
}