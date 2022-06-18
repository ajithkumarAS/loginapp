import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomService } from '../service/custom.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
editData:any;
customerid:any

loginform! :FormGroup
  constructor( private service:CustomService,private route:ActivatedRoute) { 
   
  
  }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      "name":new FormControl('',[Validators.required,Validators.minLength(5)]),
      "id":new FormControl('',Validators.required),
      "email":new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      "phone":new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
  }
  get vname()
  {
    return this.loginform.get('name')
  }
  get vid()
  {
    return this.loginform.get('id')
  }
  get vemail()
  {
    return this.loginform.get('email')
  }
  get vpho()
  {
    return this.loginform.get('phone')
  }
  

  // savecustomer function
  Savecustomer()
  {
    if(this.loginform.valid)
    {
    
      this.service.Savecustomer(this.loginform.value).subscribe((result:any)=>
{
        })
    }
    alert("your details successfully saved")
  }
 

  }
