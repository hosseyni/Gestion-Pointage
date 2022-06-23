import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddprofilacceesService } from '../../addprofilacces/addprofilacces/addprofilaccees.service';
import { HandkeysService } from '../../handkeys/handkeys/handkeys.service';
import { handKeyModel } from '../../handkeys/handkeysModel';
import { AddprofilService } from './addprofil.service';
import { deviceModel, ProfilModel } from './profilModel';

@Component({
  selector: 'app-addprofil',
  templateUrl: './addprofil.component.html',
  styleUrls: ['./addprofil.component.css']
})
export class AddprofilComponent implements OnInit {

  ListEmpreinte:handKeyModel[] = [];
  ListPadge:handKeyModel[] = [];
  listProfil:ProfilModel[] = [];
  listEmp:deviceModel[]=[];
  modelDevisEmp:deviceModel = {type:'' , id :0 , name:''};
  modelDevisBdg:deviceModel = {type:'' , id :0 , name:''};
  showTable: boolean = true;
  
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

  DeleteProfil(idprofil:number){
    this.HandkeysService.DeletePointeuse(idprofil).then((response) => {
      window.location.href = '/admin/addprofil';
 
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
      "pointeuses":this.listEmp
    }).then((response) => {
      window.location.href = '/admin/addprofil';
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }

  onItemChange(value: any){
    console.log(" Value is : ", value.name );
    
  }
  AjouterPointeuse(){
    this.showTable = false;
    let inputGroupSelect03 = (<HTMLInputElement>document.getElementById('inputGroupSelect03')).value;
    let inputGroupSelect04 =  (<HTMLInputElement>document.getElementById('inputGroupSelect04')).value;
    let inputGroupSelect044 =  (<HTMLInputElement>document.getElementById('inputGroupSelect04')).select;

    if(inputGroupSelect03 != ''){

        this.modelDevisEmp.name = inputGroupSelect03.split('-')[0];
        this.modelDevisEmp.id = Number(inputGroupSelect03.split('-')[1]);
        this.modelDevisEmp.type = "Badge Vertx";
        this.listEmp.push(this.modelDevisEmp)
    }
    if(inputGroupSelect04 != ''){
     
        this.modelDevisBdg.name = inputGroupSelect04.split('-')[0];
        this.modelDevisBdg.id =  Number(inputGroupSelect04.split('-')[1]);
        this.modelDevisBdg.type = "Empreinte";
        this.listEmp.push(this.modelDevisBdg)

    }
    setTimeout(()=>{this.showTable = true}, 0);
    console.log(this.listEmp , inputGroupSelect044)

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
