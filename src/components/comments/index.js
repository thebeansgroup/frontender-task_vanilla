//  -- comment
//  -- -- name
//  -- -- donation
//  -- -- comment
//  -- -- image

import {
  Comment
} from './elements.js';

export default class {
  constructor(data) {
    this.data = data;
    this.comments = [];
    this.createComments();
    this.render();
  }

  createComments() {
    this.data.comments.map((comment) => {
      this.comments.push(new Comment(comment.name, comment.donation, comment.comment, comment.children));
    });
  }

  render() {
    var renderStr = "";
    this.comments.forEach((comment) => {
      renderStr += comment.render();
    });
    return renderStr;
  }
}