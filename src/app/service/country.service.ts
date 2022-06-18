import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url1='http://localhost:4000/country';
  url2='http://localhost:4000/states'
  constructor(private http:HttpClient) { }
  Getcountry()
  {
    return this.http.get(this.url1)
  }
  Getstate(id:any)
  {
    return this.http.get(this.url2+"?country_id="+id)
  }
}
