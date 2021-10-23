
/***** Comments
   * Summary. (map method calls the provided function to iterate through each item in our array data)
   *
   * Description. (Print out objects from comment & children nested array )
 *  ******/
export class Comments {
  constructor(comments) {
    this.comments = comments;
  }

  render() {
    const comments = this.comments.map((comment) => {
      return `
      <div class="comment">
        <div class="comment__body">
          <img class="comment__img"  src="./images/faces/${comment.name}.jpg"
          alt="${comment.name}" 
          />
          <div class="comment__feedback">
              <p class="comment__name">${comment.name} <span> donated £${(comment.donation)/100}</span> </p>
              <p class="comment__message">${comment.comment}</p>
          </div>
        </div>
        <div class="comment__triangle"></div>
      </div>
      
      ${comment.children.map((children) => {

        return `
        <div class="comment">
          <div class="comment__body--2">
            <img class="comment__img"  src="./images/faces/${children.name}.jpg" />
            <div class="comment__feedback">
                <div class="comment__feedback--c">
                  <p class="comment__name">${children.name}</p>
                </div>
                <p class="comment__message">${children.comment}</p>
                </div>
            </div>
          </div>
          <div class="comment__triangle"></div>
        `}
        ).join('')}
      `
    }
    ).join('')

    return `
       ${comments}
    `
  }}
