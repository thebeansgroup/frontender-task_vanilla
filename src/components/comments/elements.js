/**
 * ProfilePicture Component
 */

export class ProfilePicture {
    constructor(imgSrc) {
        this.imgSrc = imgSrc;
    }

    render() {
        return `
        <img src="${this.imgSrc}" alt='Profile Picture'>
        `
    }
}

/**
 * Title Component
 */

export class Title {
    constructor(name, donation) {
        this.name = name;
        this.donation = donation;
    }

    renderTitle() {

        return this.donation === 0 ?
            this.name :
            `${this.name} <span>donated ${this.donation}</span>`
    }

    render() {
        return `
            <p>${this.renderTitle()}</p>
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
        <p>${this.message}</p>
        `
    }
}

/**
 * Comment Component
 */

export class Comment {
    constructor(ProfilePicture, Title, Message, children) {
        this.profilePicture = ProfilePicture;
        this.title = Title;
        this.message = Message;
        this.children = children;
    }

    renderChildren() {
        return this.children ? this.children.map((child) => {
           const childComment = new Comment(
                new ProfilePicture('images/faces/128-1.jpg'),
                new Title(child.name, child.donation),
                new Message(child.comment),
                child.children
            )

            return `
                <div class="comment__child">
                    ${childComment.render()}
                </div>
            `
        }) : ''
    }

    render() {
        return `
        <div class="comment">
            ${this.profilePicture.render()}
            ${this.title.render()}
            ${this.message.render()}
            ${this.renderChildren()}
        </div>
        `
    }
}
