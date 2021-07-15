//  --  comment
//  --  --  icon
//  --  --  details
//  --  --  text
//  --  --  --  children

import { Icon, Details, Text } from "./elements.js";

export class Comment {
    constructor(comment, index) {
        this.comment = comment;
        this.index = index;
        this.children = this.comment.children;
        this.createFactories();
        this.render();
    }

    createFactories() {
        this.icon = new Icon(`/images/faces/128-${this.index}.jpg`);
        this.details = new Details(this.comment.name, this.comment.donation);
        this.text = new Text(this.comment.comment);
    }

    render() {
        return `
        <div key=${this.index} class="comment">
            ${this.icon.render()}
            <div class="comment__body">
                ${this.details.render()}
                ${this.text.render()}
            </div>
        </div>
        <div class="comment__children">
            ${this.children.map((comment, index) => {
                index++;
                var commentComponent = new Comment(comment, index + 3);
                return commentComponent.render();
            })}
        </div>
        `
    }
}
