/**
 * Name Component
 */

export class Comment {
  constructor(comment) {
    this.comment = comment;
    console.log(comment[1]);
  }

  render() {
    return `
      <h1 class="comment__name">${this.comment[1].name}</h1>
    `;
  }
}
