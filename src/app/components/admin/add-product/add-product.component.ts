import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService,private router: Router) { }
  registerMessage:String;
  selectedImage1: File;
  selectedImage2: File;
  ngOnInit(): void {
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
