//  -- event
//  -- -- comments

import { Comments } from './elements.js';

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
    return `
      <div class="comments__container">
        ${this.comments.render()}
      </div>
    `;
  }
}
