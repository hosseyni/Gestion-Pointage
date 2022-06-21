import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddprofilacceesService } from '../../addprofilacces/addprofilacces/addprofilaccees.service';
import { HandkeysService } from '../../handkeys/handkeys/handkeys.service';
import { handKeyModel } from '../../handkeys/handkeysModel';
import { AddprofilService } from './addprofil.service';
import { ProfilModel } from './profilModel';

@Component({
  selector: 'app-addprofil',
  templateUrl: './addprofil.component.html',
  styleUrls: ['./addprofil.component.css']
})
export class AddprofilComponent implements OnInit {

  ListEmpreinte:handKeyModel[] = [];
  ListPadge:handKeyModel[] = [];
  listProfil:ProfilModel[] = [];
  
  constructor(private HandkeysService : HandkeysService , private AddprofilacceesService : AddprofilacceesService , private router : Router , private AddProfilservice :AddprofilService) { }

  ngOnInit(): void {
    this.GetPointeuse()
    this.GetListProfil()
  }

  GetPointeuse(){
 
    this.HandkeysService.GetPointeuse().then((response) => {
     
      if(response.length > 0 )  {
       
        for (let i = 0; i <response.length ; i++){
          console.log(response[i].type)
         if(response[i].type == "Type1"){
           this.ListEmpreinte.push(response[i])
         } else if (response[i].type == "Type2"){
           this.ListPadge.push(response[i])
         }
      }
      }  
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }

  AddProfil(){

    let inputGroupSelect03 = (<HTMLInputElement>document.getElementById('inputGroupSelect03')).value;
    let inputGroupSelect04 =  (<HTMLInputElement>document.getElementById('inputGroupSelect04')).value;
    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
   
 
    console.log(inputGroupSelect03 , inputGroupSelect04 , designation  )

    this.AddprofilacceesService.AddProfile({
      "designation": designation,
    }).then((response) => {
      this.router.events.subscribe((val ) => {
        // see also 
        console.log("ffffffff" , val ) 
    });
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }

  GetListProfil(){
    this.AddProfilservice.GeProfilAcces().then((response) => {
      for (let i = 0; i <response.length ; i++){
 
         this.listProfil.push(response[i])
       }
    })
    .catch((error) => {
      console.log("error" , error)
      });

  }
}
