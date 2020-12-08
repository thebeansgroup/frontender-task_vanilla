//  -- comments

import {Title, Text} from './elements.js';

export default class {
  constructor(data) {
    this.data = data;
    this.createFactories();
    this.render();
  }

  createFactories() {
    this.title = new Title(this.data.comments[0].name, this.data.comments[0].donation)
    this.text = new Text(this.data.comments[0].comment);
  }

  render() {
    return `
      <div class="comment">
      ${this.title.render()}
      ${this.text.render()}
      </div>
    `;
  }
}
