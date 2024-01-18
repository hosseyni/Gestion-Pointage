import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestiondepartementService } from '../../gestiondepartements/gestiondepartements/gestiondepartement.service';
import { AddpointeuseService } from './addpointeuse.service';

@Component({
  selector: 'app-addpointeuse',
  templateUrl: './addpointeuse.component.html',
  styleUrls: ['./addpointeuse.component.css']
})
export class AddpointeuseComponent implements OnInit {

  constructor(private AddpointeuseService : AddpointeuseService ,
      private  gestiondepartementService: GestiondepartementService ,
    
    private router : Router) { }
  listCompagnies = new Array();
  pointeuseModal ={
    "adresseIp": null,
    "connexion": false,
    "designation": null,
    "etat": true,
    "idPointeuse": null,
    "port": null,
    "principale":  null,
    "type":  null
  }
 async ngOnInit(){
   await this.gestiondepartementService.GeDepartement().then(data=>{

   console.log('liste compagnie ', data);
   
    this.listCompagnies = data;
   });
  }

 async AddPointeuse(){

    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    let port =  (<HTMLInputElement>document.getElementById('port')).value;
    let company =  (<HTMLInputElement>document.getElementById('company')).value;
    let inputGroupSelect04 =  (<HTMLInputElement>document.getElementById('inputGroupSelect04')).value;
    let inputGroupSelect05 =  (<HTMLInputElement>document.getElementById('inputGroupSelect05')).value;
 
    console.log(designation , port , company , inputGroupSelect04 , inputGroupSelect05 );

const pointeuse ={
  "adresseIp": company,
  "connexion": true,
  "designation": designation,
  "etat": true,
  "idPointeuse": 1,
  "port": port,
  "principale": true,
  "type": inputGroupSelect05
}
console.log('pointeuse     ',pointeuse)
await  this.AddpointeuseService.AddPointeuse(pointeuse).toPromise().then((response) => {
      console.log('post pointeuuuuuse ',response);
      //  window.location.href = '/admin/handkeys';
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }





}
