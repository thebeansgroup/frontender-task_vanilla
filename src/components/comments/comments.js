export class Comments {
  constructor(comments) {
    this.comments = comments
  }

  render() {

    const comments = this.comments.map((comment) => {
      return `
      <div>
        <div class="comment__bubble">
          <div class="image ${comment.name}"></div>
          <div class="comment__text">
          <div class="comment__row1">
            <strong>${comment.name}</strong> donated ${comment.donation}
          </div>
          <div class="comment__row2">${comment.comment}</div>
          </div>
        </div>
        <div class="comment__child">${comment.children.map((child) => {
          return `
          <div class="comment__bubble child__comment__bubble">
            <div class="image ${child.name}"></div>
            <div class="comment__text">
            <div class="comment__row1">
              <strong>${child.name}</strong>
            </div>
            <div class="comment__row2">${child.comment}</div>
            </div>
          </div>
          `
        })}
      </div>
      `
    })

    return `
       <div>${comments}</div>
    `
  }
}