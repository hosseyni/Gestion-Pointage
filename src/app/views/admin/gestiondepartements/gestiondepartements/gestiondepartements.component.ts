import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GestiondepartementService } from './gestiondepartement.service';
import { GestiondepartementModel } from './gestiondepartementModel';

@Component({
  selector: 'app-gestiondepartements',
  templateUrl: './gestiondepartements.component.html',
  styleUrls: ['./gestiondepartements.component.css']
})
export class GestiondepartementsComponent implements OnInit {
   listDepartement:GestiondepartementModel[] = [];
   modalRow: any;
  constructor(private gestiondepartementService: GestiondepartementService , private modalService: NgbModal) { }

  ngOnInit(): void {
    this.GetListDepartement();
  }

  GetListDepartement(){
    this.gestiondepartementService.GeDepartement().then((response) => {
      for (let i = 0; i <response.length ; i++){
 
         this.listDepartement.push(response[i])
       }
    })
    .catch((error) => {
      console.log("error" , error)
      });

  }

  DelDepartement(idCompany :number){
    this.gestiondepartementService.DeleteDepartement(idCompany).then((response) => {
     console.log("response")
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }

  UpdateDepartement(idCompany :number){
    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    let postrequest = {
      "designation": designation ,
      "idCompany": idCompany
    }
    this.gestiondepartementService.UpdateDepartement(postrequest , idCompany).then((response) => {
     console.log("response")
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }

  open(content: any, tableRow : any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    //console.log(tableRow)
    this.modalRow = tableRow;
  }

}
