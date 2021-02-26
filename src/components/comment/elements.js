/**
 * Image Component
 */

export class Image {
  constructor(imageId) {
    this.imageId = imageId;
  }

  render() {
    return `
      <img class="comment__image" src="images/faces/128-${this.imageId}.jpg" />
    `
  }
}

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
    return (
      !!this.donation ? `<p class="comment__donation">donated £${this.donation}</p>`
        : ``
    )
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
 * Pointer Component
 */

export class Pointer {
  constructor(child) {
    this.child = !!child;
  }

  render() {
    return `
      <svg class="comment__pointer" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41 1H1V39L41 1Z" fill="${this.child ? '#fff' : '#f5f5f5'}"/>
        <path d="M1 1V39L41 1" stroke="#E1E1E1" stroke-width="1.25" stroke-linejoin="round"/>
      </svg>
    `
  }
}
