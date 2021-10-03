import {Comment} from "./elements";
import {uniqueRandomProfilePicture} from "./helper";

export default class {
    constructor(data) {
        this.data = data;
        this.createFactories();
        this.render();
    }

    createFactories() {
        this.comments = this.data.comments.map(comment =>
            new Comment(
                {
                    userId: uniqueRandomProfilePicture(),
                    name: comment.name,
                    donationAmount: comment.donation,
                    message: comment.comment,
                    children: comment.children
                }
            )
        );
    }

    render() {
        return `
        <div class="comments">
            ${this.comments.map(comment => comment.render()).join("")}
        </div>
    `;
    }
}
