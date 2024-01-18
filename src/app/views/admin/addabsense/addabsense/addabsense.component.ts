import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddabsenceService } from './addabsence.service';

@Component({
  selector: 'app-addabsense',
  templateUrl: './addabsense.component.html',
  styleUrls: ['./addabsense.component.css']
})
export class AddabsenseComponent implements OnInit {
  traiteAbsence: any;
  typeContabilisation: any;
  succes =false
  probleme =false;
  constructor( private AddabsenceService : AddabsenceService  , 
  
    private router : Router) { }

  ngOnInit(): void {
  }



  
  onItemChange(value: any){
    console.log(" Value is : ", value.name );
    if(value.name === "flexRadioDefault1"){
         this.traiteAbsence = value.value
       
    }
  
 if(value.name === "flexRadioDefault2"){
  this.typeContabilisation = value.value

}
  }

 async AddTypeAbsence(){

  


    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    let color =  (<HTMLInputElement>document.getElementById('color')).value;
    // TRAITEMENT

    let TRAITEMENT ="Non_Comptabilisé";
  
    let TRAITEMENT1 =  (<HTMLInputElement>document.getElementById('flexRadioDefault11')).checked;
   if(TRAITEMENT1) {
    TRAITEMENT ="Non_Comptabilisé"
    }
     let TRAITEMENT2=  (<HTMLInputElement>document.getElementById('flexRadioDefault12')).checked;
     if(TRAITEMENT2) {
      TRAITEMENT ="Comptabilisé"
      }
     let TRAITEMENT3 =  (<HTMLInputElement>document.getElementById('flexRadioDefault13')).checked;
     if(TRAITEMENT3) {
      TRAITEMENT ="Pris_en_tant_que_RTT"
      }
      let TRAITEMENT4 =  (<HTMLInputElement>document.getElementById('flexRadioDefault13')).checked;
      if(TRAITEMENT4) {
       TRAITEMENT ="Pris_en_tant_que_congé_paye"
       }

//Annulation/Traitement RTT

   let flexRadioDefaultAnnulation ="Personnalisable_par_operateur";
  
    let flexRadioDefault1 =  (<HTMLInputElement>document.getElementById('flexRadioDefault1')).checked;
   if(flexRadioDefault1) {
    flexRadioDefaultAnnulation ="Personnalisable_par_operateur"
    }
     let flexRadioDefault2=  (<HTMLInputElement>document.getElementById('flexRadioDefault2')).checked;
     if(flexRadioDefault2) {
      flexRadioDefaultAnnulation ="Journe_complet"
      }
     let flexRadioDefault3 =  (<HTMLInputElement>document.getElementById('flexRadioDefault3')).checked;
     if(flexRadioDefault3) {
      flexRadioDefaultAnnulation ="Demi_jour"
      }

/*
absences: []
company: {idCompany: 45, designation: 'Abbott Laboratories', usagers: Array(0), profilCalendaires: Array(0), profilSalaires: Array(0)}
couleur: "red"
designation: "paternite"
idTypeAbsence: 1
traiteAbsence: "Comptabilisé"
typeContabilisation: "Journe_complet"


*/

console.log('obj avan add ',{
  "couleur":color,
  "designation":designation,
  "traiteAbsence":TRAITEMENT,
  "typeContabilisation":flexRadioDefaultAnnulation 

});


  await  this.AddabsenceService.AddTypeAbsence({
      "couleur":color,
      "designation":designation,
      "traiteAbsence":TRAITEMENT,
      "typeContabilisation":flexRadioDefaultAnnulation 

    }).then((response) => {
      console.log("response add ",response);
      this.succes = true;
    //  window.location.href = '/admin/typeabsence';
    })
    .catch((error) => {
      this.probleme =true;
      console.log("error" , error)
      });
}

redirection(){
  window.location.href = '/admin/typeabsence'
}



}



