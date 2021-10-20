/**
 * Comment Component
 */

export class Comments {
    constructor(comments) {
      this.comments = comments;
    }
  
    render() {
      return `
        ${this.comments.map(comment => commentTemplate(comment)).join('')}
      `
    }
}

function commentTemplate(comment, childComment){
    return `
        <div class="comment card${childComment ? ' white comment__child' : ''}">
            <img 
                class="comment__image" 
                alt="Example Placeholder Image" 
                title="Example Placeholder Image" 
                src="https://via.placeholder.com/80"
            />
            <div class="comment__content">
                <div class="comment__name">
                    ${comment.name} 
                    ${comment.donation > 0 ? `<small>donated £${comment.donation/100}</small>` : ''}
                </div>
                <p class="comment__comment">${comment.comment}</p>
            </div>
        </div>
        ${comment.children ? comment.children.map(childComment => commentTemplate(childComment, true)).join('') : ''}
    `
}