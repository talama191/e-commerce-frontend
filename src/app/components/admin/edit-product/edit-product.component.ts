import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute,Router } from '@angular/router'
import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private productService: ProductService,private route: ActivatedRoute,private router: Router) { }
  selectedImage1: File;
  selectedImage2: File;
  id:number;
  product: Product;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getById(this.id).subscribe(data => {
      this.product = data;
      console.log(this.product);
      
    })
  }

  addProduct(form: NgForm) {
    let name = form.controls.name.value
    let price = form.controls.price.value
    let shortDescription = form.controls.shortDescription.value
    let longDescription = form.controls.longDescription.value
    let category = form.controls.category.value
    let image1 = this.selectedImage1
    let image2 = this.selectedImage2
    
    
    this.productService.addProduct(name,price,shortDescription,longDescription,category,image1,image2).
      subscribe({
      next: (response) => alert('success')
      ,
      error: (error) => alert('failed'),
    });
  }

  selectFile1(event: Event) {
    const target= event.target as HTMLInputElement;
    this.selectedImage1 = (target.files as FileList)[0];
  }
  selectFile2(event: Event) {
    const target= event.target as HTMLInputElement;
    this.selectedImage2 = (target.files as FileList)[0];
  }

}
