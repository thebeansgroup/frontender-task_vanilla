
import {Comment, Subcomment} from './elements.js';

export default class {
  constructor(data) {
    this.data = data;
    this.createFactories();
    this.render();
  }

  createFactories() {

    const commentHolder = [];

    for (var value of this.data.comments) {
      commentHolder.push(new Comment(value.name, value.donation, value.comment, value.image).render());

      if (value.children.length != 0) {
        for (var subvalue of value.children) {
          commentHolder.push(new Subcomment(subvalue.name, subvalue.donation, subvalue.comment, subvalue.image).render());
        }
      }
    }

    this.allComments = commentHolder.join('');

  }

  render() {
    return `
      <div class="comments">
        ${this.allComments}
      </div>
    `;
  }
}