import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceAppService } from 'src/app/service-app.service';
import { AdddepartementService } from './adddepartement.service';
@Component({
  selector: 'app-adddepartement',
  templateUrl: './adddepartement.component.html',
  styleUrls: ['./adddepartement.component.css']
})
export class AdddepartementComponent implements OnInit {
  public toasts:any = [];
  constructor( private addepartementservice : AdddepartementService , public serviceappservice: ServiceAppService, 
    private chRef: ChangeDetectorRef, private router: Router , private modalService: NgbModal) {
  }

  succes =false
  probleme =false;

  ngOnInit(): void {
  }

  redirection(){
    window.location.href = '/admin/gestiondepartements';
  }

 
  AddDepartement(){
    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    
    this.addepartementservice.AddDepartement({
      "designation": designation,
    }).then((response) => {
      
       
        this.succes = true;
   
  
    })
    .catch((error) => {
      this.probleme =true;
   
      console.log("error" , error)
      });
    }
}
