/**
 * Name Component
 */

export class Name {
  constructor(name) {
    this.name = name;
  }

  render() {
    return `
      <strong class="comment__name">${this.name}</strong>
    `
  }
}

/**
 * Donation Component
 */

export class Donation {
  constructor(donation) {
    this.donation = donation;
  }

  render() {
    return `
      <p class="comment__donation">${this.donation}</p>
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
      <p class="comment__text">${this.text}</p>
    `
  }
}

/**
 * Image Component
 */

export class Image {
  constructor(id) {
    this.id = id;
  }

  render() {
    return `
      <img src="images/faces/128-${this.id}.jpg" />
    `
  }
}
