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
      <div class="comment ${this.child ? 'child' : 'parent'}">
        ${this.image.render()}
        <div class="comment__container">
          <div class="comment__title">
            ${this.name.render()}
            ${this.donation.render()}
          </div>
          ${this.text.render()}
        </div>
        <svg class="comment__bubble" width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="comment__bubble_fill" d="M1 0H41L21 15L1 30V0Z" fill="#F5F5F5"/>
          <path d="M1 0V30L40.5 0.5V0" stroke="#E1E1E1" stroke-width="1.25"/>
      </svg>
      </div>
    `;
  }
}
