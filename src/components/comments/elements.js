/**
 * Comment Component
 */

export class Comment {
  constructor(comment) {
    this.image = new Image(comment.image);
    this.name = new Name(comment.name);;
    this.donation = new Donation(comment.donation);;
    this.message = new Message(comment.message);;
	this.children = new Array();
	for (var i = 0; i < comment.children.length; i++) {
		this.children.push(new Comment(comment.children[i]));
	}
  }

  render() {
	this.renderOutput = `
		<li class="comments__comment">
	`;
	
	this.renderOutput = this.renderOutput.concat(
		`<div class="comments__comment__wrapper">`,
		this.image.render(),
		this.name.render(),
		this.donation.render(),
		this.message.render(),
		`</div>`,
		`<div class="comments__comment__arrow border"></div>`,
		`<div class="comments__comment__arrow"></div>`
	);
	
	for (var i = 0; i < this.children.length; i++) {
		this.renderOutput = this.renderOutput.concat(
			`<ul class="comments reply">`,
				this.children[i].render(),
			`</ul>`
			);
	}

	this.renderOutput = this.renderOutput.concat(`
		</li>
    `);
	
	return this.renderOutput;
  }
}

/**
 * Image Component
 */

export class Image {
  constructor(image) {
    this.image = image;
  }

  render() {
    return `
      <div style="background-image: url(images/faces/${this.image}.jpg)" class="comments__comment__image"></div>
    `
  }
}

/**
 * Name Component
 */

export class Name {
  constructor(name) {
    this.name = name;
  }

  render() {
    return `
      <strong class="comments__comment__name">${this.name}</strong>
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
    return `
      donated £${this.donation/100}
    `
  }
}

/**
 * Message Component
 */

export class Message {
  constructor(message) {
    this.message = message;
  }

  render() {
    return `
      <p class="comments__comment__message">${this.message}</p>
    `
  }
}