//  -- comments
//  -- -- comment
//  -- -- -- image
//  -- -- -- user
//  -- -- -- quote

import {Comment} from './elements.js';

export default class {
  constructor(data) {
    this.data = data;
    this.render();
  }

  createComments() {
    let commentList = '';
    this.data.comments.forEach(comment => {
      commentList += new Comment(comment).render();
      if (comment.children.length) {
        comment.children.forEach(childComment => {
          commentList += new Comment(childComment, true).render();
        })
      }  
    })
    return commentList;
  }

  render() {
    return `
      <div class="comments__container">
        ${this.createComments()}
      </div>
    `
  }
}
