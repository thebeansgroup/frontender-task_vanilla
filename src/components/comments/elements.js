/**
 * Name Component
 */
class Name {
    constructor(name) {
      this.name = name;
    }
  
    render() {
      return `
          <div class="comment__name">${this.name}</div>
        `
    }
  }
  
  /**
   * Donation Component
   */
  class Donation {
    constructor(donation) {
      this.donation = donation;
    }
  
    render() {
      if (this.donation) {
        return `
            <div class="comment__donation">donated £${this.donation}</div>
          `
      }
  
      return '';
    }
  }
  
  /**
   * CommentString Component
   */
  class CommentStr {
    constructor(comment) {
      this.comment = comment;
    }
  
    render() {
      return `
          <div class="comment__commentStr">${this.comment}</div>
        `
    }
  }
  
  /**
   * Image Component
   */
  class Image {
    render() {
      var i = Math.floor(Math.random() * 20) + 1;
      return `
          <img class="comment__image" src="./images/faces/128-${i}.jpg" />
        `
    }
  }
  
  export class Comment {
    constructor(name, donation, comment, children) {
      this.commentStr = new CommentStr(comment);
      this.donation = new Donation(donation);
      this.name = new Name(name);
      this.image = new Image();
      this.children = [];
  
      if (children) {
        children.forEach((child) => {
          this.children.push(new Comment(child.name, child.donation, child.comment, child.childred));
        })
      }
    }
  
    render(child = false) {
      var renderStr = "";
      if (!child) {
        renderStr = `<div class="comments">`;
      }
      renderStr += `
        <div class="comment">
          ${this.image.render()}
          <div>
            <div class="comment__details">
              ${this.name.render()} 
              ${this.donation.render()}
            </div>
            ${this.commentStr.render()}
          </div>
        </div>`
  
      this.children.forEach((child) => {
        renderStr += child.render(true);
      })
  
      if (!child) {
        renderStr += "</div>"
      };
  
      return renderStr;
    }
  }