import { Comment } from "./elements";

export default class {
  constructor(data) {
    this.data = data;
    this.createFactories();
    this.render();
  }

  createFactories() {
    this.comments = this.data.comments.map((comment) => {
      return new Comment(comment).render();
    });

    // Return string containing array elements concatenated together in order to remove commas
    this.comments = this.comments.join('');
  }

  render() {
    return (
      `<div class="comments">
        ${this.comments}
      </div>`
    );
  }
}
