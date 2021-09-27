import { CreateClassesString } from '../../../helpers/create-classes-string.js';

// Thumbnail can take a class. It's a contrived example to show a way of 
// passing in a cssClass (via a helper to allow taking array or string) 
// for a component for hooking into themes.

export class Thumbnail {
  constructor(src, alt, cssClass) {
    this.cssClass = cssClass;
    this.src = src;
    this.alt = alt;
    this.createFactories();
  }

  createFactories() {
    this.createClass = new CreateClassesString(this.cssClass).get();
  }

  render() {
    return `
      <img class="thumbnail${this.createClass}" src="./images/${this.src}" alt="Thumbnail image of ${this.alt}"/>
    `
  }
}

export class Name {
  constructor(name) {
    this.name = name;
  }

  render() {
    return `
      <span class="comment__name">
        ${this.name}
      </span>
    `
  }
}

export class Message {
  constructor(message) {
    this.message = message;
  }

  render() {
    return `
      <p class="comment__message">
        ${this.message}
      </p>
    `
  }
}

export class Donation {
  constructor(donation) {
    this.donation = donation;
  }

  render() {
    return (
      this.donation > 0 ? `<span class="comment__donation"> donated £${this.donation / 100}</span>` : ''
    )
  }
}

export class Wrapper {
  constructor(type = 'div', children, cssClass = 'wrapper') {
    this.type = type;
    this.cssClass = cssClass;
    this.children = children;
  }

  createWrapper() {
    const element = document.createElement(this.type);
    element.innerHTML = this.children.join('');

    this.cssClass.forEach(function (each) {
      element.classList.add(each);
    })

    return element.outerHTML;
  }

  render() {
    return this.createWrapper();
  }
}