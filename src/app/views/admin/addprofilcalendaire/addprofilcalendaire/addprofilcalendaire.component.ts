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
  typehoraire :String | undefined;
  traitement :String | undefined;

  constructor(private AddprofilcalendraireService : AddprofilcalendraireService , private router : Router) { }

  ngOnInit(): void {
    
    console.log("dattttttte" , this.myDate )
    this.GetHoraires()
    this.GetPauses()
  }


  onItemChange(value: any){
    console.log(" Value is : ", value.name );
    if(value.name == "type_horraire"){
         this.typehoraire = value.value
    }
    if(value.name == "horraire"){
      this.traitement = value.value
 }
  }

  AddProfilCalandaire(){

    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    let date_definit =  (<HTMLInputElement>document.getElementById('date_definit')).value;
    let date_couvrant =  (<HTMLInputElement>document.getElementById('date_couvrant')).value;
    let horaire_théorique =  (<HTMLInputElement>document.getElementById('horaire_théorique')).value;
    let Ecrete =  (<HTMLInputElement>document.getElementById('Ecrete')).value;
    let flexRadioDefault2 =  (<HTMLInputElement>document.getElementById('flexRadioDefault2')).value;
 
    console.log("dddddddd" , designation , date_definit , date_couvrant , horaire_théorique ,Ecrete ,  flexRadioDefault2 )

    this.AddprofilcalendraireService.AddProfilCalendaire({
      
        "couvrant":"15:02:30",
        "definition":"15:02:30",
        "designation": "test",
        "enrcetee":"15:02:30",
        "usePointeuse": true
      
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

  AddPointeuse(){

    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    let port =  (<HTMLInputElement>document.getElementById('port')).value;
    let company =  (<HTMLInputElement>document.getElementById('company')).value;
    let inputGroupSelect04 =  (<HTMLInputElement>document.getElementById('inputGroupSelect04')).value;
    let inputGroupSelect05 =  (<HTMLInputElement>document.getElementById('inputGroupSelect05')).value;
 
    console.log(designation , port , company , inputGroupSelect04 , inputGroupSelect05  )

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
  GetHoraires(){

    this.AddprofilcalendraireService.GetHoraires().then((response) => {
      console.log("listhoraire" ,response )
      if(response.length > 0 )  {
   
      }  
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }

  GetPauses(){

    this.AddprofilcalendraireService.GetPauses().then((response) => {
      console.log("listPause" ,response )
      if(response.length > 0 )  {
   
      }  
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }

  AddHoraire(){

    let horraire_specifique =  (<HTMLInputElement>document.getElementById('horraire_specifique')).value;
    let montant =  (<HTMLInputElement>document.getElementById('montant')).value;
    let reprise_pointage =  (<HTMLInputElement>document.getElementById('reprise_pointage')).value;
    let datatosend = {
      "horaireSpec":horraire_specifique+":00",
      "reprisePointage": reprise_pointage+":00:00",
      "montant": montant,
      "traitement":this.traitement,
      "typeHoraire": true

    }
    this.AddprofilcalendraireService.AddHoraire(datatosend).then((response) => {

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

    let designation =  (<HTMLInputElement>document.getElementById('designation-pause')).value;
    let flexRadioDefault2 =  (<HTMLInputElement>document.getElementById('flexRadioDefault2')).value;
    let date_debut =  (<HTMLInputElement>document.getElementById('date_debut')).value;
    let date_fin =  (<HTMLInputElement>document.getElementById('date_fin')).value;
    let datatosend = {
   
      "designation": designation,
      "temps_remunerer": 0,
      "typePause": "Aucun",
      
    }
 
    console.log(designation , flexRadioDefault2 , date_debut , date_fin )

    this.AddprofilcalendraireService.AddProfilCalendaire(datatosend).then((response) => {
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
