export class CommentForm {
    userId:number
    productId:number
    comment:String
    constructor( userId:number,productId: number,comment:String) {
        this.productId = productId;
        this.userId=userId
        this.comment=comment
      }
}
