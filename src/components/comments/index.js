//  -- comments
//  -- -- name
//  -- -- donation
//  -- -- funding
//  -- -- details

import { Name } from "./elements.js";

export default class {
  constructor(data) {
    this.data = data;
    this.createFactories();
    this.render();
  }

  createFactories() {
    this.name = new Name(this.data.comments.name);
    // this.donation = new Donation(this.data.comments.donation);
    // this.comment = new Comment(this.data.comments.comment);
    // this.Children = new Children(this.data.comments.children)
    
  }

  render() {
    return `
    <div class="comment">
    ${this.name.render()}
    </div>
  `;
  }
}

   // ${this.name.render()}
      // ${this.donation.render()}
      // ${this.funding.render()}
      // ${this.details.render()}