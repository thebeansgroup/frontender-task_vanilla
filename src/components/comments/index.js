//  -- comments

import Comment from '../comment';

export default class {
  constructor(data) {
    this.data = data;
    this.render();  
  }

  createComments(commentsData, child = false) {
    let comments = '';
  
    for (let i = 0; i < commentsData.length; i++) {
      const comment = new Comment(commentsData[i], child).render();
      comments += comment;
      if (commentsData[i].children.length > 0) {
        comments += this.createComments(commentsData[i].children, true);
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
