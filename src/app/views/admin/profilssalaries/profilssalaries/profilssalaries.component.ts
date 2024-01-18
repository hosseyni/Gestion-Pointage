import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProfilsalariesService } from './profilsalaries.service';
import { ProfilSalarieModel } from './profilsalariesModel';
import { ProfilCalendaireModel } from '../../profilscalendaires/profilcalandaireModel';
import { ProfilcalendaireService } from '../../profilscalendaires/profilscalendaires/profilcalendaire.service';

@Component({
  selector: 'app-profilssalaries',
  templateUrl: './profilssalaries.component.html',
  styleUrls: ['./profilssalaries.component.css']
})
export class ProfilssalariesComponent implements OnInit {

  ListProfilSalaries:ProfilSalarieModel[] = [];
 ListProfilCalendaire:ProfilCalendaireModel[] = []
 probleme=false;
 succes =false;
 afficherMsgContrainte = false;
 msg ="";
  idProfilSalaire:any;
  dim =true  
  lun =true 
  mard =true 
  merc =true 
  jeud=true 
  vend =true 
  samd =true 
  flexRadioDefault: any;
  constructor(private ProfilsalariesService : ProfilsalariesService ,
    private ProfilcalendaireService: ProfilcalendaireService,
     private router :Router) { }

  ngOnInit(): void {
    this.GetProfilSalaries()
    this.GetProfilCalendaires()
  }
  async GetProfilCalendaires(){
 
    await this.ProfilcalendaireService. GeProfilCalandaire().then((response) => {
     
          this.ListProfilCalendaire=response;
        
        console.log("response  ListProfilCalendaire=" ,this.ListProfilCalendaire)
     })
     .catch((error) => {
       console.log("error" , error)
       });
   }
  async GetProfilSalaries(){
 
   await this.ProfilsalariesService.GeProfilSalarie().then((response) => {
   /*   for (let i = 0; i <response.length ; i++){
 
         this.ListProfilSalaries.push(response[i])
       }*/
       this.ListProfilSalaries =response;

      console.log("ffffffff" ,this.ListProfilSalaries)
        
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }

  edit(card:any){
   this.idProfilSalaire = card.idProfilSalaire;


 console.log('edit card ', card);
 

   (<HTMLInputElement>document.getElementById('designation')).value =card.designation;
      (<HTMLInputElement>document.getElementById('time_soir')).value = card.horraireMatin.substring(0,5);
     (<HTMLInputElement>document.getElementById('time_matin')).value = card.horraireSoir.substring(0,5);;
    (<HTMLInputElement>document.getElementById('date')).value= String(card.jourDebutAnnee).substring(0,10);
   
 this.flexRadioDefault  =card.traitementRtt;;
  

 if(this.flexRadioDefault  === "Payer_les_heures_supplémentaires") {
  (<HTMLInputElement>document.getElementById('flexRadioDefault1')).checked =true;
  }

  if(this.flexRadioDefault  === "Annualiser_les_heures") {
    (<HTMLInputElement>document.getElementById('flexRadioDefault2')).checked=true;
    }

  if(this.flexRadioDefault  === "R_T_T") {
      (<HTMLInputElement>document.getElementById('flexRadioDefault3')).checked=true;
      }

  
   
  }
  async updateProfilSalarie(){
    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    let time_soir =  (<HTMLInputElement>document.getElementById('time_soir')).value;
    let time_matin =  (<HTMLInputElement>document.getElementById('time_matin')).value;
    let date =  (<HTMLInputElement>document.getElementById('date')).value;
    let flexRadioDefault ='R_T_T';
  
    let flexRadioDefault1 =  (<HTMLInputElement>document.getElementById('flexRadioDefault1')).checked;
   if(flexRadioDefault1) {
    flexRadioDefault ="Payer_les_heures_supplémentaires"
    }
     let flexRadioDefault2=  (<HTMLInputElement>document.getElementById('flexRadioDefault2')).checked;
     if(flexRadioDefault2) {
      flexRadioDefault ="Annualiser_les_heures"
      }
     let flexRadioDefault3 =  (<HTMLInputElement>document.getElementById('flexRadioDefault3')).checked;
     if(flexRadioDefault3) {
      flexRadioDefault ="R_T_T"
      }
    console.log('response add profil salarie ',{
      "idProfilSalaire":this.idProfilSalaire,
      "designation": designation,
      "horraireMatin":time_soir +":00",
      "horraireSoir": time_matin+":00",
      //"idProfilSalaire": 0,
      "jourDebutAnnee": date+"T06:22:30.151Z",
      "traitementRtt": flexRadioDefault

});


await this.ProfilsalariesService.updateProfilSalarie({
  "idProfilSalaire":this.idProfilSalaire,
  "designation": designation,
  "horraireMatin":time_soir +":00",
  "horraireSoir": time_matin+":00",
  //"idProfilSalaire": 0,
  "jourDebutAnnee": date+"T06:22:30.151Z",
  "traitementRtt": flexRadioDefault

}).then((response) => {
  this.succes =true;
console.log('response add profil salarie ',response);

//window.location.href = '/admin/profilssalaries';
})
.catch((error) => {
  this.probleme = true;
  console.log("error" , error)
});
  }


  redirection(){
    window.location.href = '/admin/profilssalaries';
  }
  DeleteProfilSalarie(idProfilSalaire :number){

     
    this.ProfilsalariesService.DeleteProfilSalarie(idProfilSalaire).then((response) => {
      window.location.href = '/admin/profilssalaries';
 
    })
    .catch((error) => {
      console.log("error" , error)
      if(error.status===500){
        this.msg = " Vous ne pouvez pas  supprimer ce profil  !!";
                     
                this.afficherMsgContrainte = true;
      }
      console.log("error" , error)
      
      });
  
  }

 

}
