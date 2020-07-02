import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  
})
export class SignupPage implements OnInit {
    get FirstName(){return this.myform.get('FirstName')}
    get LastName(){return this.myform.get('LastName')}
    get UserName(){return this.myform.get('UserName')}
    get PhoneNo(){return this.myform.get('PhoneNo')}
    get Email(){return this.myform.get('Email')}
    get Password(){return this.myform.get('Password')}

myform=this.mybuilder.group({
    FirstName:['',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    LastName:['',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
    UserName:['',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    PhoneNo:['',[Validators.required,Validators.maxLength(10)]],
    Email:['',[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.email]],
    Password:['',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]],

}
)

  constructor(private  mybuilder:FormBuilder ) { }

  ngOnInit() {


  }
}
