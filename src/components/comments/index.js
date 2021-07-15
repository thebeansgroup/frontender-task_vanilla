//  -- comment
//  -- -- image
//  -- -- header
//  -- -- text

import {Comment} from './elements.js';

export default class {
  constructor(data) {
    this.data = data;
    this.render();
  }

  createComments() {
    let comments = '';

    this.data.comments.forEach(comment => {
      comments += new Comment(comment).render();
      if (comment.children.length) {
        comment.children.forEach(child => {
          comments += new Comment(child, true).render();
        })
      }
    });

    return comments;
  }

  render() {
    return `
      <div class="comments">
       ${this.createComments()}
      </div>
    `;
  }
}
