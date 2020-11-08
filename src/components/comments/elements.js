export class Comment {
    constructor(comment) {
        console.log(comment);
        this.name = comment.name;
        this.comment = comment.comment;
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
        </div>
      `
    }
}