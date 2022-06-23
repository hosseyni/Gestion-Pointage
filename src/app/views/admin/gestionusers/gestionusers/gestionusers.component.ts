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

  listusers :UserModel[] = [];
  sexe:string | undefined;
  modalRow: any;
  addfonctionalitiservice: any;
  constructor(private gestionusertservice :GestionusersService , private router: Router , private modalService : NgbModal) { }

  ngOnInit(): void {
    this.GetUsers();
  }
  
  GetUsers(){
    this.gestionusertservice.GetUsers().then((response) => {
      console.log("response")
   
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
  DeletePointeuse(value: any){
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


AddFonctionnalitie(){
  let defaultCheck1 =  (<HTMLInputElement>document.getElementById('defaultCheck1')).value;
  let defaultCheck2 =  (<HTMLInputElement>document.getElementById('defaultCheck2')).value;
  let defaultCheck3 =  (<HTMLInputElement>document.getElementById('defaultCheck3')).value;
  let defaultCheck4 =  (<HTMLInputElement>document.getElementById('defaultCheck4')).value;
  let defaultCheck5 =  (<HTMLInputElement>document.getElementById('defaultCheck5')).value;
  let defaultCheck6 =  (<HTMLInputElement>document.getElementById('defaultCheck6')).value;
  console.log("defaultCheck1" , defaultCheck1 , defaultCheck2 , defaultCheck3 , defaultCheck4 , defaultCheck5 , defaultCheck6)
  this.gestionusertservice.AddFonctionnalite({
    "lecture": true,
    "modification": true,
    "suppression": true,
  }).then((response:any) => {
      console.log("response" , response)

  })
  .catch((error:any) => {
    console.log("error" , error)
    });
  }

  open(content: any, tableRow : any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    console.log(tableRow)
    this.modalRow = tableRow;
    
  }

}
