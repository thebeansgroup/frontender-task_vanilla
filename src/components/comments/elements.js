/**
 * Heading Component
 */

export class Heading {
    constructor(name, donation) {
        this.name = name;
        this.donation = donation;
    }

    render() {
        const formatDonation = (donation) => {
            let donationString = '';

            // Only show donation info if the value is greater than 0
            if (donation > 0) {
                // Adds a decimal place to the value
                donationString = `donated £${(donation / 100).toFixed(2)}`
            }
            return donationString;
        }

        return (
            `<p>${this.name} ${formatDonation(this.donation)}</p>`
        );
    }
}


/**
 * Comment Component
 */
export class Comment {
    constructor({ name, donation, comment, children }) {
        this.heading = new Heading(name, donation).render();
        this.comment = comment;

        this.children = children.map(child => new Comment(child).render());
    }

    render() {
        return (
          `
            <div>
              <div>
                <div>
                    <p>${this.heading}</p>
                    <p>${this.comment}</p>
                </div>
              </div>
              ${this.children}
            </div>
          `
        );
    }
}