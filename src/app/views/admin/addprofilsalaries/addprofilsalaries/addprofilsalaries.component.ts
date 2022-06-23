import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddprofilsalariesService } from './addprofilsalaries.service';

@Component({
  selector: 'app-addprofilsalaries',
  templateUrl: './addprofilsalaries.component.html',
  styleUrls: ['./addprofilsalaries.component.css']
})
export class AddprofilsalariesComponent implements OnInit {

  constructor( private AddprofilsalariesService : AddprofilsalariesService  , private router : Router) { }

  ngOnInit(): void {
  }

  AddProfilSalarie(){

    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    let time_soir =  (<HTMLInputElement>document.getElementById('time_soir')).value;
    let time_matin =  (<HTMLInputElement>document.getElementById('time_matin')).value;
    let date =  (<HTMLInputElement>document.getElementById('date')).value;

    let flexRadioDefault1 =  (<HTMLInputElement>document.getElementById('flexRadioDefault1')).checked;
    let flexRadioDefault2=  (<HTMLInputElement>document.getElementById('flexRadioDefault2')).checked;
    let flexRadioDefault3 =  (<HTMLInputElement>document.getElementById('flexRadioDefault3')).checked;
 
    //console.log("dddddddd" , designation , time_soir +":00" , time_matin+":00" , date+"T06:22:30.151Z" ,flexRadioDefault1 ,flexRadioDefault2 ,flexRadioDefault3  )

    this.AddprofilsalariesService.AddProfilSalarie({
 
        "designation": designation,
        "horraireMatin":time_soir +":00",
        "horraireSoir": time_matin+":00",
        "idProfilSalaire": 0,
        "jourDebutAnnee": date+"T06:22:30.151Z",
        "traitementRtt": flexRadioDefault1

  }).then((response) => {
 
  window.location.href = '/admin/profilssalaries';
  })
  .catch((error) => {
    console.log("error" , error)
    });
}
}
