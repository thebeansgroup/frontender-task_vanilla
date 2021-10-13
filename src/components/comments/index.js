import Comment from "./comment";

export default class {
  constructor(data) {
    this.data = data.comments;
    // this.createFactories();
    this.render();
  }

  render() {
    return `
    <div class="comments">
      ${this.data.map((commentData) => {
        const comment = new Comment(commentData);
        return comment.render();
      }).join(' ')}
    </div>
    `;
  }
}
