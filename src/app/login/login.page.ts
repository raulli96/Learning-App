import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router) { }
  UserName: string;
  Password: string;  

  ngOnInit() {
  }

  LogMeIn(){

    if(this.UserName=="admin"&& this.Password=="admin123")
   {
    this.router.navigate(['/home'])
   }  
  }
  RegisterUser(){

    this.router.navigate(['/signup']) 
  }
}

