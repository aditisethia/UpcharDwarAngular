import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import baseUrl from './helper';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginStatusSubject=new Subject<boolean>();



  constructor(private http: HttpClient,private router:Router) { }
   //current user:which is logged in
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/auth/current-user`)
  }


  //generate token

  public generateToken(loginData: any) {
    console.log("...........");

    return this.http.post(`${baseUrl}/auth/login`, loginData);
  }

  //setlogin user: set token in localstorage

  public setLoginUser(token: any) {

    localStorage.setItem('token', token);

    return true;
  }


  public isLoggedIn() {
    let tokenStr = localStorage.getItem("token")
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null)
      return false;

      return true;

  }

  //logout : remove token from local storage
  public logout() {
    localStorage.removeItem('token');
   localStorage.removeItem('user');
   this.router.navigate(['login'])
   return true;
  }
  //get token
  public getToken() {
    return localStorage.getItem('token');
  }
  //set user details
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  //getUser
  public getUser() {
    let userStr = localStorage.getItem("user");
    if (userStr != null)
      return JSON.parse(userStr);

      this.logout();
      return null;

  }

  //get user role

  public getUserRole():any[] {
    let user = this.getUser()
    let roles: any[]=[];
   user.userRole.forEach((ur :any)=> {
         roles.push(ur.role.roleName);
   });

    console.log(user.userRole[0].role.roleName);
    return roles;
  }



}
