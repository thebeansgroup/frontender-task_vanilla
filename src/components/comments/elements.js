/**
 * Comments Component
 * constructor - instantiates into Comment objects each of the comments and store them in an array
 * render - calls to the render methods of each of the Comments stored in the array and joins them together
 */

 export class Comments {
   constructor(comments) {
     this.comments = new Array();

     for (var i = 0; i < comments.length; i++)
       this.comments.push(new Comment(comments[i]));
   }

   render() {
     var renderedComments = [];

     this.comments.forEach(function(e){
       renderedComments.push(e.render());
     });

     return renderedComments.join("");
   }
}


/**
 * Comment Component
 * constructor - stores the comment object passed as an argument
 * createChildren - instantiates children passed as an argument as a Comments object
 * render - returns a template literal with the values of the comment stored by the constructor
 *          images are selected at random
 *          donations and children will only show if there are donations / children comments
 */

export class Comment {
  constructor(comment) {
    this.comment = comment;
  }

  createChildren(children) {
    this.children = new Comments(children);

    return this.children.render();
  }

  render() {
    return `
      <div class="comment">
        <div class="comment_image"><img src="images/faces/128-${Math.round(Math.random()*19+1)}.jpg" alt="img_${this.commentNumber}" /></div>
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
        ${typeof this.comment.children != "undefined" ? this.createChildren(this.comment.children) : ''}
      </div>
    `
  }
}
