import {Comment} from './elements.js';

export default class {
  constructor(data) {
    this.data = data;
    this.createFactories();
    this.render();
  }

  createFactories() {
    this.comments = new Array();
    for(var i in this.data.comments) {
      this.comments[i] = new Comment(this.data.comments[i]);
    }
  }

  renderComments() {
    var renderedComments = new Array();
    this.comments.forEach(function(element){
      renderedComments.push(element.render());
    });
    return renderedComments.join("");
  }

  render() {
    return `<h2>Comments</h2><div class="comment-box">${this.renderComments()}</div>`;
  }
}
