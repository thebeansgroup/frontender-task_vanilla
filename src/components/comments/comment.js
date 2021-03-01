

/**
 * Image Component
 */

class Image {
  constructor(image) {
    this.image = image;
  }

  render() {
    return `
    <img src="${this.image}" alt="" />
    `
  }
}

/**
 * Header Component
 */

class Header {
  constructor(name, donation, isChild) {
    this.name = name;
    this.donation = donation;
    this.isChild = isChild;
  }

  render() {
    return `
    <div class="comment__header"><span>${this.name}</span>${!this.isChild ? ` donated £${this.donation / 100}` : ''}</div>
    `
  }
}

/**
 * Message Component
 */

class Message {
  constructor(message) {
    this.message = message;
  }

  render() {
    return `<div class="comment__message">${this.message}</div>`
  }
}

/**
 * Comment Component
 */

export class Comment {
  constructor (comment, isChild = false) {
    this.comment = comment;
    this.isChild = isChild;
    this.createFactories();
  }

  createFactories() {
    this.image = new Image(this.comment.image);
    this.header = new Header(this.comment.name, this.comment.donation, this.isChild);
    this.message = new Message(this.comment.comment);
    this.children = this.comment.children.map((child) => new Comment(child, true));
  }

  render() {
    return `
    <div class="comments__comment ${this.isChild ? 'child' : ''}">
      ${this.image.render()}
      <div class="comment__body">
        ${this.header.render()}
        ${this.message.render()}
      </div>
    </div>
    ${this.children.map((child) => child.render()).join('')}
    `
  }
}