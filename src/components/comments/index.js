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

    // add comments about why this is necessary
    this.comments = this.comments.join('');
  }

  render() {
    return (
      `<div>
        ${this.comments}
      </div>`
    );
  }
}
