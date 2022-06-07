import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddprofilacceesService } from './addprofilaccees.service';

@Component({
  selector: 'app-addprofilacces',
  templateUrl: './addprofilacces.component.html',
  styleUrls: ['./addprofilacces.component.css']
})
export class AddprofilaccesComponent implements OnInit {

  constructor(private AddprofilacceesService : AddprofilacceesService , private router : Router) { }

  ngOnInit(): void {
  }
  AddPointeuse(){

  }
}
