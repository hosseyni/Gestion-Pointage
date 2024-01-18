import { Component } from '@angular/core';
import { ServiceAppService } from './service-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BIOTIME';
  constructor(public serviceappservice: ServiceAppService){

  }
}
