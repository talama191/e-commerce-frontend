import { Component, Directive, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
  isShowSearch = false;
  keyword: string = ''
  public nameForm:FormGroup;
  products:Product[];


  @ViewChild('search') search: ElementRef | undefined;
  @ViewChild('submit') submit: ElementRef | undefined;
  @ViewChild('toggleBtn') toggleBtn: ElementRef | undefined;

  constructor(private renderer: Renderer2,private router:Router,private formBuilder: FormBuilder,private productService:ProductService) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.search?.nativeElement && e.target !== this.submit?.nativeElement) {
        this.isShowSearch = false;
      }
      if (e.target === this.toggleBtn?.nativeElement) {
        this.isShowSearch = true;
      }
    });

    this.nameForm = this.formBuilder.group({
      name: ''
    });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    const keyword = this.nameForm.get('name')?.value
    console.log("asdsadsdsad : " + keyword)
     this.router.navigate(['shop',keyword] )

   }

   
}
