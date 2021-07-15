import { Comment } from "../comment";

export default class {
  constructor(data) {
    this.comments = data.comments;
    this.render();
  }

  render() {
    return `
      <div class="comments">
        ${this.comments.map((comment, index) => {
          index++;
          var commentComponent = new Comment(comment, index);
          return commentComponent.render();
        })}
      </div>
    `
  }
}
