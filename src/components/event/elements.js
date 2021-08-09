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
        <b class="event__progress_meter" style="width: ${percentage}%"></b>
      </div>
    `;
  }

  render() {
    return `
      <div class="event__funding">
        <p class="event__funding__totals">
          <span class="event__funding__raised">£${this.funding.raised/100}.00 raised</span></br>
          of £${this.funding.target/100} target.
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
