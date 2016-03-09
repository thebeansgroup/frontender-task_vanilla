/**
 * Comment Component
 */

export class Comment {
  constructor(comment) {
    this.comment = comment;
  }

  renderSubcomments() {
    var subcomments = [],
        renderedSubcomments = [];

    if(typeof this.comment.children != 'undefined') {
      for (var i = 0; i < this.comment.children.length; i++)
        subcomments.push(new Comment(this.comment.children[i]));

      subcomments.forEach(function(e){
        renderedSubcomments.push(e.render());
      });
    }

    return renderedSubcomments.join("");
  }

  render() {
    return `
      <div class="comment">
        <div class="comment_name">${this.comment.name}</div>
        <p class="comment_text">
          ${this.comment.comment}
        </p>
        <div class="subcomments">
          ${this.renderSubcomments()}
        </div>
      </div>
    `
  }
}
