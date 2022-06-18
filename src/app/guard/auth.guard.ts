import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { UserdataService } from '../service/userdata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth:AuthService,private route:Router ,private  service:UserdataService)
  {

  }
  canActivate(): boolean {  
    if(this.service.isLogin)
    { return true

    }
    else
    {
      this.route.navigate(['/mainlogin'])
      return false
    }
}  
  
  
}
