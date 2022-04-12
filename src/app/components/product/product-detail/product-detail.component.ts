import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartLineForm } from 'src/app/models/cart-line-form';
import { Comment } from 'src/app/models/comment';
import { CommentForm } from 'src/app/models/comment-form';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CommentService } from 'src/app/services/comment.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  isShowDesc = true;
  isShowInfo = false;
  isShowRate = false;
  cartLineForm: CartLineForm
  public nameForm: FormGroup;
  cartId: number
  comments: Comment[];
  commentForm: CommentForm
  newComment: Comment;
  @Input() product: any;
  id: number;
  pro: Product;

  total: number;
  constructor(private cartService: CartService
    , private activatedRoute: ActivatedRoute
    , private productService: ProductService
    ,private notificationService: NotificationService
    , private route: ActivatedRoute, private router: Router
    , private commentService: CommentService,
    private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.total=0;
    this.newComment = new Comment();
    this.cartId = Number(localStorage.getItem("userId") as string)
    this.id = this.route.snapshot.params['id'];
    console.log("id " + this.id)
    this.productService.getById(this.id).subscribe(data => {
      this.pro = data;
    })

    this.nameForm = this.formBuilder.group({
      content: ''
    });
    this.loadComment()
  }

  openDesc() {
    this.isShowDesc = true;
    this.isShowInfo = false;
    this.isShowRate = false;
  }

  openInfo() {
    this.isShowDesc = false;
    this.isShowInfo = true;
    this.isShowRate = false;
  }

  openRate() {
    this.isShowDesc = false;
    this.isShowInfo = false;
    this.isShowRate = true;
  }

  addProduct() {
    
    this.total++;
  }
  minusProduct() {
    if(this.total==0){
      return;
    }
    this.total--;
  }

  loadComment() {
    this.commentService.getComment(this.id).subscribe(data => {
      this.comments = data
    })
  }


  addToCart(productId: number) {
    // this mean user haven't login yet
    if (this.cartId == 0) {
      this.router.navigate(['login'])
    } else {
      this.cartLineForm = new CartLineForm(productId, this.total);
      this.cartService.addToCart(this.cartId, this.cartLineForm).subscribe(data => {
        this.cartService.cartComponentInstance.updateCartIcon();
        this.notificationService.notificationInstance.showNotification("Added to cart");
        this.total=0;
      })
    }
  }


  comment() {
    if (this.cartId == 0) {
      this.router.navigate(['login'])
    } else {
      let content = this.nameForm.get('content')?.value
      this.commentForm = new CommentForm(this.cartId, this.id, content, 4);
      this.commentService.addComment(this.commentForm).subscribe(data => {
        this.loadComment()
      })
    }


  }

  counter(i: number) {
    return new Array(i);
  }






}
