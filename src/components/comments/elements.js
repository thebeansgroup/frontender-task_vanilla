/**
 * Image Component
 */

export class Image {
  constructor(id) {
    this.id = id;
  }

  render() {
    return `
      <img class="comment__image" src="./images/faces/128-${this.id}.jpg" alt="Profile picture" />
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
      <span class="comment__name">${this.name}</span>
    `
  }
}

/**
 * Donation Component
 */

export class Donation {
  constructor(donation, child) {
    this.donation = donation;
    this.child = child;
  }

  render() { 
    return !this.child
    ? `<span class="comment__donation">donated £${this.donation}</span>`
    : ''
  }
}

/**
 * Message Component
 */

export class Message {
  constructor(message) {
    this.message = message;
  }

  render() {
    return `
      <p class="comment__message">${this.message}</p>
    `
  }
}

/**
 * Comment Component
 */

export class Comment {
  constructor(comment, child, nestedLevel) {
    this.comment = comment;
    this.child = child;
    this.nestedLevel = nestedLevel;
    this.createFactories();
  }

  createFactories() {
    this.image = new Image(this.comment.imageId);
    this.name = new Name(this.comment.name);
    this.donation = new Donation(this.comment.donation, this.child);
    this.message = new Message(this.comment.comment);
  }

  render() {
    return `
      <div class="comment ${this.child ? 'comment--child' : ''}"
      style="margin-left: ${this.child ? `calc(6.4rem * ${this.nestedLevel})`: ''}">
          ${this.image.render()}
          <div class="comment__header">
              ${this.name.render()}
              ${this.donation.render()}
              ${this.message.render()}
          </div>
      </div>
    `
  }
}
