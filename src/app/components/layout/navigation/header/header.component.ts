import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUserId:number
  isLoggedIn = false
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.currentUserId = Number(localStorage.getItem("userId") as string)
    if(this.currentUserId !=0){
      this.isLoggedIn = true;
    }
  }

  
  logout(){
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['login'])
  }


}
