import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../service/country.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 country:any;
 state:any;
 selectedCountry ={
  id:0,name:''
}

registerform!:FormGroup;
  constructor(private service:CountryService)
  {

  }
  onSelect(e:any)
  {
     const countryId = this.country[e.selectedIndex-1].id
     this.Loadstate(countryId)
  }
  Loadcountry()
  {
    this.service.Getcountry().subscribe((data)=>
    {
      this.country = data
    })
  }

// register form validate function
get vname()
{
  return this.registerform.get('name')
}
get vsur()
{
  return this.registerform.get('sur')
}
get vemail()
{
  return this.registerform.get('email')
}
get vpho()
{
  return this.registerform.get('phone')
}
get vage()
{
  return this.registerform.get('age')
}
get vdob()
{
  return this.registerform.get('dob')
}
get vpass()
{
  return this.registerform.get('password')
}
get vadd()
{
  return this.registerform.get('address')
}
get vcou()
{
  return this.registerform.get('country')
}
Submit()
{
  alert('form is successfully submitted')
}

  
  ngOnInit(): void {
    this.Loadcountry()

    //validate method
    this.registerform = new FormGroup({
      'name':new FormControl('',[Validators.required,Validators.minLength(5)]),
      'sur':new FormControl('',Validators.required),
      'email':new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      'phone':new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'age':new FormControl('',Validators.required),
      'dob':new FormControl('',Validators.required),
      'password':new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
      'address':new FormControl('',Validators.required),
      'country':new FormControl('',Validators.required)
    })
  } 

  Loadstate(id:any)
  {
    this.service.Getstate(id).subscribe((data:any)=>
    {
this.state = data;
    })
  }

}
