import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessageFromService: string
  name = ''
  //ActicatedRoute
  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {

    this.name = this.route.snapshot.params['name'];
    //console.log(this.name)
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWOrldBeanService());
    this.service.executeHelloWOrldBeanService().subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log('last line')
    //console.log('Get Welcome Message');
  }

  getWelcomeMessageWithParam(){
    //console.log(this.service.executeHelloWOrldBeanService());
    this.service.executeHelloWOrldBeanServiceWithPathVaraible(this.name).subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log('last line')
    //console.log('Get Welcome Message');
  }
  handleErrorResponse(error){
    console.log(error)
    console.log(error.error)
    console.log(error.error.message)
    this.welcomeMessageFromService = error.error.message
  }

  handleSuccessResponse(response){
    this.welcomeMessageFromService = response.message
    console.log(response.message);
  }

}
