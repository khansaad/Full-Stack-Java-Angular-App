
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthService } from '../service/basic-auth.service';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "mercurial"
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router
  //Dependency Injection
  constructor(private router: Router,
    private hardcodedAuthService: HardcodedAuthService,
    private basicAuthService: BasicAuthService) { }

  ngOnInit() {
  }

  // handleLogin(){
  //   //console.log(this.username)
  //   //if(this.username==='mercurial' && this.password === 'dummy'){
  //   if(this.hardcodedAuthService.authenticate(this.username, this.password))  {
  //   //Redirect to Welcome Page
  //     this.router.navigate(['welcome',this.username])
  //     this.invalidLogin = false
  //   } else {
  //     this.invalidLogin = true
  //   }
  // }

  handleBasicAuthLogin(){
    //console.log(this.username)
    //if(this.username==='mercurial' && this.password === 'dummy'){
    this.basicAuthService.executeAuthService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        }
      )
  }
}
