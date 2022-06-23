import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { handKeyModel } from '../handkeysModel';
import { HandkeysService } from './handkeys.service';
@Component({
  selector: 'app-handkeys',
  templateUrl: './handkeys.component.html',
  styleUrls: ['./handkeys.component.css']
})
export class HandkeysComponent implements OnInit {

  ListEmpreinte:handKeyModel[] = [];
  ListPadge:handKeyModel[] = [];
  connect_device:boolean =false;
  modalRow: any;
  @ViewChild("modeladdPointeuse") modeladdPointeuse: ElementRef | undefined;

  
  constructor(private HandkeysService : HandkeysService , private router : Router , private route:ActivatedRoute , private modalService: NgbModal) { }

  ngOnInit(): void {
 
    this.GetPointeuse()
  }
  connect(){  

    this.connect_device = true
    console.log("connect" ,this.connect_device )
  }

  GetPointeuse(){
 
    this.HandkeysService.GetPointeuse().then((response) => {
     
      if(response.length > 0 )  {
       
        for (let i = 0; i <response.length ; i++){
          console.log(response[i].type)
         if(response[i].type == "Type2"){
           this.ListEmpreinte.push(response[i])
         } else if (response[i].type == "Type1"){
           this.ListPadge.push(response[i])
         }
      }
      }  
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }


  AddPointeuse(){

    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    let port =  (<HTMLInputElement>document.getElementById('port')).value;
    let company =  (<HTMLInputElement>document.getElementById('company')).value;
    let inputGroupSelect04 =  (<HTMLInputElement>document.getElementById('inputGroupSelect04')).value;
    let inputGroupSelect05 =  (<HTMLInputElement>document.getElementById('inputGroupSelect05')).value;

    this.HandkeysService.AddPointeuse({
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

  onReload(){
    this.router.navigate(['/profilssalaries'],{relativeTo:this.route})
   }

   onItemChange(value: any){
     console.log("eeeevvvvv" , value.value , value.checked )
   }

   DeletePointeuse(value: any){
   
      this.HandkeysService.DeletePointeuse(value).then((response) => {
        window.location.href = '/admin/handkeys';
   
      })
      .catch((error) => {
        console.log("error" , error)
        });
    
  }

  EditPointeuse(value: any){
    console.log("eeeevvvvv" , value )
    let designation =  (<HTMLInputElement>document.getElementById('designationedit')).value;
    let port =  (<HTMLInputElement>document.getElementById('portedit')).value;
    let company =  (<HTMLInputElement>document.getElementById('companyedit')).value;
    let inputGroupSelect04 =  (<HTMLInputElement>document.getElementById('inputGroupSelect04edit')).value;
    let inputGroupSelect05 =  (<HTMLInputElement>document.getElementById('inputGroupSelect05edit')).value;
    let postrequest = {
      "adresseIp": company,
      "connexion": true,
      "designation": designation,
      "etat": true,
      "idPointeuse": value,
      "port": port,
      "principale": true,
      "type": inputGroupSelect05
    }
    console.log("fffffffff" , postrequest)
    this.HandkeysService.UpdatePointeuse(postrequest , value).then((response) => {
      window.location.href = '/admin/handkeys';
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
