/**
 * Name Component
 */

export class Name {
  constructor(name) {
    this.name = name;
  }

  render() {
    return `
      <h1 class="comment__name">${this.name}</h1>
    `
  }
}
  

/**
 * Description Component
 */


// /**
//  * Funding Component
//  */

// export class Funding {
//   constructor(funding) {
//     this.funding = funding;
//   }

//   renderProgress() {
//     const percentage = this.funding.raised / this.funding.target * 100;

//     return `
//       <div class="event__progress">
//         <p class="event__progress__total">${percentage}% of total raised</p>
//         <b class="event__progress_meter" style="width: ${percentage}%"></b>
//       </div>
//     `;
//   }

//   render() {
//     return `
//       <div class="event__funding">
//         <p class="event__funding__totals">
//           <span class="event__funding__raised">£${this.funding.raised/100}</span>
//           of £${this.funding.target/100} target.
//         </p>
//         ${this.renderProgress()}
//       </div>
//     `
//   }
// }

// /**
//  * Details Component
//  */

// export class Details {
//   constructor(date, location) {
//     this.date = date;
//     this.location = location;
//   }

//   render() {
//     return `
//       <div class="event__details">
//         <div class="event__details__date">
//           <strong>Date:</strong> ${this.date}
//         </div>
//         <div class="event__details__location">
//           <strong>Location:</strong> ${this.location}
//         </div>
//       </div>
//     `
//   }
// }
