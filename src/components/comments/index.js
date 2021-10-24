export default class {
  constructor(data) {
    this.data = data;
    this.createFactories();
    this.render();
  }

  createFactories() {
  }



  render() {

    const createNewCommentBox = (data,isChild)=>{
      let str="";
      if(isChild){
        str+="<div class='child-comment'>"
      }
  
      str+= `<div class="comment-box">
              <img src="${data.img}"/>
              <div class="message">
                <span class="comment-header">${data.name}
                  <span> donated £${data.donation}</span>
                </span>
                <span>${data.comment}</span>
              </div>
            </div>`;
  
      if(isChild){
        str+="</div>"
      } 
      return str;
    };

    var str = "";
    for(let i = 0;i<this.data.comments.length;i++){
      str+= createNewCommentBox(this.data.comments[i],false);
      if(this.data.comments[i].children && this.data.comments[i].children.length > 0){
        for(let j= 0;j<this.data.comments[i].children.length;j++){
          str+= createNewCommentBox(this.data.comments[i].children[j],true);
        }
      }
     
    }
    console.log(str);
    return `<div class="comments">
             ${str}
             </div>`;
  }
}
