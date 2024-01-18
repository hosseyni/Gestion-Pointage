import { Component, OnInit } from '@angular/core';
import { registerService } from './registerService';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  addedUser: any;

  constructor(private registerService: registerService) { }
// yourName
// yourEmail
// yourUsernam
// yourPassword

/*
{
  "badge": "string",
  "dateInscrit": "2022-07-03T12:39:28.645Z",
  "dateNaissance": "2022-07-03",
  "details": {
    "adresse": "string",
    "github": "string",
    "idDetails": 0,
    "linkedin": "string",
    "mobile": "string",
    "phone": "string",
    "profession": "string",
    "webstite": "string"
  },
  "email": "string",
  "empreinte": "string",
  "idUsager": 0,
  "nom": "string",
  "numero": "string",
  "password": "string",
  "prenom": "string",
  "proffession": "string",
  "role": {
    "idRole": 0,
    "role": "string"
  },
  "sexe": "autre",
  "username": "string"
}

*/

register (){
  let nom =  (<HTMLInputElement>document.getElementById('yourName')).value;
  let email =  (<HTMLInputElement>document.getElementById('yourEmail')).value;
  let username =  (<HTMLInputElement>document.getElementById('yourUsername')).value;
  let yourPassword =  (<HTMLInputElement>document.getElementById('yourPassword')).value;
  let user ={
    "email":email,
    "nom":nom,
    "username":username,
    "password":yourPassword
  }
this.registerService.regigister(user).then((response) => {
     
  this.addedUser =response;
  console.log('added user',this.addedUser);
  

})
.catch((error) => {
  console.log("error" , error)
  });
}
  ngOnInit(){


  }

}
