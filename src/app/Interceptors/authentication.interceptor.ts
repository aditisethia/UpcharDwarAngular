import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/user/login.service';


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private login:LoginService){
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq=request;
    const token= this.login.getToken();
   

 if(token!=null){
 authReq=authReq.clone({
    setParams:{Authorization:`${token}`},
});

}


    return next.handle(authReq);
  }
}
export const authInterceptorProviders=[
  {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi : true,
  },
];
