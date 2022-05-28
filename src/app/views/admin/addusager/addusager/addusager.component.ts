import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-addusager',
  templateUrl: './addusager.component.html',
  styleUrls: ['./addusager.component.css']
})
export class AddusagerComponent implements OnInit {

  viewDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
   
  }

}
