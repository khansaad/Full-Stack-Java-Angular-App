import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWOrldBeanService(){

    return this.http.get<HelloWorldBean>('${API_URL}/hello-world-bean');
    //console.log('Execute hello world bean service');
  }
  
  executeBasicAuthService(name){

    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })

    return this.http.get<HelloWorldBean>(
      `${API_URL}/hello-world-bean/path-variable/${name}`);
      //{headers});

    //console.log('Execute hello world bean service');
  }

  // createBasicAuthenticationHttpHeader(){
  //   let username = 'mercurial'
  //   let password = 'dummy'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    
  //   return basicAuthHeaderString;
  // }
  //Access to XMLHttpRequest at 'http://localhost:8080//hello-world-bean/path-variable/mercurial'
  // from origin 'http://localhost:4200' has been blocked by CORS policy: 
  //No 'Access-Control-Allow-Origin' header is present on the requested resource.
  // :4200/welcome/mercurial:1 Access to XMLHttpRequest at 'http://localhost:8080//hello-world-bean/path-variable/mercurial'
  //  from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: 
  // No 'Access-Control-Allow-Origin' header is present on the requested resource.
}
