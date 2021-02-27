
import Comment from '../comment';

export default class {
  constructor(data) {
    this.data = data;
    this.render();
  }

  createComments(commentsData) {
    let comments = '';
    commentsData.forEach((commentData) => {
      comments += new Comment(commentData).render();
      if (commentData.children.length) {
        commentData.children.forEach((childCommentData) => {
          comments += new Comment(childCommentData, true).render()
        });
      }
    });
    return comments
  }

  render() {
    return `
      <div class="column">
        ${this.createComments(this.data.comments)}
      <div>
    `
  }
}
