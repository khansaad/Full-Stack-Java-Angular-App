
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private hardcodedAuthService: HardcodedAuthService) { }

  ngOnInit() {
  }

  handleLogin(){
    //console.log(this.username)
    //if(this.username==='mercurial' && this.password === 'dummy'){
    if(this.hardcodedAuthService.authenticate(this.username, this.password))  {
    //Redirect to Welcome Page
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
