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
        <div style="padding: 8px; background-color: #3ebf42; width: ${percentage}%"></div>
        <div style="background-color: #f5f5f5; width: ${100 - percentage}%; border: ${percentage < 100 ? '1px solid #e9e9e9' : null}; border-left: 0px solid #e9e9e9;"></div>
      </div>
    `;
  }

  render() {
    return `
      <div class="event__funding">
        <p class="event__funding__totals">
          <div class="event__funding__raised">£${this.funding.raised/100} raised</div>
          <div class="event__funding__target">of £${this.funding.target/100} target.</div>
        </p>
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
