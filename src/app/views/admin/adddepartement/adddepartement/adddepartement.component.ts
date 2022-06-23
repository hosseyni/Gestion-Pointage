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

  ngOnInit(): void {
  }

 
  AddDepartement(){
    let designation =  (<HTMLInputElement>document.getElementById('designation')).value;
    
    this.addepartementservice.AddDepartement({
      "designation": designation,
    }).then((response) => {
        window.location.href = '/admin/gestiondepartements';
        this.serviceappservice.show('I am a standard toast', {
          delay: 2000,
          autohide: true
        });
      this.modalService.open("gggggggg");
    })
    .catch((error) => {
      console.log("error" , error)
      });
    }
}
