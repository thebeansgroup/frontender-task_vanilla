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
    this.comments = this.data.comments.map(
      (comment) =>
        new Comment({
          name: comment.name,
          donation: comment.donation,
          comment: comment.comment,
          imageId: comment.imageId,
          children: comment.children,
        })
    );
  }

  render() {
    return `
        <div class="comments">
            ${this.comments.map((comment) => comment.render()).join("")}
        </div>
      `;
  }
}
