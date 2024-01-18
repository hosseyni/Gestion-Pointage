import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GestiondepartementService } from '../../gestiondepartements/gestiondepartements/gestiondepartement.service';
import { handKeyModel } from '../handkeysModel';
import { HandkeysService } from './handkeys.service';
@Component({
  selector: 'app-handkeys',
  templateUrl: './handkeys.component.html',
  styleUrls: ['./handkeys.component.css']
})
export class HandkeysComponent implements OnInit {
  listCompagnies =new Array();
  ListEmpreinte:handKeyModel[] = [];
  ListPadge:handKeyModel[] = [];
  modalRow: any;
  msgConnect:boolean=false;
  msgDisConnect:boolean=false;
  hiddenBtnEregister = true;
  succes =false;
  probleme=false;
  msgDisConnectEditIP = false;

  @ViewChild("modeladdPointeuse") modeladdPointeuse: ElementRef | undefined;

  
  constructor(private HandkeysService : HandkeysService ,
    private  gestiondepartementService: GestiondepartementService ,
     private router : Router , private route:ActivatedRoute , private modalService: NgbModal) { }
    
    
     initChamp(){
      this.hiddenBtnEregister =true;
    (<HTMLInputElement>document.getElementById('designation')).value ='' ;
     (<HTMLInputElement>document.getElementById('port')).value ='';
     (<HTMLInputElement>document.getElementById('company')).value="";
     (<HTMLInputElement>document.getElementById('inputGroupSelect04')).value ="";
     (<HTMLInputElement>document.getElementById('inputGroupSelect05')).value="";
     }



     redirection(){
      window.location.href = '/admin/handkeys';
    }
     

changeIP(id:any,e:any){
  this.hiddenBtnEregister = true;
  //let company =  (<HTMLInputElement>document.getElementById('companyedit')).value;
  let company =e.target.value;
  //alert('value  '+company)

  if(this.ExistPointeuseByIPEdit(company,id) === true){
   
    this. msgDisConnectEditIP = true;
    this.hiddenBtnEregister = true;
    console.log('ip exite deja ');
   // alert('ip exite deja ');
   }else{
   
    this.msgDisConnectEditIP = false
    this.hiddenBtnEregister = false;
 //   alert('ip n exite pas ');
}
//alert('value  '+company)
}


  async ngOnInit() {
    this.hiddenBtnEregister = true;
    this.GetPointeuse()
    await this.getCompagnies();
  }

async getCompagnies(){
  await this.gestiondepartementService.GeDepartement().then(data=>{

    console.log('liste compagnie ', data);
    
     this.listCompagnies = data;
    });
}
connectEdit(id:any){  
  let company =  (<HTMLInputElement>document.getElementById('companyedit')).value;


  if(this.ExistPointeuseByIPEdit(company,id) === true){
    this.msgConnect = false
    this.msgDisConnect = true
    console.log('ip exite deja ');
   // alert('ip exite deja ');
   }else{
    this.msgConnect =true
    this.msgDisConnect = false
    this.hiddenBtnEregister = false;
 //   alert('ip n exite pas ');
}

 
}







  connect(){  
    let company =  (<HTMLInputElement>document.getElementById('company')).value;
    if(this.ExistPointeuseByIP(company) === true){
      this.msgConnect = false
      this.msgDisConnect = true
      console.log('ip exite deja ');
     // alert('ip exite deja ');
     }else{
      this.msgConnect =true
      this.msgDisConnect = false
      this.hiddenBtnEregister = false;
   //   alert('ip n exite pas ');
  }

   
  }

  GetPointeuse(){
 
    this.HandkeysService.GetPointeuse().then((response) => {
     
     console.log('liste pointeuse ',response );
     
       
        for (let i = 0; i <response.length ; i++){
          console.log(response[i].type)
         if(response[i].type == "Type2"){
           this.ListEmpreinte.push(response[i])
         } else if (response[i].type == "Type1"){
           this.ListPadge.push(response[i])
         }
            }  
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }


 async AddPointeuse(){

    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    let port =  (<HTMLInputElement>document.getElementById('port')).value;
    let company =  (<HTMLInputElement>document.getElementById('company')).value;
    let inputGroupSelect04 =  (<HTMLInputElement>document.getElementById('inputGroupSelect04')).value;
    let inputGroupSelect05 =  (<HTMLInputElement>document.getElementById('inputGroupSelect05')).value;

    console.log('pointeuse avant ajout ',{
      "adresseIp": company,
      "connexion": true,
      "designation": designation,
      "etat": true,
      "idPointeuse": 1,
      "port": port,
      "principale": true,
      "type": inputGroupSelect05
    });

  await  this.HandkeysService.AddPointeuse({
      "adresseIp": company,
      "connexion": true,
      "designation": designation,
      "etat": true,
      "port": port,
      "principale": true,
      "type": inputGroupSelect05
    }).then((response) => {
   
      console.log('response add ',response);
      
     // window.location.href = '/admin/handkeys';
   this.succes =true;
    })
    .catch((error) => {
      this.probleme =true;
      console.log("error" , error)
      });
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

  ExistPointeuseByIPEdit(ip:string,id:string):boolean{
    let result = false;
     for(const obj of this.ListPadge){
       if(obj.adresseIp === ip && obj.idPointeuse !== id ){
        result= true;
         break;
       }
     }
     for(const obj of this.ListEmpreinte ){
       if(obj.adresseIp === ip && obj.idPointeuse !== id){
        result= true;
         break;
       }
     }
     
          return result;
   }
 


   ExistPointeuseByIP(ip:string):boolean{
   let result = false;
    for(const obj of this.ListPadge){
      if(obj.adresseIp === ip){
       result= true;
        break;
      }
    }
    for(const obj of this.ListEmpreinte){
      if(obj.adresseIp === ip){
       result= true;
        break;
      }
    }
    
         return result;
  }


  EditPointeuse(value: any){

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
