import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
      this.user= new User();
  }
  login(form: NgForm) {
    this.authService.login(form);
  }

  logout(){
    this.authService.logout();
  }

  registration(){
    this.authService.register(this.user).subscribe(data=>{
      console.log("success")
           this.registerMessage = "success !!"
    }, error =>{
      console.log(error)
        this.registerMessage = error.error.message
    }
    )
  }
}
