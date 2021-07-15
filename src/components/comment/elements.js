/**
 * Icon Component
 */

export class Icon {
    constructor(iconUrl) {
        this.iconUrl = iconUrl;
    }

    render() {
        return `
            <img src=${this.iconUrl} class="comment__icon" />
        `
    }
}

/**
 * Details Component
 */

export class Details {
    constructor(name, donation) {
        this.name = name;
        this.donation = donation
    }

    render() {
        let donationString = (this.donation == 0) ? "" : `donated £${this.donation}`;
        return `
        <div class="comment__details">
            <strong>${this.name}</strong> ${donationString}
        </div>
        `
    }
}

/**
 * Text Component
 */

export class Text {
    constructor(text) {
        this.text = text;
    }

    render() {
        return `
        <div class="comment__text">
            ${this.text}
        </div>
        `
    }
}