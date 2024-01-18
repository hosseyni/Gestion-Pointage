import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddprofilcalendraireService } from './addprofilcalendraire.service';

@Component({
  selector: 'app-addprofilcalendaire',
  templateUrl: './addprofilcalendaire.component.html',
  styleUrls: ['./addprofilcalendaire.component.css']
})
export class AddprofilcalendaireComponent implements OnInit {

  typeModal:string='Ajouter';
 /* 
  designation: "pause café"
  idPause: 1
  profilCalendaire: {idProfilCalendaire: 5, designation: 'mlkn:00', couvrant: '13:45:00', definition: '13:45:00', enrcetee: '14:45:00', …}
  temps_obligatoire: 10
  temps_remunerer: 5
  typePause: "Remunerer"


  horaire specifi
  0:
definition: "10:00:00"
horaireSpec: "09:00:00"
idHorraireSpecifique: 1
montant: 15
profilCalendaire: null
reprisePointage: "21:00:00"
traitement: null
typeHoraire: true
  
  */







  myDate = new Date();
  typehoraire :String | undefined;
  traitement :String | undefined;
  listeHoraireSpec =new Array();
  listePauses =new Array();
  idHorraireSpecifique: any;
  idPause: any;
  typePause: string ="Remunerer";
  constructor(private AddprofilcalendraireService : AddprofilcalendraireService , private router : Router) { }

  ngOnInit(): void {
    this.typePause="Remunerer";
      this.typehoraire = 'Horraire d\'arriver';
 
   this.traitement = 'Aucun';

    console.log("dattttttte" , this.myDate )
    this.GetHoraires()
    this.GetPauses()
  }
  editHoraire(item:any){
    console.log('modif horaire edit ',item);
    this.idHorraireSpecifique = item.idHorraireSpecifique;
  this.typeModal ='Modifier';
  (<HTMLInputElement>document.getElementById('horraire_specifique')).value = String(item.horaireSpec).substring(0,5);
  console.log('modif horaire edit horaires specif ',(<HTMLInputElement>document.getElementById('horraire_specifique')).value);
  (<HTMLInputElement>document.getElementById('montant')).value =item.montant;
  (<HTMLInputElement>document.getElementById('reprise_pointage')).value =String(item.reprisePointage).substring(0,2);
  (<HTMLInputElement>document.getElementById('horraire')).value =item.traitement;
  (<HTMLInputElement>document.getElementById('type_horraire')).value =item.typeHoraire;
 
 
}

  onItemChange(value: any){
    console.log(" Value is : ", value.name );
    if(value.name === "type_horraire"){
         this.typehoraire = value.value
       
    }
    if(value.name === "horraire"){
      this.traitement = value.value
 }
 if(value.name === "typePause"){
  this.typePause = value.value

}
  }

  AddProfilCalandaire(){

    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    let date_definit =  (<HTMLInputElement>document.getElementById('date_definit')).value;
    let date_couvrant =  (<HTMLInputElement>document.getElementById('date_couvrant')).value;
    let horaire_théorique =  (<HTMLInputElement>document.getElementById('horaire_théorique')).value;
    let Ecrete =  (<HTMLInputElement>document.getElementById('Ecrete')).value;
    let flexRadioDefault1 =  (<HTMLInputElement>document.getElementById('flexRadioDefault1')).checked;
 
    console.log("dddddddd" , designation , date_definit , date_couvrant , horaire_théorique ,Ecrete ,  flexRadioDefault1 )



    this.AddprofilcalendraireService.AddProfilCalendaire({
      
        "couvrant": date_couvrant+":00",
        "definition":date_definit+":00",
        "designation": designation,
        "enrcetee":Ecrete+":00",
        "usePointeuse": flexRadioDefault1
      
  }).then((response) => {
   window.location.href = '/admin/profilscalendaires'
  })
  .catch((error) => {
    console.log("error" , error)
    });
}


async   GetHoraires(){

   await this.AddprofilcalendraireService.GetHoraires().then((response) => {
      console.log("listhoraire" ,response )
      if(response.length > 0 )  {
   this.listeHoraireSpec =response;
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
          this.listePauses = response;
      }  
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }


  async deletePause(idPause: any){
    await  this.AddprofilcalendraireService.deletePause(idPause).then((response) => {
        console.log('response id delete pause ',response);

   window.location.href = '/admin/addprofilcalendaire';

 })
 .catch((error) => {
   console.log("error" , error)
   });
  }


  async DeleteHoraire(idHorraireSpecifique:any){

  
  await  this.AddprofilcalendraireService.deleteHoraire(idHorraireSpecifique).
       then((response) => {
           console.log('response id delete ',response);

      window.location.href = '/admin/addprofilcalendaire';
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }




 async AddHoraire(){

    let horraire_specifique =  (<HTMLInputElement>document.getElementById('horraire_specifique')).value;
    let montant =  (<HTMLInputElement>document.getElementById('montant')).value;
    let reprise_pointage =  (<HTMLInputElement>document.getElementById('reprise_pointage')).value;
    

    if(this.typeModal === 'Ajouter'){
      let datatosend = {
        "definition":horraire_specifique+":00",
        "horaireSpec":horraire_specifique+":00",
        "reprisePointage": reprise_pointage+":00:00",
        "montant": montant,
        "traitement":this.traitement,
        "typeHoraire":true
        // this.typehoraire
  
      }
  await  this.AddprofilcalendraireService.AddHoraire(datatosend).then((response) => {

      window.location.href = '/admin/addprofilcalendaire';
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
    }else{
      let datatosend = {
        "idHorraireSpecifique": this.idHorraireSpecifique,
        "definition":horraire_specifique+":00",
        "horaireSpec":horraire_specifique+":00",
        "reprisePointage": reprise_pointage+":00:00",
        "montant": montant,
        "traitement":this.traitement,
        "typeHoraire": true
  
      }

      console.log('updated horaires ',datatosend);
      
      await  this.AddprofilcalendraireService.updateHoraire(datatosend).then((response) => {

        window.location.href = '/admin/addprofilcalendaire';
   
      })
      .catch((error) => {
        console.log("error" , error)
        });
    }
  }


  editPause(item:any){
    console.log('modif pause edit ',item);
    /*designation: "pause café"
    idPause: 1
    profilCalendaire: {idProfilCalendaire: 5, designation: 'calend1', couvrant: '13:45:00', definition: '13:45:00', enrcetee: '14:45:00', …}
    temps_obligatoire: 10
    temps_remunerer: 5
    typePause: "Remunerer"*/




    this.idPause = item.idPause;
  this.typeModal ='Modifier';
  (<HTMLInputElement>document.getElementById('designation-pause')).value = item.designation ;
  (<HTMLInputElement>document.getElementById('typePause')).value=item.typePause;
  (<HTMLInputElement>document.getElementById('horaire')).value= item.temps_obligatoire;
  /* (<HTMLInputElement>document.getElementById('date_debut')).value;
 (<HTMLInputElement>document.getElementById('date_fin')).value;*/
 

}

initialiserChampPause(){
  (<HTMLInputElement>document.getElementById('designation-pause')).value = '' ;
  (<HTMLInputElement>document.getElementById('typePause')).value="Remunerer";
  (<HTMLInputElement>document.getElementById('horaire')).value= '';
}



changeTypePause(){
  this.typePause = "";
}

  async AddPause(){
    this.typeModal ='Ajouter';
    
    let designation =  (<HTMLInputElement>document.getElementById('designation-pause')).value;
  //  let flexRadioDefault2 =  (<HTMLInputElement>document.getElementById('typePause')).value;
    let  temps_obligatoire = (<HTMLInputElement>document.getElementById('horaire')).value;
    let date_debut =  (<HTMLInputElement>document.getElementById('date_debut')).value;
    let date_fin =  (<HTMLInputElement>document.getElementById('date_fin')).value;
   
    if(this.typeModal === 'Ajouter'){
   
    let datatosend = {
   
      "designation": designation,
      "temps_obligatoire":temps_obligatoire,
      "typePause": this.typePause,
      
    }
 
    console.log(designation ,'temps_obligatoire '+temps_obligatoire  , this.typePause, date_debut , date_fin )

   await this.AddprofilcalendraireService.AddPause(datatosend).then((response) => {
     window.location.href = '/admin/addprofilcalendaire';
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
    }else{
     
      let datatosend = {
         "idPause":this.idPause,
        "designation": designation,
        "temps_obligatoire": temps_obligatoire,
        "typePause": this.typePause,
        
      }
     await this.AddprofilcalendraireService.updatePause(datatosend).then((response) => {
     //   window.location.href = '/admin/addprofilcalendaire';
     console.log('response update pause ', response);
     
   
      })
      .catch((error) => {
        console.log("error" , error)
        });
      console.log('edit item');


    }
  }
}
