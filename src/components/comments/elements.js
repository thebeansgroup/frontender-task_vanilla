/**
 * Comment Component
 */

export class Comment {
  constructor(comment) {
    this.comment = comment;
  }

  render() {
    let comment = `
      <div class="comments__comment">
        <div class="comments__comment__content">
          <div class="comments__comment__content__image">
            <img src="${this.comment.image}"/>
          </div>
          <div class="comments__comment__content__text">
            <span class="comments__comment__content__text__name">
              ${this.comment.name}
            </span>
    `;

    if(this.comment.donation > 0) {
      comment += `donated £${this.comment.donation/100}`
    }

    comment += `
      <p>
        ${this.comment.comment}
      </p>
    `;

    comment += `
          </div>
        </div>
        <div class="comments__comment___tail"></div>
      </div>
    `;

    this.comment.children.forEach(element => {
      let child = `
        <div class="comments__child-comment">
          <div class="comments__comment__content">
            <div class="comments__comment__content__image">
              <img src="${element.image}"/>
            </div>
          <div class="comments__comment__content__text">
            <span class="comments__comment__content__text__name">
              ${element.name}
            </span>
      `;
      if (element.donation > 0) {
        child += `donated £${element.donation / 100}`;
      }

      child += `
      <p>
        ${element.comment}
      </p>
    `;
      
      child += `
          </div>
        </div>
        <div class="comments__child-comment___tail"></div>
      </div>
      `;

      comment += child
    });
    
    return comment;
  }
}
