/**
 * Body Component
 */

 export class Body {
  constructor(text) {
    this.text = text;
  }

  render() {
    return `
      <p class="comment__body">${this.text}</p>
    `
  }
}

/**
 * ProfileImage Component
 */

 export class ProfileImage {
  constructor(authorName) {
    this.authorName = authorName;
  }

  render() {
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    return `
      <img class="comment__image" alt="The profile image of ${this.authorName}" src="/images/faces/128-${randomNumber}.jpg" />
    `
  }
}

/**
 * Author Component
 */

 export class Author {
  constructor(authorName, donation = "" ) {
    this.authorName = authorName;
    this.donation = donation;
  }

  render() {
    return `
    <span class="comment__author">
      <strong>${this.authorName}</strong>
      ${ (this.donation==="") ? '' : `<span class="comment__amount">donated £${this.donation}</span>`}
    </span>
    `
  }
}

/**
 * CommentCard Component
 */

export default class CommentCard {
  constructor(comment) {
    this.comment = comment;
    this.createFactories();
  }

  createFactories() {
    this.profileimage = new ProfileImage(this.comment.name);
    this.author = new Author(this.comment.name, this.comment.donation);
    this.body = new Body(this.comment.comment);
  }

  render() {
    return `
      <div class="comment">
        ${this.profileimage.render()}
        ${this.author.render()}
        ${this.body.render()}
      </div>
    `;
  }
}

/**
 * ReplyCard Component
 */

 export class ReplyCard {
  constructor(reply) {
    this.reply = reply;
    this.createFactories();
  }

  createFactories() {
    this.profileimage = new ProfileImage(this.reply.name);
    this.author = new Author(this.reply.name);
    this.body = new Body(this.reply.comment);
  }

  render() {
    return `
      <div class="comment reply">
        ${this.profileimage.render()}
        ${this.author.render()}
        ${this.body.render()}
      </div>
    `;
  }
}