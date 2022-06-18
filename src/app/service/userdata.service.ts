import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

 isLogin:boolean=false
  constructor( private http: HttpClient) { 
    

  }
  url="http://localhost:8000/userdata"
  getUserdata(email:any)
  {
    return this.http.get(this.url+"?email="+email)
  }
 loadUserdata(data:any):any
 {
  return this.http.post<any>(this.url,data)
 }
 
}
