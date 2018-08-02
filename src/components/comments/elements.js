/**
 * Comments Component
 */

export class Comment {
  constructor(name, donation, comment, image) {
    this.name = name;
    this.donation = donation;
    this.comment = comment;
    this.image = image;
  }

  render() {
    return `
      <div class="comments__block">
        <img class="comments__image" src="images/faces/${this.image}">
        <div class="comments__textbox">
          <b class="comments__name">${this.name}</b>
          <span class="comments__donation">donated £${this.donation/100}</span>
          <p class="comments__text">${this.comment}</p>
        </div>
      </div>
    `
  }
}

export class Subcomment extends Comment {
  constructor(name, donation, comment, image) {
    super(name, donation, comment, image);
  }

  render() {
    return `
      <div class="subcomments__block">
        <img class="comments__image" src="images/faces/${this.image}">
        <div class="comments__textbox">
          <b class="comments__name">${this.name}</b>
          <span class="comments__donation">donated £${this.donation/100}</span>
          <p class="comments__text">${this.comment}</p>
        </div>
      </div>
    `
  }
}
