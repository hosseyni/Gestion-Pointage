import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddprofilcalendraireService } from './addprofilcalendraire.service';

@Component({
  selector: 'app-addprofilcalendaire',
  templateUrl: './addprofilcalendaire.component.html',
  styleUrls: ['./addprofilcalendaire.component.css']
})
export class AddprofilcalendaireComponent implements OnInit {

  myDate = new Date();

  constructor(private AddprofilcalendraireService : AddprofilcalendraireService , private router : Router) { }

  ngOnInit(): void {
    
    console.log("dattttttte" , this.myDate )
  }


  onItemChange(value: any){
    console.log(" Value is : ", value );
  }

  AddPointeuse(){

    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    let port =  (<HTMLInputElement>document.getElementById('port')).value;
    let company =  (<HTMLInputElement>document.getElementById('company')).value;
    let inputGroupSelect04 =  (<HTMLInputElement>document.getElementById('inputGroupSelect04')).value;
    let inputGroupSelect05 =  (<HTMLInputElement>document.getElementById('inputGroupSelect05')).value;
 
    console.log(designation , port , company , inputGroupSelect04 , inputGroupSelect05 )

    this.AddprofilcalendraireService.AddProfilCalendaire({
      "adresseIp": company,
      "connexion": true,
      "designation": designation,
      "etat": true,
      "idPointeuse": 1,
      "port": port,
      "principale": true,
      "type": inputGroupSelect05
    }).then((response) => {
      this.router.events.subscribe((val ) => {
        // see also 
        console.log("ffffffff" , val ) 
    });
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }

  AddHoraire(){

    let horraire_specifique =  (<HTMLInputElement>document.getElementById('horraire_specifique')).value;
    let type_horraire =  (<HTMLInputElement>document.getElementById('type_horraire')).value;
    let horraire =  (<HTMLInputElement>document.getElementById('horraire')).value;
    let montant =  (<HTMLInputElement>document.getElementById('montant')).value;
    let reprise_pointage =  (<HTMLInputElement>document.getElementById('reprise_pointage')).value;
 
    console.log("gggggggggg" , horraire_specifique ,  type_horraire , horraire , montant , reprise_pointage )
    


    this.AddprofilcalendraireService.AddHoraire({
      "horaireSpec": {
        "date": this.myDate,
        "hours": horraire_specifique.slice(0,2),
        "minutes": horraire_specifique.slice(3,5),
        "month": this.myDate.getMonth,
        "seconds": this.myDate.getSeconds,
        "time": this.myDate.getTime,
        "year": 0
      },
      "reprisePointage": {
        "date": this.myDate,
        "hours": this.myDate.getHours,
        "minutes": this.myDate.getMinutes,
        "month": this.myDate.getMonth,
        "seconds": this.myDate.getSeconds,
        "time": this.myDate.getTime,
        "year": 0
      },
      "idHorraireSpecifique": 0,
      "montant": montant,
      "typeHoraire": type_horraire
    }).then((response) => {
      this.router.events.subscribe((val ) => {
        // see also 
        console.log("ffffffff" , val ) 
    });
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }

  AddPause(){

    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    let port =  (<HTMLInputElement>document.getElementById('port')).value;
    let company =  (<HTMLInputElement>document.getElementById('company')).value;
    let inputGroupSelect04 =  (<HTMLInputElement>document.getElementById('inputGroupSelect04')).value;
    let inputGroupSelect05 =  (<HTMLInputElement>document.getElementById('inputGroupSelect05')).value;
 
    console.log(designation , port , company , inputGroupSelect04 , inputGroupSelect05 )

    this.AddprofilcalendraireService.AddProfilCalendaire({
      "adresseIp": company,
      "connexion": true,
      "designation": designation,
      "etat": true,
      "idPointeuse": 1,
      "port": port,
      "principale": true,
      "type": inputGroupSelect05
    }).then((response) => {
      this.router.events.subscribe((val ) => {
        // see also 
        console.log("ffffffff" , val ) 
    });
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }
}
