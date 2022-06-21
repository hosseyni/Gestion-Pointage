import { Component, OnInit } from '@angular/core';
import { AdddepartementService } from './adddepartement.service';

@Component({
  selector: 'app-adddepartement',
  templateUrl: './adddepartement.component.html',
  styleUrls: ['./adddepartement.component.css']
})
export class AdddepartementComponent implements OnInit {

  constructor( private addepartementservice : AdddepartementService) { }

  ngOnInit(): void {
  }
  AddDepartement(){
    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    this.addepartementservice.AddDepartement({
      "designation": designation,
    }).then((response) => {
        console.log("response" , response)

    })
    .catch((error) => {
      console.log("error" , error)
      });
    }
}
