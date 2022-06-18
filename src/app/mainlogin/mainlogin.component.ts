import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouteReuseStrategy } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-mainlogin',
  templateUrl: './mainlogin.component.html',
  styleUrls: ['./mainlogin.component.css']
})
export class MainloginComponent implements OnInit {
loginform!:FormGroup;
  constructor(private _auth:AuthService,private route:Router,private service:UserdataService) { }

 get vemail()
  {
    return this.loginform.get('email')
  }
  get vpass()
  {
    return this.loginform.get('password')
  }
  Submit()
  {
    
    alert('your successfully login')
    
  }
user:any
 /*async  OnLogin()
  {
      const email =  this.loginform.get('email')?.value;
      const password =  this.loginform.get('password')?.value   
    this._auth.LoginUser(email,password);
   if(this.loginform.valid)
   {
     localStorage.setItem('token',this._auth.GetToken());
     this.route.navigate(['dashboard'])
   }

  }
  */
 
 onLogin()
 {
   this.service.getUserdata(this.loginform.get('email')?.value).subscribe((email:any)=>
   {
     console.log(email[0])
this.user = email[0]
if(this.user == undefined)
   {
alert("user not exsist")
   }
   else{
 var password = this.loginform.get('password')?.value
    if(password == this.user.password)
    {
      this.service.isLogin = true
      this.route.navigate(['/dashboard'])
    }
    else
    {
      alert("invalid username and password")
    }
   }

   })  
   
 }
 
 

  ngOnInit(): void {
    this.loginform = new FormGroup({
      'email': new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      'password':new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])
      
    });

    
  
    
    
  }


}
