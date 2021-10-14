import A from './comment'

/**
 * Name Component
 */

export class Name {
    constructor(name) {
      this.name = name;
    }
  
    render() {
      return `
        <span class="comment__name">${this.name}</span>
      `
    }
}

/**
 * Donation Component
 */

 export class Donation {
    constructor(donation) {
      this.donation = donation;
    }
  
    render() {
        if(this.donation > 0) {
            return `
                <span class="comment__donation">donated £${this.donation}</span>
            `
        }else{
            return ""
        }
    }
}

/**
 * commentDetail Component
 */

export class CommentDetail {
    constructor(commentDetail) {
      this.commentDetail = commentDetail;
    }
  
    render() {
      return `
        <div class="comment__commentDetail">${this.commentDetail}</div>
      `
    }
}

/**
 * ProPic Component
 */

export class ProPic {
    constructor(proPic) {
      this.proPic = proPic;
    }
  
    render() {
      return `
        <img class="comment__proPic" src="./images/faces/${this.proPic}"></img>
      `
    }
}