import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthService: BasicAuthService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {

    // let username = 'mercurial'
    // let password = 'dummy'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    
    let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();

    if(basicAuthHeaderString && username){
    
        request = request.clone({
          setHeaders : {
            Authorization: basicAuthHeaderString
          }
        })
    }
    return next.handle(request)
  }
}
