import { Component, OnInit } from '@angular/core';
import { BasicAuthService } from '../service/basic-auth.service';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private hardcodedAuthService: HardcodedAuthService,
    private basicAuthService: BasicAuthService,
    ) { }

  ngOnInit() {
    this.basicAuthService.logout()
  }

}
