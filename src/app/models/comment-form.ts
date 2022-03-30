export class CommentForm {
    userId:number
    productId:number
    comment:String
    rate:number
    constructor( userId:number,productId: number,comment:String, rate:number) {
        this.productId = productId;
        this.userId=userId
        this.comment=comment
        this.rate = rate
      }
}
