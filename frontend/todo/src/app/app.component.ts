import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: '<h1>{{title}}</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  message = 'Welcome to Merc App'
}
