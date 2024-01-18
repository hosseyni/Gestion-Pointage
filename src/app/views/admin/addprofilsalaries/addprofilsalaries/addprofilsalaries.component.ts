import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilCalendaireModel } from '../../profilscalendaires/profilcalandaireModel';
import { ProfilcalendaireService } from '../../profilscalendaires/profilscalendaires/profilcalendaire.service';
import { AddprofilsalariesService } from './addprofilsalaries.service';
import { SalaireCalendaireService } from  './salaireCalendaireService'
@Component({
  selector: 'app-addprofilsalaries',
  templateUrl: './addprofilsalaries.component.html',
  styleUrls: ['./addprofilsalaries.component.css']
})
export class AddprofilsalariesComponent implements OnInit {

  ListProfilCalendaire=new Array();
  ListSalaireCalendaire= new Array() ;
  dim =true
  lun =true 
  mard =true 
  merc =true 
  jeud=true 
  vend =true 
  samd =true 
  constructor( private AddprofilsalariesService : AddprofilsalariesService  ,
     private router : Router ,
     private SalaireCalendaireService :SalaireCalendaireService,
      private ProfilcalendaireService: ProfilcalendaireService) { }

  ngOnInit(): void {

    this.GetProfilCalendaires()


   // this.GeProfilSalarie()
  }


  deleteItem(item:any,liste:any){
    const index = liste.indexOf(item);
    if (index !== -1) {
      liste.splice(index, 1);
     }
  
   
  }

  async AddProfilSalarie(){
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
 
      "designation": designation,
      "horraireMatin":time_soir +":00",
      "horraireSoir": time_matin+":00",
      //"idProfilSalaire": 0,
      "jourDebutAnnee": date+"T06:22:30.151Z",
     "traitementRtt": flexRadioDefault

});


await this.AddprofilsalariesService.AddProfilSalarie({
 
  "designation": designation,
  "horraireMatin":time_soir +":00",
  "horraireSoir": time_matin+":00",
  //"idProfilSalaire": 0,
  "jourDebutAnnee": date+"T06:22:30.151Z",
 "traitementRtt": flexRadioDefault

}).then((response) => {
console.log('response add profil salarie ',response);
//window.location.href = '/admin/profilssalaries';
})
.catch((error) => {
  console.log("error" , error)
});


  }


 async AddProfilSalarie1(){

    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    let time_soir =  (<HTMLInputElement>document.getElementById('time_soir')).value;
    let time_matin =  (<HTMLInputElement>document.getElementById('time_matin')).value;
    let date =  (<HTMLInputElement>document.getElementById('date')).value;

    let flexRadioDefault1 =  (<HTMLInputElement>document.getElementById('flexRadioDefault1')).checked;
 //   let flexRadioDefault2=  (<HTMLInputElement>document.getElementById('flexRadioDefault2')).checked;
   // let flexRadioDefault3 =  (<HTMLInputElement>document.getElementById('flexRadioDefault3')).checked;
 
    //console.log("dddddddd" , designation , time_soir +":00" , time_matin+":00" , date+"T06:22:30.151Z" ,flexRadioDefault1 ,flexRadioDefault2 ,flexRadioDefault3  )

    /*
    company: {idCompany: 11, designation: 'Coca-Cola Co.', usagers: Array(0), typeAbsences: Array(0)}
    designation: "employee"
    horraireMatin: "09:59:00"
    horraireSoir: "19:00:00"
    idProfilSalaire: 2
    jourDebutAnnee: "2021-01-01T19:59:00.000+00:00"
    salaireCalendaires: []
    traitementRtt: "Annualiser_les_heures"

    */
    console.log('response add profil salarie ',{
 
      "designation": designation,
      "horraireMatin":time_soir +":00",
      "horraireSoir": time_matin+":00",
      //"idProfilSalaire": 0,
    //  "jourDebutAnnee": date+"T06:22:30.151Z",
      "traitementRtt": flexRadioDefault1

});

   //"idProfilSalaire": 0,
   await this.AddprofilsalariesService.AddProfilSalarie({
 
        "designation": designation,
        "horraireMatin":time_soir +":00",
        "horraireSoir": time_matin+":00",
     
        "jourDebutAnnee": date+"T06:22:30.151Z",
        "traitementRtt": flexRadioDefault1

  }).then((response) => {
 console.log('response add profil salarie ',response);
 
  //window.location.href = '/admin/profilssalaries';
  })
  .catch((error) => {
    console.log("error" , error)
    });
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


async GetSalaireCalendaires(){
 
 await this.SalaireCalendaireService.GetSalaireCalandaire().then((response) => {
  
       this.ListProfilCalendaire=response;
     
     console.log("response  GetSalaireCalandaire" ,this.ListProfilCalendaire )
  })
  .catch((error) => {
    console.log("error" , error)
    });
}







GeProfilSalarie(){
 
  this.AddprofilsalariesService.GeProfilSalarie().then((response) => {
  
       this.ListProfilCalendaire=response;
     
     console.log("resssponse" ,this.ListProfilCalendaire )
  })
  .catch((error) => {
    console.log("error" , error)
    });
}
}
