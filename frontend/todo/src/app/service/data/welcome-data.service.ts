import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log('Execute hello world bean service');
  }
  
  executeHelloWOrldBeanServiceWithPathVaraible(name){

    return this.http.get<HelloWorldBean>(`http://localhost:8080//hello-world-bean/path-variable/${name}`);
    //console.log('Execute hello world bean service');
  }
}
