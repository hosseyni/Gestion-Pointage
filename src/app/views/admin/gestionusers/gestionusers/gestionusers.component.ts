import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GestionusersService } from './gestionusers.service';
import { UserModel } from './userModel';

@Component({
  selector: 'app-gestionusers',
  templateUrl: './gestionusers.component.html',
  styleUrls: ['./gestionusers.component.css']
})
export class GestionusersComponent implements OnInit {

  listusers =new Array();
  sexe:string | undefined;
  modalRow: any;
  addfonctionalitiservice: any;
  editUser : any;
  listeFoncionalite = new Array();
  editUserId: any;
  listeFoncions: any;
  constructor(private gestionusertservice :GestionusersService , private router: Router , private modalService : NgbModal) { }

  ngOnInit(): void {
    this.GetUsers();
  }


 async  editFonction(user:any){
  await    this.gestionusertservice.getFonctions().then((response:any) => {
    console.log("response liste  Fonctionnalite  " , response)
    this. listeFoncions =response
     })
.catch((error:any) => {
  console.log("error" , error)
  });



  this.editUserId =user.idUsager;
  this.editUser = user;
   console.log('User FONCTIONALITES ', user.fonctionalities);
      this. listeFoncionalite =  user.fonctionalities
     
      for(let item of this.listeFoncionalite ){
        console.log("fonction ",item.fonction)
       
        }
   
  }
  verifCheck(fct:any){
    let res = false
    let i=0
    for(let fnctlt of this.listeFoncionalite){
      if(fnctlt.idFonction===fct.idFonction ){
        res= fnctlt.lecture
        (<HTMLInputElement>document.getElementById('lecture'+i)).checked = fnctlt.lecture
        (<HTMLInputElement>document.getElementById('Ajouter'+i)).checked = fnctlt.ajout
        (<HTMLInputElement>document.getElementById('modification'+i)).checked = fnctlt.modification
        (<HTMLInputElement>document.getElementById('uppression'+i)).checked = fnctlt.uppression
      }
      i++
    }
  
    
  }



   async AddFonctionnalitie(){
      let i=0; 
          for(let fnctlt of this.listeFoncionalite){
          //  console.log('Foncionalite ',fnctlt );
            let lecture1 =  (<HTMLInputElement>document.getElementById('lecture'+i)).checked;
           
       
        
        
            let iduser = this.editUserId;
            console.log('id usager ',iduser );
            
          let idFonction =fnctlt.fonction.idFonction;
       
          let lecture =  (<HTMLInputElement>document.getElementById('lecture'+i)).checked;
           let ajout =  (<HTMLInputElement>document.getElementById('Ajouter'+i)).checked;
           let modification =  (<HTMLInputElement>document.getElementById('modification'+i)).checked;
           let suppression =  (<HTMLInputElement>document.getElementById('suppression'+i)).checked;
           let obj ={
            "usager" :{"idUsager":iduser},
            //"usager":this.editUser,
             "idFonctionalities":fnctlt.idFonctionalities,
             "idFonction":idFonction,
             "ajout":ajout,
             "lecture": lecture,
             "modification": modification,
             "suppression": suppression
           }
           console.log('obj  ',obj );
          
       await    this.gestionusertservice.updateFonctionalite(obj).then((response:any) => {
              console.log("response add  Fonctionnalite  " , response)
              window.location.href ='/admin/gestionusers';
            //  window.location.reload();
        
          })
          .catch((error:any) => {
            console.log("error" , error)
            });
          
           
           i++;
          }
      
      
        }
      



  
  GetUsers(){
    this.gestionusertservice.GetUsers().then((response) => {
      console.log("liste user ",response)
   
      if(response.length > 0 )  {
       
        for (let i = 0; i <response.length ; i++){
      
          this.listusers.push(response[i])
          
      }
    }
    })
    .catch((error) => {
      console.log("error" , error)
      });
}
DeleteUser(value: any){
      this.gestionusertservice.DeleteUser(value).then((response) => {
        window.location.href   = '/admin/gestionusers';
  
      })
      .catch((error) => {
        console.log("error" , error)
        });
    
    }

    UpdateUser(idusagers: any){
      console.log(idusagers)
      let nom = (<HTMLInputElement>document.getElementById('nom')).value;
      let prenom =  (<HTMLInputElement>document.getElementById('prenom')).value;
      let username =  (<HTMLInputElement>document.getElementById('username')).value;
      let Email = (<HTMLInputElement>document.getElementById('Email')).value;
      let date =  (<HTMLInputElement>document.getElementById('date')).value;
      let flexRadioDefault1 = (<HTMLInputElement>document.getElementById('flexRadioDefault1')).value;
      let flexRadioDefault2 = (<HTMLInputElement>document.getElementById('flexRadioDefault2')).value;
      if(flexRadioDefault1){
         this.sexe == "Homme"
      }else {
        this.sexe == "Femme"
      }
      
      let dattosend= {
        
          "dateInscrit": new Date(),
          "dateNaissance": date,
          "email": Email,
          "nom": nom,
          "prenom": prenom,
          "password":"123456",
          "sexe": this.sexe,
          "username": username
          
        }
      
      console.log(dattosend , Date.now() )
      this.gestionusertservice.UpdateUser(dattosend, idusagers).then((response) => {
        console.log("response")
        window.location.href   = '/admin/gestionusers';
  
      })
      .catch((error) => {
        console.log("error" , error)
        });
        
    }



  open(content: any, tableRow : any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    console.log(tableRow)
    this.modalRow = tableRow;
    
  }

}
