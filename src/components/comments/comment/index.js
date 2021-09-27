import { CreateClassesString } from '../../../helpers/create-classes-string.js';
import { Thumbnail, Name, Donation, Message } from './elements.js'

export default class Comment {
  constructor(data) {
    this.data = data;
    this.render();
  }

  createComments() {

    const alternateCssClass = () => {
      let cssClassFlag = false;

      const cssClassLookupTable = {
        true: 'even',
        false: 'odd'
      }

      // Returns another function that encloses around the cssClassFlag and 
      // allows it to be updated each time it is called.

      return () => {
        return cssClassLookupTable[cssClassFlag = !cssClassFlag]
      };
    }

    const oddOrEvenCssClass = alternateCssClass();

    const generateMarkup = (rootNode, data) => {
      data.forEach((each) => {
      
        const {
          name: _name,
          thumbnail: _thumbnail,
          donation: _donation,
          comment: _message
        } = each

        this.name = new Name(_name);
        this.thumbnail = new Thumbnail(_thumbnail, _name, 'comment__thumbnail');
        this.donation = new Donation(_donation);
        this.message = new Message(_message);
      
        const content = `
          <div class="comment comment--${oddOrEvenCssClass()}">
            ${this.thumbnail.render()}
            <div class="comment__content">
              <div class="comment__details">
                ${this.name.render()}
                ${this.donation.render()}
              </div>
              ${this.message.render()}
            </div>
          </div>
        `
        // Recursion felt like the most robust option here,
        // and can handle n levels of comment nesting for free.

        rootNode.classList.add('comments__tree');
        let li = document.createElement('li');
        li.innerHTML = content;
        rootNode.appendChild(li);

        if (each.children.length > 0) {
          let ul = document.createElement('ul');
          ul.classList.add('comments__subTree');
          li.appendChild(ul);
          generateMarkup(ul, each.children);
        }
      });

      return rootNode.outerHTML;
    }
 
    return generateMarkup(document.createElement('ul'), this.data);
  }

  render() {
    return (
      this.createComments()
    )
  }
}