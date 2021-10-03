/**
 * ProfilePicture Component
 */

export class ProfilePicture {
    constructor(imgSrc) {
        this.imgSrc = imgSrc;
    }

    render() {
        return `
        <img class="comments__profile_picture" src="${this.imgSrc}" alt='Profile Picture'>
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
            `${this.name} <span>donated £${this.donation}</span>`
    }

    render() {
        return `
            <p class="comments__title">${this.renderTitle()}</p>
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
        <p class="comments__message">${this.message}</p>
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
                <div class="comments__comment comments__child">
                    ${childComment.render()}
                </div>
            `
        }) : ''
    }

    render() {
        return `
        <div class="comments__comment">
            <div class="comments__comment__card">
                ${this.profilePicture.render()}
                <div class="comments__comment__card__body">
                    ${this.title.render()}
                    ${this.message.render()}
                </div>
            </div>
           <div class="comments__comment__triangle"></div>
        </div>
        ${this.renderChildren()}
        `
    }
}
