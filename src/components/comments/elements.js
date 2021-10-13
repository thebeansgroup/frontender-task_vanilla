/**
 * Title Component
 */

import { slugify, formatCurrency } from "../../utils/helpers";

export class Comments {
  constructor(comments) {
    this.comments = comments;
  }

  render() {
    const comments = this.comments.map(
      (comment) => `
      <div class="comment__wrapper">
        <div class="comment ${slugify(comment.name)}">
          <img class="comment__avatar" src="${comment.avatar}" alt="${
        comment.name
      }">
          <div class="comment__header">
          <div class="comment__author"><strong>${
            comment.name
          }</strong> donated ${formatCurrency(comment.donation)}</div>
            <div class="comment__body">${comment.comment}</div>
            </div>
            <div class="comment__triangle"></div>
            </div>
            ${
              comment.children
                ? comment.children.map(
                    (child) => `
                <div class="child comment  ${slugify(child.name)}">
                  <img class="comment__avatar" src="${child.avatar}" alt="${
                      child.name
                    }">
                  <div class="comment__header">
                    <div class="comment__author"><strong>${
                      child.name
                    }</strong></div>
                    <div class="comment__body">${child.comment}</div>
                  </div>
                  <div class="comment__triangle"></div>
                </div>
              `
                  )
                : ""
            }
      </div>
    `
    );

    return comments.join("");
  }
}
