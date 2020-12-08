//  -- comment
//  -- -- name
//  -- -- donation
//  -- -- text

import {Name, Donation, Text, Image} from './elements.js';

export default class {
  constructor(data, child = false) {
    this.data = data;
    this.child = child;
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
      <div class="comment ${this.child ? 'child' : ''}">
        ${this.image.render()}
        <div class="comment__container">
          <div class="comment__title">
            ${this.name.render()}
            ${this.donation.render()}
          </div>
          ${this.text.render()}
        </div>
        <div class="comment__bubble">bubble</div>
      </div>
    `;
  }
}
