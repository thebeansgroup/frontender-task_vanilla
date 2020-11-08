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
                donationString = `donated £${(donation / 100).toFixed(2)}`;
            }
            return donationString;
        }

        return (
            `
                <p class="comment__heading">
                    <strong>${this.name}</strong>
                    ${formatDonation(this.donation)}
                </p>
            `
        );
    }
}


/**
 * Comment Component
 */
export class Comment {
    constructor({ name, image, donation, comment, children }, isChild) {
        this.heading = new Heading(name, donation).render();
        this.image = image;
        this.comment = comment;

        // To add additional styling to child comments
        this.childClass = isChild ? "comment__child" : "";

        this.children = children.map((child) => {
            const isChild = true
            return new Comment(child, isChild).render()
        });
    }

    render() {
        return (
          `
            <div>
              <div class="comment ${this.childClass}">
                <img class="comment__image" src="images/faces/${this.image}">
                <div>
                    ${this.heading}
                    <p>${this.comment}</p>
                </div>
              </div>
              ${this.children}
            </div>
          `
        );
    }
}