import { Component, OnInit } from '@angular/core';
import { GestionusersService } from './gestionusers.service';
import { UserModel } from './userModel';

@Component({
  selector: 'app-gestionusers',
  templateUrl: './gestionusers.component.html',
  styleUrls: ['./gestionusers.component.css']
})
export class GestionusersComponent implements OnInit {

  listusers :UserModel[] = [];
  constructor(private gestionusertservice :GestionusersService) { }

  ngOnInit(): void {
    this.GetUsers();
  }
  
  GetUsers(){
    this.gestionusertservice.GetUsers().then((response) => {
      console.log("response")
   
      if(response.length > 0 )  {
       
        for (let i = 0; i <response.length ; i++){
      
          this.listusers.push(response[i])
          
      }
    }
    })
    .catch((error) => {
      console.log("error" , error)
      });
}
  DeletePointeuse(value: any){
      this.gestionusertservice.DeleteUser(value).then((response) => {
      console.log("rrrrr" , response)
      this.ngOnInit()
  
      })
      .catch((error) => {
        console.log("error" , error)
        });
    
}

}
