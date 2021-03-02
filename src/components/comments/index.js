import { Comment } from './comment.js';

export default class {
  constructor(data) {
    this.data = data;
    this.createFactories();
    this.render();
  }

  createFactories() {
    this.formattedComments = this.data.comments.map((comment) => new Comment(comment));
  }

  render() {
    return `
    <div class="comments">
      ${this.formattedComments.map((comment) => comment.render()).join('')}
    </div>  
    `
  }
}