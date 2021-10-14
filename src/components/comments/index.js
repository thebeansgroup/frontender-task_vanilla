import {Comment} from './comment';



export default class {
  constructor(data) {
    this.data = data.comments;
    this.createFactories();
    this.render();
  }

  createFactories() {}

  render() {
    return `
      ${this.data.map(value => {
          return `
            ${new Comment(value).render()}
          `
        }).join('')
      }
    `;
  }
}
