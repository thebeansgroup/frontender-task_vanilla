//  -- event
//  -- -- name
//  -- -- donation
//  -- -- text

import {Name, Donation, Text} from './elements.js';

export default class {
  constructor(data) {
    this.data = data;
    this.createFactories();
    this.render();
  }

  createFactories() {
    const commentsData = this.data.comments;
    const comments = [];
  
    for (let i = 0; i < commentsData.length; i++) {
      this.name = new Name(commentsData[i].name);
      this.donation = new Donation(commentsData[i].donation);
      this.text = new Text(commentsData[i].comment);

      const comment = 
      `
        <div class="comment">
          ${this.name.render()}
          ${this.donation.render()}
          ${this.text.render()}
        </div>
      `;

      comments.push(comment);
    }
    return comments.join("");
  }

  render() {
    return `
      <div class="comments">
        ${this.createFactories()}
      </div>
    `;
  }
}
