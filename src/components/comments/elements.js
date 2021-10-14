
/***** Comments******/
export class Comments {
  constructor(comments) {
    this.comments = comments
  }

  render() {

    const comments = this.comments.map((comment) => {
      return `
      <div class="comments-container">
          <div class="comment-content">
            <img class="person-image" src="./images/faces/${comment.name}.jpg" />
          
            <div class="comment-detail">

                <div class="person-details">
                  <p>${comment.name} <span> donated &#163;${(comment.donation)/100}</span> </p>                  
                </div>

                <div class="person-message">${comment.comment}
                </div>
            </div>
          </div>
      </div>
            
          ${comment.children.map((children) => {
            return `
            <div class="comments-container-children">
              <div class="comment-content-children">
                <img class="person-image" src="./images/faces/${children.name}.jpg" />
                    <div class="comment-detail">
                        <div class="person-details">
                          <p>${children.name}</p>
                        </div>

                        <div class="person-message">${children.comment}
                        </div>
                    </div>
               </div>
            </div>
            `
          }).join('')}

     
      `
    }).join('')

    return `
       ${comments}
    `
  }
}