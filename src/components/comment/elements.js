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
      this.donation > 0 ? 
      `<p class="comment__donation">donated £${this.donation/100}</p>` 
      : 
      '');
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
      <img class="comment__image" src="images/faces/128-${this.id}.jpg" />
    `
  }
}
