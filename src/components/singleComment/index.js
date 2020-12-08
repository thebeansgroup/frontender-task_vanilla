//  -- comment
//  -- -- name
//  -- -- donation
//  -- -- text

import {Name, Donation, Text, Image} from './elements.js';

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
    this.image = new Image(this.data.id);
  }

  render() {
    return `
      <div class="comment">
        ${this.name.render()}
        ${this.donation.render()}
        ${this.text.render()}
        ${this.image.render()}
      </div>
    `;
  }
}
