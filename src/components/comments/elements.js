/**
 * Comment Component
 */

export class Comment {
  constructor(comment) {
    this.comment = comment;
  }

  render() {
    let comment = `
      <div class="comment">
        <img src="${this.comment.image}"/>
        ${this.comment.name}
    `;

    if(this.comment.donation > 0) {
      comment += `donated £${this.comment.donation/100}`
    }

    comment += this.comment.comment

    comment += `</div>`

    this.comment.children.forEach(element => {
      let child = `
        <div class="child-comment">
          <img src="${element.image}"/>
          ${element.name}
      `;
      if (element.donation > 0) {
        child += `donated £${element.donation / 100}`;
      }

      child += element.comment;

      comment += child
    });
    
    return comment;
  }
}
