import {Comment} from './elements.js';

export default class {
  constructor(data) {
    this.data = data;
    this.createFactories();
    this.render();
  }

  createFactories() {
    this.comments = this.data.comments.map(comment => (
      new Comment(comment)
    ))
  }

  render() {
    let allComments = '';
    this.comments.forEach(comment => (
      allComments += `${comment.render()}`
    ))

    return allComments;
  }
}
