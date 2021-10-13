import {Name, Donation, Comment, UserImg} from './elements.js'

export default class {
    constructor(data) {
        this.data = data;
        this.createFactories()
        this.render();
    }

    createFactories() {
        this.userImg = new UserImg(this.data.imgPath);
        this.name = new Name(this.data.name);
        this.donation = new Donation(this.data.donation);
        this.comment = new Comment(this.data.comment);
    }

    render() {

        return `
        <div class="comment__wrapper">
        <div class="bubble">
           <div class="comment__content">
              ${this.userImg.render()}
              <div>
              <div class="comment__userName__donation">
                    ${this.name.render()}
                    ${this.donation.render()}
                </div>
                 <div class="comment__message">
                    ${this.comment.render()}
                </div>
                </div>
           </div>
        </div>
        ${this.data.children.map(childComment => { 
            return `
            <div class="child">
   <div class="bubble">
      <div class="comment__content">
         ${new UserImg(childComment.imgPath).render()}
         <div>
            <div class="comment__userName__donation">
               ${new Name(childComment.name).render()}
               ${childComment.donation ? new Donation(childComment.donation).render() : ""}
            </div>
            <div class="comment__message">
               ${new Comment(childComment.comment).render()}
            </div>
         </div>
      </div>
   </div>
</div>
`
})}
</div>
`
}
}
