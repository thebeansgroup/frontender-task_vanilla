//  -- comments

import SingleComment from '../singleComment';

export default class {
  constructor(data) {
    this.data = data;
    this.createComments();
    this.render();  
  }

  createComments() {
    const commentsData = this.data.comments;
    const comments = [];
  
    for (let i = 0; i < commentsData.length; i++) {
      const comment = new SingleComment(commentsData[i]).render();
      ;
      comments.push(comment);
    }
    return comments.join("");
  }

  render() {
    return `
      <div class="comments">
        ${this.createComments()}
      </div>
    `;
  }
}
