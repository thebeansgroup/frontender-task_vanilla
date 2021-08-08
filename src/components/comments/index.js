//  -- event
//  -- -- name
//  -- -- donation
//  -- -- comment
//  -- -- imageID
//  -- -- children

import {Comment} from './elements.js';

export default class {
  constructor(data) {
    this.data = data;
    this.createFactories();
    this.render();
  }

  createFactories() {
    let commentArray = [];
    let isChild = false
    let nestedLevel = 0;

    function traverse(obj) {
      for (let [key, value] of Object.entries(obj)) {
        commentArray += new Comment(value, isChild, nestedLevel).render();
        isChild = false;

        if (Array.isArray(obj[key].children) && obj[key].children.length > 0) {
          isChild = true;
          nestedLevel += 1
          traverse(obj[key].children);
        }

        nestedLevel = 0;
      }
    }

    traverse(this.data.comments);
    this.comments = commentArray;
  }

  render() {
    return this.comments;
  }
}
