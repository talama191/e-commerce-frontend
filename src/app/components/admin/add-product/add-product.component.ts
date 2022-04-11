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
    console.log(form.controls.name.value);
    let name = form.controls.name.value
    let price = form.controls.price.value
    let shortDescription = form.controls.shortDescription.value
    let longDescription = form.controls.longDescription.value
    let category = form.controls.category.value
    let image1 = form.controls.image1.value
    let image2 = form.controls.image2.value
    console.log(image2);
    
    this.productService.addProduct(name,price,shortDescription,longDescription,category,image1,image2)
  }

  selectFile1(event: Event) {
    this.selectedImage1 = event.target!.files;
  }
  selectFile2(event: Event) {
    this.selectedImage2 = event.target!.files;
  }

}
