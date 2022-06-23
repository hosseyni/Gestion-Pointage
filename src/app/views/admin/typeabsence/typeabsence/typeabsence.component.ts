import { Component, OnInit } from '@angular/core';
import { ServiceAppService } from 'src/app/service-app.service';
import { TypeabsenceService } from '../typeabsence.service';
import { TypeAbsenceModel } from '../typeAbsenceModel';

@Component({
  selector: 'app-typeabsence',
  templateUrl: './typeabsence.component.html',
  styleUrls: ['./typeabsence.component.css']
})
export class TypeabsenceComponent implements OnInit {

  listAbsence : TypeAbsenceModel[] = []

  constructor( private TypeabsenceService : TypeabsenceService , private ServiceAppService:ServiceAppService ) {}

  ngOnInit(): void {
   this.GetListAbsence();
  
  }

  GetListAbsence(){
    this.TypeabsenceService.ListAbsence().then((response) => {
      console.log("response")
      for (let i = 0; i <response.length ; i++){
 
        this.listAbsence.push(response[i])
      }
    }).catch((error) => {
      console.log("error" , error)
      });
  }

  
  DeleteAbsence(idAbsence :number){

     
    this.TypeabsenceService.DeleteAbsence(idAbsence).then((response) => {
      console.log("response" , response)
      window.location.href = '/admin/typeabsence';
 
    })
    .catch((error) => {
      console.log("error" , error)
      // setTimeout(() => {
      //   this.ServiceAppService.showError("Error" , error);
      // }, 3000);
      });
  
  }

}
