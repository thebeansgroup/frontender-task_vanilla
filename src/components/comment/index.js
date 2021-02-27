//  -- single-comment
//  -- -- name
//  -- -- donation
//  -- -- text
//  -- -- pointer

import { Image, Name, Donation, Text, Pointer } from './elements.js';

export default class {
  constructor(data, child) {
    this.data = data;
    this.child = !!child;
    this.createFactories();
    this.render();
  }

  createFactories() {
    this.name = new Name(this.data.name);
    this.donation = new Donation(this.data.donation);
    this.text = new Text(this.data.comment);
    this.image = new Image(this.data.uid);
    this.pointer = new Pointer(this.child);
  }

  render() {
    return `
      <div class="comment ${this.child ? 'child' : 'parent'}">
        ${this.image.render()}
        <div class="comment__container">
          <p class="comment__title">
            ${this.name.render()}
            ${this.donation.render()}
          </p>
          ${this.text.render()}
        </div>
        ${this.pointer.render()}
      </div>
    `;
  }
}
