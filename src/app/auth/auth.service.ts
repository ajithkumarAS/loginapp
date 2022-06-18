import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import  'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
CurrentToken!:string
  constructor() { }

/*
  RegisterUser(email:any,password:any) // user register function
  {
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(res=>
      {
        console.log(res)
      })
      .catch(error=>{
        console.log(error)
      })
  }
  LoginUser(email:any,password:any)// user login function
  {
 firebase.auth().signInWithEmailAndPassword(email,password)
 .then(res=>
  { 
    console.log(res)
  })
  .catch(error=>{
    console.log(error)
  })
  }
  GetToken()
  {
    firebase.auth().currentUser?.getIdToken()
    .then((token:string)=>
    {
      this.CurrentToken =token;
    })
     return this.CurrentToken;
  }
IsLogged()
{
  return localStorage.getItem('token')!=null
}
  
  */
 
}
