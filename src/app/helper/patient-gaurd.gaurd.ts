import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterOutlet, RouterStateSnapshot, UrlTree ,} from '@angular/router';
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../services/user/login.service';


@Injectable({
  providedIn:'root'
})
export class PatientGuard implements CanActivate{
  
  constructor(private login:LoginService, private router:Router,private snack:MatSnackBar){

  }

  
  
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     console.log(this.login.isLoggedIn())
      if(this.login.isLoggedIn() && this.login.getUserRole()=="PATIENT")
      {
        return true;
      }
      else
      this.router.navigate(['login']);
      this.snack.open("!! user page not actiavted !!","☹️",{
        duration:3000
      });

      return false;



  }



 
};