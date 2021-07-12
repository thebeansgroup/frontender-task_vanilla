  /**
   * Comment Component
   */

  export class Comment {
    constructor(comment) {
      this.comment = comment;
      this.hasChildren = comment.children.length > 0 ? true : false
    }

    getCommentHtml(isChild, comment) {
      const commentClasses = isChild ? 'comment__child' : 'sbeans__background';

      return ` <div class="comment ${commentClasses} sbeans__border">
        <img class="comment__image" src="./images/faces/128-${comment.id}.jpg" />
        <div class="comment__content">
          <p class="comment__header"><strong>${comment.name}</strong> ${!isChild ? 'donated £'+comment.donation : ''}</p>
          <span>${comment.comment}</span> 
        </div>
      </div>`
    }

    addChildComments(commentThread) {
      this.comment.children.forEach(childComment => {
        commentThread += this.getCommentHtml(true, childComment)
      })
      return commentThread
    }

    render() {
      const firstComment = this.getCommentHtml(false, this.comment);
      return !this.hasChildren ? firstComment : this.addChildComments(firstComment) 
  }
}

