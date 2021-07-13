/**
 * Image Component
 */

export class Image {
  render() {
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    return `
      <img class="comment__image" alt="Profile image of comment" src="./images/faces/128-${randomNumber}.jpg" />
    `;
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
        <storng>${this.name}</strong>
        ${!this.isChild && `<span>donated £${this.donation/100}</span>`}
      </div>
    `;
  }
}

/**
 * Content Component
 */

export class Content {
  constructor(content) {
    this.content = content;
  }

  render() {
    return `
      <p class="comment__content">
        ${this.content}
      </p>
    `;
  }
}

/**
 * Comment Component
 */

export class Comment {
  constructor(comment, isChild = false) {
    this.comment = comment;
    this.isChild = isChild;
    this.createFactories();
  }

  createFactories() {
    this.image = new Image();
    this.header = new Header(this.comment.name, this.comment.donation, this.isChild);
    this.content = new Content(this.comment.comment);
  }

  render() {
    return `
      <div class="comment ${this.isChild && 'child'}">
        ${this.image.render()}
        <div class="comment__body">
          ${this.header.render()}
          ${this.content.render()}
        </div>
      </div>
    `;
  }
}

