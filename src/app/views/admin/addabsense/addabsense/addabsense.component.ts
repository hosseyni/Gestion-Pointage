import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddabsenceService } from './addabsence.service';

@Component({
  selector: 'app-addabsense',
  templateUrl: './addabsense.component.html',
  styleUrls: ['./addabsense.component.css']
})
export class AddabsenseComponent implements OnInit {

  constructor( private AddabsenceService : AddabsenceService  , private router : Router) { }

  ngOnInit(): void {
  }

  AddTypeAbsence(){

    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    let color =  (<HTMLInputElement>document.getElementById('color')).value;
    let flexRadioDefault2 =  (<HTMLInputElement>document.getElementById('flexRadioDefault2')).value;
    let flexRadioDefault1 =  (<HTMLInputElement>document.getElementById('flexRadioDefault1')).value;
 
    console.log("dddddddd" , designation , color ,flexRadioDefault1 ,flexRadioDefault2 )

    this.AddabsenceService.AddTypeAbsence({
      
        "couleur": "red",
        "designation": designation,
        "traiteAbsence": "Comptabilisé",
        "typeContabilisation": "Demi_jour"
      

  }).then((response) => {
    this.router.events.subscribe((val ) => {
      // see also 
      console.log("ffffffff" , val )
      this.router.navigate(['/admin/profilssalaries'])
  });

  })
  .catch((error) => {
    console.log("error" , error)
    });
}

}
