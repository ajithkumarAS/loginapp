import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  url="http://localhost:3000/posts"
  constructor( private http:HttpClient,private _auth:AuthService) { }
  Loadcustomer():any
  {
   // const tk = this._auth.GetToken()
   //return this.http.get<any>("http://localhost:3000/posts?auth="+tk)
   
   return this.http.get<any>(this.url)
  }
  Savecustomer(data:any):any
  {   // const tk = this._auth.GetToken()
    //return this.http.post<any>("http://localhost:3000/posts?auth="+tk,data)
    return this.http.post<any>(this.url,data)
  }
  Removecustomer(id:any):any
  {
    return this.http.delete<any>(this.url+'/'+id)
  }
  Updatecustomer(data:any)
  {
    return this.http.put(`http://localhost:3000/posts/${data.id}`,data)
  }

  Updatecustomer1(data:any,id:number)
  {
    return this.http.put("http://localhost:3000/posts/"+id,data)
  }
  

}
