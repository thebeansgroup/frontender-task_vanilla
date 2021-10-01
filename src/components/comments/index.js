//  -- comments
//  -- -- name
//  -- -- donation
//  -- -- comment
//  -- -- children
//  -- -- -- name
//  -- -- -- donation
//  -- -- -- comment
//  -- -- -- children

import { Comment } from "./comments.js";

export default class {
  constructor(data) {
    this.data = data;
    this.createFactories();
    this.render();
  }

  createFactories() {
    // this.comments = this.data.comments.map((comment) => new Comment(comment));

    this.comment = new Comment(this.data.comments);
  }

  render() {
    return `
        <div id="comments" class="comments">
        ${this.comment.render()}
        </div>
      `;
  }
}
