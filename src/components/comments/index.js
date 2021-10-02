import {ProfilePicture, Title, Message, Comment} from "./elements";

export default class {
    constructor(data) {
        this.data = data;
        this.createFactories();
        this.render();
    }

    createFactories() {
        this.comments = this.data.comments.map(comment =>
            new Comment(
                new ProfilePicture('images/faces/128-1.jpg'),
                new Title(comment.name, comment.donation),
                new Message(comment.comment),
                comment.children,
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
