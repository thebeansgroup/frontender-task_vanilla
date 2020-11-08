export class Comment {
    constructor({ name, donation, comment, children }) {
        this.name = name;
        this.comment = comment;

        this.children = children.map(child => new Comment(child).render());
    }

    render() {
        return `
        <div>
          <div">
            <p>${this.name}</p>
          </div>
          <div>
            <p>${this.comment}</p>
          </div>
          ${this.children}
        </div>
      `
    }
}