import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddpointeuseService } from './addpointeuse.service';

@Component({
  selector: 'app-addpointeuse',
  templateUrl: './addpointeuse.component.html',
  styleUrls: ['./addpointeuse.component.css']
})
export class AddpointeuseComponent implements OnInit {

  constructor(private AddpointeuseService : AddpointeuseService , private router : Router) { }

  ngOnInit(): void {
  }

  AddPointeuse(){

    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    let port =  (<HTMLInputElement>document.getElementById('port')).value;
    let company =  (<HTMLInputElement>document.getElementById('company')).value;
    let inputGroupSelect04 =  (<HTMLInputElement>document.getElementById('inputGroupSelect04')).value;
    let inputGroupSelect05 =  (<HTMLInputElement>document.getElementById('inputGroupSelect05')).value;
 
    console.log(designation , port , company , inputGroupSelect04 , inputGroupSelect05 )

    this.AddpointeuseService.AddPointeuse({
      "adresseIp": company,
      "connexion": true,
      "designation": designation,
      "etat": true,
      "idPointeuse": 1,
      "port": port,
      "principale": true,
      "type": inputGroupSelect05
    }).then((response) => {

        window.location.href = '/admin/handkeys';
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }

}
