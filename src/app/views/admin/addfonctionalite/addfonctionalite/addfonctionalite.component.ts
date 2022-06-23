import { Component, OnInit } from '@angular/core';
import { AddfonctionalitéService } from '../addfonctionalité.service';

@Component({
  selector: 'app-addfonctionalite',
  templateUrl: './addfonctionalite.component.html',
  styleUrls: ['./addfonctionalite.component.css']
})
export class AddfonctionaliteComponent implements OnInit {

  constructor(private addfonctionalitiservice: AddfonctionalitéService) { }

  ngOnInit(): void {
  }
  AddFonctionnalitie(){
    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    this.addfonctionalitiservice.AddFonctionnalite({
      "lecture": true,
      "modification": true,
      "suppression": true,
    }).then((response) => {
        console.log("response" , response)

    })
    .catch((error) => {
      console.log("error" , error)
      });
    }


}
