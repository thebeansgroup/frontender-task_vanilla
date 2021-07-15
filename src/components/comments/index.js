import { Comment } from "../comment";

export default class {
  constructor(data) {
    this.comments = data.comments;
    this.render();
  }

  render() {
    return `
      <div class="comments">
        ${this.comments.map((comment) => {
          let index = Math.floor(Math.random() * 20) + 1;
          var commentComponent = new Comment(comment, index);
          return commentComponent.render();
        })}
      </div>
    `
  }
}
