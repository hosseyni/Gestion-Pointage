import { Component, OnInit } from '@angular/core';
import { AddsessionService } from './addsession.service';

@Component({
  selector: 'app-addsession',
  templateUrl: './addsession.component.html',
  styleUrls: ['./addsession.component.css']
})
export class AddsessionComponent implements OnInit {
  
  sexe:String | undefined

  constructor(private addsessionservice : AddsessionService) { }

  ngOnInit(): void {
  }
  
  AddUsers(){

    let nom = (<HTMLInputElement>document.getElementById('nom')).value;
    let prenom =  (<HTMLInputElement>document.getElementById('prenom')).value;
    let username =  (<HTMLInputElement>document.getElementById('username')).value;
    let Email = (<HTMLInputElement>document.getElementById('Email')).value;
    let date =  (<HTMLInputElement>document.getElementById('date')).value;
    let flexRadioDefault1 = (<HTMLInputElement>document.getElementById('flexRadioDefault1')).value;
    let flexRadioDefault2 = (<HTMLInputElement>document.getElementById('flexRadioDefault2')).value;
    if(flexRadioDefault1){
       this.sexe == "Homme"
    }else if(flexRadioDefault2) {
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
    
    console.log(dattosend )

    this.addsessionservice.AddUsers(dattosend).then((response) => {
      window.location.href   = '/admin/gestionusers';

    })
    .catch((error) => {
      console.log("error" , error)
      });
}

}
