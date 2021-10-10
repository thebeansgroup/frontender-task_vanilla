import { Comment } from './elements.js';

export default class {
  constructor(data) {
    this.data = data;
    this.createFactories();
    this.render();
  }

  createFactories() {
  }

  render() {
    let comments = `<div class="comments">`
    this.data.comments.forEach(element => {
      const comment = new Comment(element)
      comments += comment.render()
    });
    comments += `</div>`
    
    return comments;
  }
}
