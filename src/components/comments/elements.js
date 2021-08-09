/**
 * Image Component
 */

export class Image {
  constructor(userId) {
    this.userId = userId;
  }
  
  render() {
    return `
      <img class="comment__image" src="./images/faces/128-${this.userId}.jpg"/>
    `
  }
}
  
/**
 * User Component
 */
  
export class User {
  constructor(name, donation, isChild) {
    this.name = name;
    this.donation = donation;
    this.isChild = isChild;
  }

  render() {
    return `
      <div class="comment__user">
        <strong>${this.name}</strong>
        ${this.isChild ? '' : `donated £${this.donation / 100}`}
      </div>
		`
  }
}
  
/**
 * Quote Component
 */

export class Quote {
	constructor(quote) {
    this.quote = quote;
  }

  render() {
    return `
      <p class="comment__quote">${this.quote}</p>
    `;
  }

}

/**
 * Comment Component
 */

export class Comment {
  constructor(comment, isChild = false) {
    this.comment = comment;
		this.isChild = isChild;
		this.createFactories();
  }

	createFactories() {
		this.image = new Image(this.comment.userId);
		this.user = new User(this.comment.name, this.comment.donation, this.isChild);
		this.quote = new Quote(this.comment.comment);
	}

  render() {
    return `
		<div class="comment__holder">	
      <div class="comment__card ${this.isChild ? 'comment__child' : ''}">
				${this.image.render()}
				<div class="comment__details">
					${this.user.render()}
					${this.quote.render()}
				</div>
			</div>
			<div class="comment__triangle ${this.isChild ? 'triangle__child' : ''}"></div>
		</div>	
    `;
  }  
}