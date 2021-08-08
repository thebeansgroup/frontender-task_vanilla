/**
 * Details Component
 */

export class Details {
  constructor(name, donation, isChild) {
    this.name = name;
    this.donation = donation;
    this.isChild = isChild;
  }

  render() {
    return `
        <div class="comment__details">
          <div class="comment__details__name">
            <strong>${this.name}</strong> 
          </div>
          <div class="comment__details__donation">
          ${!this.isChild ? `donated £${this.donation / 100}` : ""}
          </div>
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
      `;
  }
}

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
        `;
  }
}

export class Comment {
  constructor(comment, isChild = false) {
    this.comment = comment;
    this.isChild = isChild;
    this.createFactories();
  }

  createFactories() {
    this.details = new Details(
      this.comment.name,
      this.comment.donation,
      this.isChild
    );
    this.text = new Text(this.comment.comment);
    this.imageId = new Image(this.comment.imageId);
    this.children = this.comment.children.map(
      (child) => new Comment(child, true)
    );
  }

  render() {
    return `
    <div class="comments__comment ${this.isChild ? "child" : ""}">  
    ${this.imageId.render()}
    <div class="comment__body">
      ${this.details.render()}
      ${this.text.render()}
      
    </div>
    </div>
    ${this.children.map((child) => child.render()).join("")}`;
  }
}
