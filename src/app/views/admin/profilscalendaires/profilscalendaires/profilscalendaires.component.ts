import { Component, OnInit } from '@angular/core';
import { ProfilCalendaireModel } from '../profilcalandaireModel';
import { ProfilcalendaireService } from './profilcalendaire.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-profilscalendaires',
  templateUrl: './profilscalendaires.component.html',
  styleUrls: ['./profilscalendaires.component.css']
})
export class ProfilscalendairesComponent implements OnInit {

  ListProfilCalendaire:ProfilCalendaireModel[] = []
  idProfilCalendaire:any;
  afficherMsgContrainte=false;
  msg="";
 

  constructor(private ProfilcalendaireService:ProfilcalendaireService ) { }

  ngOnInit(): void {
    this.GetProfilCalendaires()
    
  }

  GetProfilCalendaires(){
 
    this.ProfilcalendaireService.GeProfilCalandaire().then((response) => {
      for (let i = 0; i <response.length ; i++){
 
         this.ListProfilCalendaire.push(response[i])
       }
      console.log("tessstttt" ,this.ListProfilCalendaire )
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }

  editCalendaire(item :any){

/*company: {idCompany: 46, designation: 'Exelon Corporation', usagers: Array(0), profilCalendaires: Array(1), profilSalaires: Array(0), …}
couvrant: "13:45:00"
definition: "13:45:00"
designation: "calend1"
enrcetee: "14:45:00"
horraireSpecifique: []
idProfilCalendaire: 5
salaireCalendaires: []
usePointeuse: true*/


      (<HTMLInputElement>document.getElementById('designation')).value =item.designation;
     (<HTMLInputElement>document.getElementById('date_definit')).value = item.definition ;
      (<HTMLInputElement>document.getElementById('date_couvrant')).value=item.couvrant;
  //  (<HTMLInputElement>document.getElementById('horaire_théorique')).value=item.horraireSpecifique;
    (<HTMLInputElement>document.getElementById('Ecrete')).value =item.enrcetee ;
    if(item.usePointeuse){
      (<HTMLInputElement>document.getElementById('flexRadioDefault1')).checked=true;
      (<HTMLInputElement>document.getElementById('flexRadioDefault2')).checked=false;
    }else{
      (<HTMLInputElement>document.getElementById('flexRadioDefault1')).checked=false;
      (<HTMLInputElement>document.getElementById('flexRadioDefault2')).checked=true;
    }
    
   
     

    console.log("item edit " , item )

this.idProfilCalendaire =item.idProfilCalendaire;


    
  }



  updateProfilCalandaire(){

    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    let date_definit =  (<HTMLInputElement>document.getElementById('date_definit')).value;

    let date_couvrant =  (<HTMLInputElement>document.getElementById('date_couvrant')).value;
    let horaire_théorique =  (<HTMLInputElement>document.getElementById('horaire_théorique')).value;
    let Ecrete =  (<HTMLInputElement>document.getElementById('Ecrete')).value;
    let flexRadioDefault1 =  (<HTMLInputElement>document.getElementById('flexRadioDefault1')).checked;
   let flexRadioDefault2 =  (<HTMLInputElement>document.getElementById('flexRadioDefault2')).checked;
 
    console.log("dddddddd" , designation , date_definit , date_couvrant , horaire_théorique ,Ecrete ,  flexRadioDefault2 )
   // console.log("usepointeuse " ,  flexRadioDefault2 )
     date_definit = String(date_definit).substring(0,5) ;
    
     date_couvrant =String(date_couvrant).substring(0,5)  ;
  
     Ecrete =String(  Ecrete ).substring(0,5)  ; ;
 


/*
 "couvrant": date_couvrant+":00",
        "definition":date_definit+":00",
        "designation": designation,
        "enrcetee":Ecrete+":00",
        "usePointeuse": true
        
        */

        if(flexRadioDefault1 ){

        }

    this.ProfilcalendaireService.UpdateProfilCalandaire({
        "idProfilCalendaire":this.idProfilCalendaire,
        "definition":date_definit+":00",
        "designation": designation,
        "enrcetee":Ecrete+":00",
        "couvrant": date_couvrant+":00",
        "usePointeuse": flexRadioDefault1
      
  }).then((response) => {
    console.log('response update profil calendaire', response);
    //this.su
    window.location.href = '/admin/profilscalendaires'
  })
  .catch((error) => {
    console.log("error" , error)
    });
}









  async DeleteProfilCalendaires(idProfilCalendaires :number){
    
    console.log('idProfilCalendaires    ', idProfilCalendaires);

     
  await  this.ProfilcalendaireService.DeleteProfilCalandaire(idProfilCalendaires).then((response) => {
     window.location.href = '/admin/profilscalendaires';
    })
    .catch((error) => {
      if(error.status===500){
        this.msg = " Vous ne pouvez pas  supprimer ce calendaire , Déja etait affecté a une pause !!";
                     
                this.afficherMsgContrainte = true;
      }
      console.log("error" , error)
      })
      
  
  }

      

}
