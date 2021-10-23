/***** Comments******/
export class Comments {
    constructor(comments) {
      this.comments = comments
    }
  
    render() {
  
      const comments = this.comments.map((comment) => {
        return `
        <div class="comments__container__sub">
            <div class="comments__content">
                <img 
                    src="./images/faces/${comment.name}.jpg"
                    class="comments__img" 
                    alt="User Placeholder Image" 
                    title="User Placeholder Image" 
                />
              <div class="comments__detail">
                  <div class="person__details">
                    <p><span class="person__details__name">${comment.name}</span> <span> donated &#163;${(comment.donation)/100}</span> </p>                  
                  </div>
                  <div class="person__msg">${comment.comment}
                  </div>
              </div>
            </div>
        </div>
              
            ${comment.children.map((children) => {
              return `
              <div class="comments__child__container">
                <div class="comments__child__content">
                    <img 
                        src="./images/faces/${children.name}.jpg"
                        class="comments__img" 
                        alt="User Placeholder Image" 
                        title="User Placeholder Image" 
                    />
                    <div class="comments__detail">
                        <div class="person__details">
                        <p>
                            <span class="person__details__name">${children.name}</span>
                        </p>
                        </div>
                        <div class="person__msg">${children.comment}</div>
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