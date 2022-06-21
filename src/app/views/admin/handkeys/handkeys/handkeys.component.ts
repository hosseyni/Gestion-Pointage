import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  @ViewChild("modeladdPointeuse") modeladdPointeuse: ElementRef | undefined;

  
  constructor(private HandkeysService : HandkeysService , private router : Router , private route:ActivatedRoute) { }

  ngOnInit(): void {
 
    this.GetPointeuse()
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
      console.log("ffffffff" , this.ListEmpreinte , this.ListPadge )
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
      console.log("ffffffff" , response ) 

        this.router.navigate(['/admin/handkeys']).then( (e) => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });

 
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
    console.log("eeeevvvvv" , value )
   
      this.HandkeysService.DeletePointeuse(value).then((response) => {
        this.router.events.subscribe((val ) => {
          // see also 
          console.log("ffffffff" , val ) 
    
      });
   
      })
      .catch((error) => {
        console.log("error" , error)
        });
    
  }

  EditPointeuse(value: any){
    console.log("eeeevvvvv" , value )
    
  }
}
