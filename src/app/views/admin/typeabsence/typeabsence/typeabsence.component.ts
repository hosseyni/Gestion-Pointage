import { Component, OnInit } from '@angular/core';
import { ServiceAppService } from 'src/app/service-app.service';
import { TypeabsenceService } from '../typeabsence.service';
import { TypeAbsenceModel } from '../typeAbsenceModel';

@Component({
  selector: 'app-typeabsence',
  templateUrl: './typeabsence.component.html',
  styleUrls: ['./typeabsence.component.css']
})
export class TypeabsenceComponent implements OnInit {

  listAbsence = new Array();
  idTypeAbsence: any;
  typeAbsence: any;
  afficherMsgContrainte=false;
  msg="";
 

  constructor( private TypeabsenceService : TypeabsenceService , private ServiceAppService:ServiceAppService ) {}

  ngOnInit(): void {
   this.GetListAbsence();
  
  }

  editTypeAbsence(item:any){
    console.log('type absence ',item);
    this.idTypeAbsence = item.idTypeAbsence;



     (<HTMLInputElement>document.getElementById('designation')).value =item.designation;
     (<HTMLInputElement>document.getElementById('color')).value = item.couleur;
   

   let TRAITEMENT =item.traiteAbsence;
  console.log('traitement ',TRAITEMENT);
  
  if(TRAITEMENT === "Non_Comptabilisé") {
    (<HTMLInputElement>document.getElementById('flexRadioDefault11')).checked=true
   }

   if(TRAITEMENT === "Comptabilisé") {
    (<HTMLInputElement>document.getElementById('flexRadioDefault12')).checked=true
   }

   if(TRAITEMENT === "Pris_en_tant_que_RTT") {
    (<HTMLInputElement>document.getElementById('flexRadioDefault13')).checked=true
   }

   if(TRAITEMENT === "Pris_en_tant_que_congé_paye") {
    (<HTMLInputElement>document.getElementById('flexRadioDefault14')).checked=true
   }





  
  let flexRadioDefaultAnnulation =item.typeContabilisation;
  
  if(flexRadioDefaultAnnulation === "Personnalisable_par_operateur") {
    (<HTMLInputElement>document.getElementById('flexRadioDefault1')).checked=true
   }
   if(flexRadioDefaultAnnulation === "Journe_complet") {
    (<HTMLInputElement>document.getElementById('flexRadioDefault2')).checked=true
   }

   if(flexRadioDefaultAnnulation === "Demi_jour") {
    (<HTMLInputElement>document.getElementById('flexRadioDefault3')).checked=true
   }

  }

 async updateAbsense(){

  let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
  let color =  (<HTMLInputElement>document.getElementById('color')).value;
 // let flexRadioDefault1 =  (<HTMLInputElement>document.getElementById('flexRadioDefault1')).value;
 // let flexRadioDefault2 =  (<HTMLInputElement>document.getElementById('flexRadioDefault2')).value

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


  this.typeAbsence ={
"idTypeAbsence":this.idTypeAbsence,
"couleur":color,
"designation":designation,
"traiteAbsence":TRAITEMENT,
"typeContabilisation":flexRadioDefaultAnnulation

};
console.log('obj avan add ',this.typeAbsence);


  await  this.TypeabsenceService.updateAbsence(this.typeAbsence).then((response) => {
      console.log("response edit ",response);
      
      window.location.href = '/admin/typeabsence';
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }




  GetListAbsence(){
    this.TypeabsenceService.ListAbsence().then((response) => {
      console.log("response  ",response)
      for (let i = 0; i <response.length ; i++){
 
        this.listAbsence.push(response[i])
      }
    }).catch((error) => {
      console.log("error" , error)
      });
  }

  
  DeleteAbsence(idAbsence :any){

     
    this.TypeabsenceService.DeleteAbsence(idAbsence).then((response) => {
      console.log("response" , response)
      window.location.href = '/admin/typeabsence';
 
    })
    .catch((error) => {
      console.log("error" , error)
      if(error.status===500){
        this.msg = " Vous ne pouvez pas  supprimer ce type , Déja etait affecté a un département !!";
                     
                this.afficherMsgContrainte = true;
      }
      console.log("error" , error)
      
      });
  
  }

}
