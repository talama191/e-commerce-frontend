import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { HttpServerService } from 'src/app/services/http-server.service';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  caetgory:Category
  totalElements: number = 0;
  constructor(private route: ActivatedRoute, private httpServer: HttpServerService,private categoryService: CategoryService) { }

  ngOnInit(): void {
        this.categoryService.findAll().subscribe(data =>{
            this.categories = data
        })
  }

}
