//  -- comments

import SingleComment from '../singleComment';

export default class {
  constructor(data) {
    this.data = data;
    this.createComments(this.data.comments);
    this.render();  
  }

  createComments(commentsData) {
    let comments = '';
  
    for (let i = 0; i < commentsData.length; i++) {
      const comment = new SingleComment(commentsData[i]).render();
      comments += comment;
      if (commentsData[i].children.length > 0) {
        comments += this.createComments(commentsData[i].children);
      }

    }
    return comments;
  }

  render() {
    return `
      <div class="comments">
        ${this.createComments(this.data.comments)}
      </div>
    `;
  }
}
