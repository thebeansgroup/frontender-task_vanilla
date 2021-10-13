export class UserImg {
    constructor(imgPath) {
        this.imgPath = imgPath;
    }

    render() {
        return `
         <img src=${this.imgPath} class="comment__userImg" />
        `
    }
}

export class Name {
    constructor(name) {
        this.name = name;
    }

    render() {
        return `
            <p class="comment__userName">${this.name} </p>
        `
    }
}

export class Donation {
    constructor(donation) {
        this.donation = donation;
    }
    
    render() {
        return `
        <p class="comment__donation">  donated £${this.donation}</p>
        `
    }
}

export class Comment {
    constructor(comment) {
        this.comment = comment;
    }

    render() {
        return `
            <p>${this.comment}</p>
        `
    }
}


