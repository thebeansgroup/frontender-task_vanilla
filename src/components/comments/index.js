import Comment from './comment';

export default class {
  constructor(data) {
    this.data = data.comments;
    this.createFactories();
    this.render();
  }

  createFactories() {
    this.comments = this.data.map(item => {
      return `
        ${new Comment([item]).render()}
      `
    }).join(' ')
  }

  render() {
    return `
      <div class="comments">
        ${this.comments}
      </div>
    `
  }
}