import { Component, OnInit } from '@angular/core';
import { TypeabsenceService } from '../typeabsence.service';

@Component({
  selector: 'app-typeabsence',
  templateUrl: './typeabsence.component.html',
  styleUrls: ['./typeabsence.component.css']
})
export class TypeabsenceComponent implements OnInit {

  constructor( private TypeabsenceService : TypeabsenceService ) {}

  ngOnInit(): void {

    this.TypeabsenceService.ListAbsence().then((response) => {
   
        console.log("ffffffff" , response ) 
    }).catch((error) => {
      console.log("error" , error)
      });
  }

}
