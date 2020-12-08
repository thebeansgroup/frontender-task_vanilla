//  -- comment
//  -- -- name
//  -- -- donation
//  -- -- text

import {Name, Donation, Text} from './elements.js';

export default class {
  constructor(data) {
    this.data = data;
    this.createComment();
    this.render();
  }

  createComment() {
    this.name = new Name(this.data.name);
    this.donation = new Donation(this.data.donation);
    this.text = new Text(this.data.comment);
  }

  render() {
    return `
      <div class="comment">
        ${this.name.render()}
        ${this.donation.render()}
        ${this.text.render()}
      </div>
    `;
  }
}
