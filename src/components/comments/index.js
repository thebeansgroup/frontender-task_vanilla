//  -- comment
//  -- -- details
//  -- -- text
//  -- -- image
//  -- -- -- children

import { Comment } from "./elements.js";

export default class {
  constructor(data) {
    this.comments = data.comments;
    this.createFactories();
    this.render();
  }

  createFactories() {
    this.comments = this.comments.map((comment) => new Comment(comment));
  }

  render() {
    let allComments = "";
    this.comments.forEach((comment) => (allComments += `${comment.render()}`));
    return allComments;
  }
}
