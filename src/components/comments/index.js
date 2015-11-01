import {Comment, Image, Name, Donation, Message} from './elements.js';

export default class {
  constructor(data) {
    this.data = data;
    this.createFactories();
    this.render();
  }

  createFactories() {
	  this.comments = new Array();
	  for (var i = 0; i < this.data.comments.length; i++) {
		  this.comments.push(new Comment(this.data.comments[i]))
	  }
  }

  render() {
    this.renderOutput = `
		<ul class="comments">
    `;
	
	for (var i = 0; i < this.comments.length; i++) {
		this.renderOutput = this.renderOutput.concat(this.comments[i].render());
	}

	this.renderOutput = this.renderOutput.concat(`
		</ul>
    `);

	return this.renderOutput;
  }
}
