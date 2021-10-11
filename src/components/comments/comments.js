/**
 * Comment Component
 */

export class Comment {
  constructor(comment) {
    this.name = comment.name;
    this.donation = comment.donation;
    this.comment = comment.comment;
    this.imageId = comment.imageId;
  }

  // Due to time constraints I haven't been able to add in the child messages
  // I would probably render a new comment foreach child of a comment
  // Each comment could then have their style selected by a 'isChild' property
  // The child style would have the required colours/padding to make it match the wireframe

  render() {
    return `
    <div class="comment__container">
      <img class="comment__image" src="images/faces/128-${this.imageId}.jpg" />
      <div class="comment__text">
        <p class="comment__name"><strong>${this.name}</strong> <span>Donated £${this.donation}</span></p>
        <p class="comment__comment">${this.comment}</p>
      </div>
    </div>
    `;
  }
}
