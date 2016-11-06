//  -- comments
//  -- -- comment

import {Comment} from './elements.js'

export default class {
  constructor(data) {
    this.data = data;
    this.createFactories();
    this.render();
  }

  createFactories() {
    this.comments = this.data.comments.map(comment => new Comment(comment));
  }

  render() {
    /**
     *  Using normal map method adds commas between entries because of the array toString() method.
     *  Overcome this by doing it this way.
     */
    function renderComments(comments) {
      let result = ``;
      comments.map(comment => result = result + ' ' + comment.render());
      return result;
    }

    return `<div class="comments">
      ${renderComments(this.comments)}
    </div>`;
  }
}
