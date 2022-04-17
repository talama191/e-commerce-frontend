import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) { }
  user:User
  registerMessage:String;
  ngOnInit(): void {
    this.logout()
      this.user= new User();
  }
  login(form: NgForm) {
    this.authService.adminLogin(form);
  }

  logout(){
    this.authService.logout();
  }
}
