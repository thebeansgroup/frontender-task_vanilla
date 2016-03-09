/**
 * Comment Component
 */

export class Comment {
  constructor(comment, commentNumber) {
    this.comment = comment;
    this.commentNumber = commentNumber;
  }

  renderSubcomments() {
    var subcomments = [],
        renderedSubcomments = [];

    if(typeof this.comment.children != 'undefined') {
      for (var i = 0; i < this.comment.children.length; i++)
        subcomments.push(new Comment(this.comment.children[i], 10+i));

      subcomments.forEach(function(e){
        renderedSubcomments.push(e.render());
      });
    }

    return renderedSubcomments.join("");
  }

  render() {
    return `
      <div class="comment">
        <div class="comment_image"><img src="images/faces/128-${this.commentNumber}.jpg" alt="img_${this.commentNumber}" /></div>
        <div class="comment_content">
          <div class="comment_name">
            <span class="comment_name_name">${this.comment.name}</span>
            ${this.comment.donation > 0 ? ' donated <span class="donation-amount">£' + this.comment.donation + '</span>':'' }
          </div>
          <p class="comment_text">
            ${this.comment.comment}
          </p>
        </div>
      </div>
      <div class="subcomments">
        ${this.renderSubcomments()}
      </div>
    `
  }
}
