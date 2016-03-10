/*- comments
 *-- comment
 *--- comment
 *-- comment
 */

import {Comments, Comment} from './elements.js';

export default class {
  constructor(data) {
    this.data = data;
    this.createFactories();
    this.render();
  }

  createFactories() {
    this.comments = new Comments(this.data.comments);
  }

  render() {
    return `<div class="comment-box"><h2>Comments</h2>${this.comments.render()}</div>`;
  }
}
