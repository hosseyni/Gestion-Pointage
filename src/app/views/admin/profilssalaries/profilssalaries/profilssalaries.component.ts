import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProfilsalariesService } from './profilsalaries.service';
import { ProfilSalarieModel } from './profilsalariesModel';

@Component({
  selector: 'app-profilssalaries',
  templateUrl: './profilssalaries.component.html',
  styleUrls: ['./profilssalaries.component.css']
})
export class ProfilssalariesComponent implements OnInit {

  ListProfilSalaries:ProfilSalarieModel[] = [];

 
  
  constructor(private ProfilsalariesService : ProfilsalariesService , private router :Router) { }

  ngOnInit(): void {
    this.GetProfilSalaries()
  }

  GetProfilSalaries(){
 
    this.ProfilsalariesService.GeProfilSalarie().then((response) => {
      for (let i = 0; i <response.length ; i++){
 
         this.ListProfilSalaries.push(response[i])
       }
    

      console.log("ffffffff" ,this.ListProfilSalaries)
        
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }

  DeleteProfilSalarie(idProfilSalaire :number){

     
    this.ProfilsalariesService.DeleteProfilSalarie(idProfilSalaire).then((response) => {
      this.router.events.subscribe((val ) => {
        // see also 
        console.log("idddddd" , val ) 
        window.location.reload();
  
    });
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
  
  }

}
