import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddprofilacceesService } from '../../addprofilacces/addprofilacces/addprofilaccees.service';
import { HandkeysService } from '../../handkeys/handkeys/handkeys.service';
import { handKeyModel } from '../../handkeys/handkeysModel';
import { AddprofilService } from './addprofil.service';
import { deviceModel, ProfilModel } from './profilModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-addprofil',
  templateUrl: './addprofil.component.html',
  styleUrls: ['./addprofil.component.css']
})
export class AddprofilComponent implements OnInit {

  ListEmpreinte:handKeyModel[] = [];
  ListEmpreinteAded:handKeyModel[] = [];
  ListPadge:handKeyModel[] = [];
  ListPadgeAded:handKeyModel[] = [];
  listProfil:ProfilModel[] = new Array();

  listePointeuseFinale =new Array();
  listEmp:deviceModel[]=[];
  listEmpProfilEdit:deviceModel[]=[];
  modelDevisEmp:deviceModel = {type:'' , id :0 , name:''};
  modelDevisBdg:deviceModel = {type:'' , id :0 , name:''};
  showTable: boolean = true;
  addedProfil: any;
  modalRow: any;
  modalRowEdit: any;

  typeModal:string='Ajouter';
  constructor(private HandkeysService : HandkeysService , 
    private AddprofilacceesService : AddprofilacceesService ,
     private modalService: NgbModal,
     private router : Router , private AddProfilservice :AddprofilService) { }

  ngOnInit(): void {
    this.GetPointeuse()
    this.GetListProfil()
  }
  getRandomInt(max:number) {
    return Math.floor((Math.random() * max)+1);
  }
  

async getProfilByIDToEdit(id:any){
     await this.AddprofilacceesService.getProfileByID(id)
     .then((response) => {
console.log('result get profil by id ',response);

     });

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
      this.ListEmpreinte.sort(function(a, b) {
        return a.designation > b.designation ? 1 : a.designation < b.designation ? -1 : 0;
      });
      this.ListPadge.sort(function(a, b) {
        return a.designation > b.designation ? 1 : a.designation < b.designation ? -1 : 0;
      }); 
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }

  async DeleteProfil(idprofil:number){
    console.log('id profil to delete ', idprofil);
    
   await this.AddProfilservice.DeleteGeProfilAcces(idprofil).then((response) => {


  console.log('response delete ',response );
  
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
      window.location.href = '/admin/addprofil';
  }

  deleteItem(item:deviceModel,liste:deviceModel[]){
    const index = liste.indexOf(item);
    if (index !== -1) {
      liste.splice(index, 1);
     }
     let pointeuse :any;
     if(item.type==="Badge Vertx"){
      for(const obj of this.ListPadgeAded){
        if(obj.designation ===   item.name  ){
          pointeuse = obj;
            break;
        }
      }
      if(pointeuse !== null && pointeuse !== undefined){
        this.ListPadge.push(pointeuse);
        this.ListPadge.sort(function(a, b) {
          return a.designation > b.designation ? 1 : a.designation < b.designation ? -1 : 0;
        });
      }
     }else{
      for(const obj of this.ListEmpreinteAded){
        if(obj.designation ===   item.name  ){
          pointeuse = obj;
            break;
        }
      }
      if(pointeuse !== null && pointeuse !== undefined){
        this.ListEmpreinte.push(pointeuse);
        this.ListEmpreinte.sort(function(a, b) {
          return a.designation > b.designation ? 1 : a.designation < b.designation ? -1 : 0;
        });
      }             
     }

   
  }

   getItemEdit(content: any, tableRow : ProfilModel) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    //console.log(tableRow)
    this.modalRow = tableRow;
    (<HTMLInputElement>document.getElementById('designationedit')).value= tableRow.designation;
  }
  

  editProfil(profil:ProfilModel){

    let inputGroupSelect03 = (<HTMLInputElement>document.getElementById('inputGroupSelect03edit')).value;
    let inputGroupSelect04 =  (<HTMLInputElement>document.getElementById('inputGroupSelect04edit')).value;
    let designation =  (<HTMLInputElement>document.getElementById('designationedit')).value;
    console.log(inputGroupSelect03   )
    console.log( inputGroupSelect04  )
    console.log( designation  )
    this.listePointeuseFinale= this.listePointeuseFinale.concat(this.ListPadgeAded);
    this.listePointeuseFinale=this.listePointeuseFinale.concat(this.ListEmpreinteAded);
    console.log('liste finaaaaaal',this.listePointeuseFinale);
    

   const obj= {
      "designation": designation,
      "pointeuses":this.listEmp
    }

    console.log('obj --- ', obj  )
    /*
    {
  "autorisation": "string",
  "designation": "string",
  "idPControleAccess": 0,
  "pointeuses": [
    {
      "adresseIp": "string",
      "connexion": true,
      "designation": "string",
      "etat": true,
      "idPointeuse": 0,
      "pcontroleAccesses": [
        null
      ],
      "port": 0,
      "principale": true,
      "type": "Type1"
    }
  ],
  "seuilRejet": 0
}
}
    
{
      "designation": designation,
    }

*/ 


let profilAccess :ProfilModel;
    profilAccess={
      "autorisation": '',
      "designation":designation,
      "idPControleAccess":profil.idPControleAccess,
      "pointeuses":  [],
      "seuilRejet": 0
    }
    console.log('edit profile avant update ',profilAccess);
//this.listePointeuseFinale
    this.AddprofilacceesService.UpdateGeProfilAcces(profilAccess,profilAccess.idPControleAccess).then((response) => {
     this.addedProfil = response;
      console.log('edit profile',this.addedProfil);
      
      window.location.href = '/admin/addprofil';
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }

  async AddProfil(){

    let inputGroupSelect03 = (<HTMLInputElement>document.getElementById('inputGroupSelect03')).value;
    let inputGroupSelect04 =  (<HTMLInputElement>document.getElementById('inputGroupSelect04')).value;
    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    console.log(inputGroupSelect03   )
    console.log( inputGroupSelect04  )
    console.log( designation  )
    this.listePointeuseFinale= this.listePointeuseFinale.concat(this.ListPadgeAded);
    this.listePointeuseFinale=this.listePointeuseFinale.concat(this.ListEmpreinteAded);
    console.log('liste finaaaaaal',this.listePointeuseFinale);
    

   const obj= {
      "designation": designation,
      "pointeuses":this.listEmp
    }

    console.log('obj --- ', obj  )
    /*
    {
  "autorisation": "string",
  "designation": "string",
  "idPControleAccess": 0,
  "pointeuses": [
    {
      "adresseIp": "string",
      "connexion": true,
      "designation": "string",
      "etat": true,
      "idPointeuse": 0,
      "pcontroleAccesses": [
        null
      ],
      "port": 0,
      "principale": true,
      "type": "Type1"
    }
  ],
  "seuilRejet": 0
}
}
    
{
      "designation": designation,
    }
//{"idPointeuse":pointeuse.idPointeuse}
      ["pointeuses"]: listeIDPointeuse,

       //[{"idPointeuse":pointeuse.idPointeuse}] ,
*/ 
let profilAccess :any;
profilAccess={
  "autorisation": '',
  "designation":designation,
  "seuilRejet": 0
}
await this.AddprofilacceesService.AddProfile(profilAccess).then((response) => {
  this.addedProfil = response;
  //.idPControleAccess
   console.log('add profile',this.addedProfil);
   
 //  window.location.href = '/admin/addprofil';
 })
 .catch((error) => {
   console.log("error" , error)
   });
for(let pointeuse of this.listePointeuseFinale){

console.log('poinnteuse AVANT PSH',pointeuse);
//let  c:any ={'idPControleAccess':this.addedProfil}
//pointeuse.pcontroleAccesses.push({'idPControleAccess':this.addedProfil.idPControleAccess})
//=this.addedProfil 

pointeuse.pcontroleAccesses.push({'idPControleAccess':this.addedProfil.idPControleAccess})
await this.HandkeysService.UpdatePointeuse(pointeuse,pointeuse.idPointeuse).then((response) => {
  //this.addedProfil = response;
   console.log(' update pointeuse',response);
   
   //window.location.href = '/admin/addprofil';
 })
 .catch((error) => {
   console.log("error" , error)
   });


}
/*const p =  {"idPointeuse":pointeuse.idPointeuse}
  listeIDPointeuse .push(p )*/
//this.listePointeuseFinale
   /*
  
   this.AddprofilacceesService.AddProfile(profilAccess).then((response) => {
     this.addedProfil = response;
      console.log('add profile',this.addedProfil);
      
      window.location.href = '/admin/addprofil';
    })
    .catch((error) => {
      console.log("error" , error)
      });
    */
  }

  onItemChange(value: any){
    console.log(" Value is : ", value.name );
    
  }
  AjouterPointeuseEdit(){
    //////////////////////////
    //////////////////////////////////////////////// 
    ////// a verifier supp pointeuse de la liste emp ou vertx liste des choix
    
    let item ;
    this.showTable = false;
    let inputGroupSelect03 = (<HTMLInputElement>document.getElementById('inputGroupSelect03edit')).value;
    let inputGroupSelect04 =  (<HTMLInputElement>document.getElementById('inputGroupSelect04edit')).value;
    
         let pointEmp :deviceModel={type:'' , id :0 , name:''};
         let pointBdge :deviceModel={type:'' , id :0 , name:''};
    if(inputGroupSelect03 != ''){

      pointBdge.name = inputGroupSelect03.split('-')[0];
      pointBdge.id = Number(inputGroupSelect03.split('-')[1]);
      pointBdge.type = "Badge Vertx";
        this.listEmpProfilEdit.push(pointBdge);

        this.listEmpProfilEdit.sort(function(a, b) {
          return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
        });
        console.log('liste PADGE ',this.listEmp);
        
     //   ListEmpreinte:handKeyModel[] = [];
    // item  = this.modelDevisEmp;
     for(const obj of this.ListPadge){
      if(obj.idPointeuse ===   pointBdge.id){
          item = obj;
          break;
      }
    }
      console.log('iteeeeeem ', item);
      console.log('liste item BadgE', this.ListPadge);
      if(item !== undefined && item !== null){
        const index = this.ListPadge.indexOf(item);
           if (index !== -1) {
            item.pcontroleAccesses=[];
            this.ListPadgeAded.push(item)
             this.ListPadge.splice(index, 1);
            }
      }

     

        
    }
    if(inputGroupSelect04 != ''){
     
      pointEmp.name = inputGroupSelect04.split('-')[0];
      pointEmp.id =  Number(inputGroupSelect04.split('-')[1]);
      pointEmp.type = "Empreinte";
        this.listEmpProfilEdit.push( pointEmp)
        this.listEmpProfilEdit.sort(function(a, b) {
          return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
        });
       // item  = this.modelDevisBdg;
           for(const obj of this.ListEmpreinte){
            if(obj.idPointeuse ===  pointEmp.id){
                item = obj;
                break;
            }
          }
          console.log('iteeeeeem ', item);
          console.log('liste item empr', this.ListEmpreinte);
        
            if(item !== undefined && item !== null){
              const index = this.ListEmpreinte.indexOf(item);
                 if (index !== -1) {
                  item.pcontroleAccesses=[];
                  this.ListEmpreinteAded.push(item)
                   this.ListEmpreinte.splice(index, 1);
                  }
            }

        


       

      /*  const pointeuseEmpr = this.ListEmpreinte.filter(item);
        console.log('filter ',pointeuseEmpr );*/
    
    }
    setTimeout(()=>{this.showTable = true}, 0);
    console.log('list Emp',this.listEmp )


  }




  AjouterPointeuse(){
    //////////////////////////
    //////////////////////////////////////////////// 
    ////// a verifier supp pointeuse de la liste emp ou vertx liste des choix
    
    let item ;
    this.showTable = false;
    let inputGroupSelect03 = (<HTMLInputElement>document.getElementById('inputGroupSelect03')).value;
    let inputGroupSelect04 =  (<HTMLInputElement>document.getElementById('inputGroupSelect04')).value;
    let inputGroupSelect044 =  (<HTMLInputElement>document.getElementById('inputGroupSelect04')).select;
         let pointEmp :deviceModel={type:'' , id :0 , name:''};
         let pointBdge :deviceModel={type:'' , id :0 , name:''};
    if(inputGroupSelect03 != ''){

      pointBdge.name = inputGroupSelect03.split('-')[0];
      pointBdge.id = Number(inputGroupSelect03.split('-')[1]);
      pointBdge.type = "Badge Vertx";
        this.listEmp.push(pointBdge);

        this.listEmp.sort(function(a, b) {
          return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
        });
        console.log('liste PADGE ',this.listEmp);
        
     //   ListEmpreinte:handKeyModel[] = [];
    // item  = this.modelDevisEmp;
     for(const obj of this.ListPadge){
      if(obj.idPointeuse ===   pointBdge.id){
          item = obj;
          break;
      }
    }
      console.log('iteeeeeem ', item);
      console.log('liste item BadgE', this.ListPadge);
      if(item !== undefined && item !== null){
        const index = this.ListPadge.indexOf(item);
           if (index !== -1) {
            item.pcontroleAccesses=[];
            this.ListPadgeAded.push(item)
             this.ListPadge.splice(index, 1);
            }
      }

     

        
    }
    if(inputGroupSelect04 != ''){
     
      pointEmp.name = inputGroupSelect04.split('-')[0];
      pointEmp.id =  Number(inputGroupSelect04.split('-')[1]);
      pointEmp.type = "Empreinte";
        this.listEmp.push( pointEmp)
        this.listEmp.sort(function(a, b) {
          return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
        });
       // item  = this.modelDevisBdg;
           for(const obj of this.ListEmpreinte){
            if(obj.idPointeuse ===  pointEmp.id){
                item = obj;
                break;
            }
          }
          console.log('iteeeeeem ', item);
          console.log('liste item empr', this.ListEmpreinte);
        
            if(item !== undefined && item !== null){
              const index = this.ListEmpreinte.indexOf(item);
                 if (index !== -1) {
                  item.pcontroleAccesses=[];
                  this.ListEmpreinteAded.push(item)
                   this.ListEmpreinte.splice(index, 1);
                  }
            }

        


       

      /*  const pointeuseEmpr = this.ListEmpreinte.filter(item);
        console.log('filter ',pointeuseEmpr );*/
    
    }
    setTimeout(()=>{this.showTable = true}, 0);
    console.log('list Emp',this.listEmp )
    console.log('list inputGroupSelect044 ',inputGroupSelect044)

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
