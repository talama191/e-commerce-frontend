export class CartLineForm {
    productId:number
    quantity:number

    constructor(productId: number,quantity:number) {
        this.productId = productId;
        this.quantity=quantity
      }
}
