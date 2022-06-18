import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-mainreg',
  templateUrl: './mainreg.component.html',
  styleUrls: ['./mainreg.component.css']
})
export class MainregComponent implements OnInit {
registerform!:FormGroup;
  constructor( private _auth:AuthService, private route:Router,private service: UserdataService) { }

  get vname()
  {
    return this.registerform.get('name')
  }
  get vemail()
  {
    return this.registerform.get('email')
  }
  get vpass()
  {
    return this.registerform.get('password')
  }
  get vpho()
  {
    return this.registerform.get('phone')
  }
submit()
{
  if(this.registerform.valid)
  {
    this.route.navigateByUrl('mainlogin')
  }
  alert('your successfully registered')
}
  ngOnInit(): void {
    this.registerform = new FormGroup({
      'name':new FormControl('',[Validators.required,Validators.minLength(5)]),
      'email':new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      'password':new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
      'phone':new FormControl('',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])

    })
  }
 /*Onregister()
 {
   const email = this.registerform.get('email')?.value
   const password = this.registerform.get('password')?.value
this._auth.RegisterUser(email,password)
console.log(email)
 }
 */
onRegister()
{
  if(this.registerform.valid)
  {
    this.service.loadUserdata(this.registerform.value).subscribe((data:any)=>
    {
       console.log(data)
    })
  }
}
}
