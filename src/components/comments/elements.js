/**
 * Image Component
 */

 export class Image {
  constructor(name) {
    this.name = name;
  }

  render() {
    return `
      <img class="comment__image" alt="Comment Profile Image" src="./images/faces/${this.name}.jpg" />
    `
  }
}

/**
 * Header Component
 */

export class Header {
  constructor(name, donation, isChild) {
    this.name = name;
    this.donation = donation;
    this.isChild = isChild;
  }

  render() {
    return `
      <div class="comment__header">
        ${this.name}
        ${!this.isChild && this.donation ? `<span class="comment__donation">donated £${this.donation / 100}</span>` : ''}
      </div>
    `;
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

/**
 * Comment Component
 */

export class Comment {
  constructor(comment, isChild) {
    this.comment = comment;
    this.isChild = Boolean(isChild);
    this.createFactories();
  }

  createFactories() {
    this.image = new Image(this.comment.name);
    this.header = new Header(this.comment.name, this.comment.donation, this.isChild);
    this.text = new Text(this.comment.comment);
  }

  render() {
    return `
      <div class="comment ${this.isChild ? 'comment__child' : ''}">
        ${this.image.render()}
        <div class="comment__body">
          ${this.header.render()}
          ${this.text.render()}
        </div>
      </div>
    `;
  }
}
