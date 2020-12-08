/**
 * Name Component
 */

export class Title {
  constructor(name, donation) {
    this.name = name;
    this.donation = donation;
  }

  render() {
    return `
        <p>
          <strong class="comment__name">${this.name}</strong>
          ${this.donation}
        </p>
    `
  }
}

/**
 * Text Component
 */

export class Text {
  constructor(text) {
    this.text = text;
  }

  render() {
    return `
      <div class="comment__text">${this.text}</div>
    `
  }
}
