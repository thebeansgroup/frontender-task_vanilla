//  -- Comments
//  -- -- CommentCard
//  -- -- Replies
//  -- -- Author
//  -- -- ProfileImage
//  -- -- Amount
//  -- -- Body

import CommentCard, {ReplyCard} from './elements.js';

export default class {
  constructor(data) {
    this.data = data;
    this.render();
  }

  compose() {
    let comments = '';

    this.data.comments.forEach(comment => {
      comments += new CommentCard(comment).render();
      if (comment.children.length) {
        comment.children.forEach(child => {
          comments += new ReplyCard(child, true).render();
        })
      }
    });

    return comments;
  }

  render() {
    return `
      <div class="comments">
       ${this.compose()}
      </div>
    `;
  }
}