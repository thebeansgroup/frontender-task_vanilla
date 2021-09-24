/**
 * Title Component
 */

export class Title {
  constructor(title) {
    this.title = title;
  }

  render() {
    return `
      <h1 class="event__title">${this.title}</h1>
    `
  }
}

/**
 * Description Component
 */

export class Description {
  constructor(data) {
    this.data = data;
    this.createFactories();
  }

  createFactories() {
    this.description = this
  }

  render() {
    this.description = this.data.map(paragraph => {
      return `
        <p>${paragraph}</p>
      `
    }).join('');

    return `
      <div class="event__description">${this.description}</div>
    `
  }
}

/**
 * Funding Component
 */

export class Funding {
  constructor(funding) {
    this.funding = funding;
  }

  renderProgress() {
    const percentage = this.funding.raised / this.funding.target * 100;

    return `
      <div class="event__progress">
        <strong class="event__progress__meter">
          <div class="event__progress__meter__level" style="width: ${percentage}%"></div>
        </strong>
      </div>
    `;
  }

  render() {
    return `
      <div class="event__funding">
        <div class="event__funding__totals">
          <div class="visually-hidden">£${this.funding.raised / 100} of £${this.funding.target / 100} target.</div>
          <div class="event__funding__raised">£${this.funding.raised / 100} raised</div> 
          <div class="event__funding__target">of £${this.funding.target / 100} target.</div>
        </div>
        ${this.renderProgress()}
      </div>
    `
  }
}

/**
 * Details Component
 */

export class Details {
  constructor(date, location) {
    this.date = date;
    this.location = location;
  }

  render() {
    return `
      <div class="event__details">
        <div class="event__detail">
          <strong>Date:</strong><span> ${this.date}</span>
        </div>
        <div class="event__detail">
          <strong>Location:</strong><span> ${this.location}</span>
        </div>
      </div>
    `
  }
}
