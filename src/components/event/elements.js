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
  constructor(description) {
    this.description = description;
  }

  render() {
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
        <div class="event__progress-bar">
          <span class="event__progress-bar_fill" style="width: ${percentage}%;"></span>
        </div>
      </div>
    `;
  }

  render() {
    const fundingRaised = (this.funding.raised/100).toFixed(2);

    return `
      <div class="event__funding">
        <div class="event__funding__totals">
          <span class="event__funding__raised">£${fundingRaised} raised</span>
          <div class="event__funding__target">of £${this.funding.target/100} target.</div>
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
        <div class="event__details__date">
          <strong>DATE:</strong> ${this.date}
        </div>
        <div class="event__details__location">
          <strong>LOCATION:</strong> ${this.location}
        </div>
      </div>
    `
  }
}
