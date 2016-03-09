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
      this.comments[i] = new Comment(this.data.comments[i], 1+parseInt(i));
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
    return `<div class="comment-box"><h2>Comments</h2>${this.renderComments()}</div>`;
  }
}
