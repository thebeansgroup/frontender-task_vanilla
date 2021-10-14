import {Name,CommentDetail,Donation,ProPic} from './elements.js';

export class Comment {
  constructor(data) {
    this.data = data;
    this.createFactories();
    this.render();
  }

  createFactories() {
    this.name = new Name(this.data.name);
    this.commentDetail = new CommentDetail(this.data.comment);
    this.donation = new Donation(this.data.donation);
    this.proPic = new ProPic(this.data.proPic);
  }

  render(value) {
    return `
        <div class="comment ${value === "child" ? "comment__child_inner" : "" }">
            <div class="comment__left">
                ${this.proPic.render()}
            </div>
            <div class="comment__right">
                ${this.name.render()}
                ${this.donation.render()}
                ${this.commentDetail.render()}
            </div>
        </div>
        <div class="arrow__down ${value === "child" ? "arrow__down__child" : "" }"></div>
        <div class="comment__child">
            ${this.data.children.map(item => {
                return`${new Comment(item).render("child")}`
            })}
        </div>
    `
  }
}
