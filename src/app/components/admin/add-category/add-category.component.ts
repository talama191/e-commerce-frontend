import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category'
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category: Category;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  addCategory(form: NgForm) {
    this.categoryService.addCategory(form).subscribe({
      next: (response) => alert('success')
      ,
      error: (error) => alert('failed'),
    });
  }
}
