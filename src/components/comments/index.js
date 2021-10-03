import {Comment} from "./elements";

export default class {
    constructor(data) {
        this.data = data;
        this.createFactories();
        this.render();
    }

    createFactories() {
        this.comments = this.data.comments.map(comment =>
            new Comment(
                1,
                comment.name,
                comment.donation,
                comment.comment,
                comment.children
            )
        );
    }

    render() {
        return `
        <div class="comments">
            ${this.comments.map(comment => comment.render()).join("")}
        </div>
    `
    }
}
