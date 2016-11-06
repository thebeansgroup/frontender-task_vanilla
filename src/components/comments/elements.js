/**
 * Picture component.
 */
 class Picture {
   constructor(personName) {
     this.personName = personName;
   }

   render() {
     /**
      * Find the correct profile image for the people with specific names.
      * Otherwise just assigns a random image.
      */
     function getProfileImageForPerson(personName) {
       let character = personName.slice(-1);
       let pictureNumber = 0;

       switch(character) {
         case 'A':
           pictureNumber = 13;
           break;
         case 'B':
           pictureNumber = 12;
           break;
         case 'C':
           pictureNumber = 11;
           break;
         case 'D':
           pictureNumber = 10;
           break;
         default:
           // Just select a random profile picture.
           pictureNumber = Math.floor(Math.random() * 20) + 1;
           break;
       }

       return `128-${pictureNumber}.jpg`;
     }

     return `
          <img class="comment__picture" src="../../../images/faces/${getProfileImageForPerson(this.personName)}" />
     `;
   }
 }

 /**
  * Title component.
  */
  class Title {
    constructor(person, donation) {
      this.person = person;
      this.donation = donation;
    }

    render() {
      /**
       * Obtains the correct donation HTML string depending on whether or not there was a donation.
       */
      function renderDonationHTML(donation) {
        let donationHTML = ``;
        if(donation > 0) {
          donationHTML = `
            <small>donated £${(donation/100).toFixed(2)}</small>
          `;
        }

        return donationHTML;
      }

      return `
        <strong>${this.person}</strong>
        ${renderDonationHTML(this.donation)}
      `;
    }
  }

/**
 * Text component.
 */
 class Text {
   constructor(text) {
     this.text = text;
   }

   render() {
     return `<p>${this.text}</p>`;
   }
 }

/**
 * Comment component.
 */
 export class Comment {
   constructor(comment) {
     this.picture = new Picture(comment.name);
     this.title = new Title(comment.name, comment.donation);
     this.text = new Text(comment.comment);

     // Recursively create child comments to this one.
     this.children = comment.children.map(child => new Comment(child));
   }

   render() {
     /**
      * If a comment has any children, render them.
      */
     function renderChildrenIfDefined(children) {
       let childrenHTML = ``;

       if(children && children.length && children.length > 0) {
         childrenHTML = `
         <div class="comment__children">
          ${children.map(child => child.render())}
         </div>
         `;
        }

        return childrenHTML;
     }

     return `
     <div class="comment">
       ${this.picture.render()}
       <div class="comment__text">
        ${this.title.render()}
        ${this.text.render()}
       </div>
     </div>
     ${renderChildrenIfDefined(this.children)}
     `;
   }
 }
