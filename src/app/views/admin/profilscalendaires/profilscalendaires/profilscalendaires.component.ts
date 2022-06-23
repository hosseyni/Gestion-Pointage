import { Component, OnInit } from '@angular/core';
import { ProfilCalendaireModel } from '../profilcalandaireModel';
import { ProfilcalendaireService } from './profilcalendaire.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-profilscalendaires',
  templateUrl: './profilscalendaires.component.html',
  styleUrls: ['./profilscalendaires.component.css']
})
export class ProfilscalendairesComponent implements OnInit {

  ListProfilCalendaire:ProfilCalendaireModel[] = []

  constructor(private ProfilcalendaireService:ProfilcalendaireService ) { }

  ngOnInit(): void {
    this.GetProfilCalendaires()
  }

  GetProfilCalendaires(){
 
    this.ProfilcalendaireService.GeProfilCalandaire().then((response) => {
      for (let i = 0; i <response.length ; i++){
 
         this.ListProfilCalendaire.push(response[i])
       }
    

      console.log("ffffffff" ,this.ListProfilCalendaire)
        
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }

  DeleteProfilCalendaires(idProfilCalendaires :number){

     
    this.ProfilcalendaireService.DeleteProfilCalandaire(idProfilCalendaires).then((response) => {
      window.location.href = '/admin/profilscalendaires';
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
  
  }

      

}
