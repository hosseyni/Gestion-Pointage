import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {UsagersService } from './usagers.service'
@Component({
  selector: 'app-usagers',
  templateUrl: './usagers.component.html',
  styleUrls: ['./usagers.component.css']
})
export class UsagersComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;

  listeUser = new Array()
  isShown : Boolean = true;

  USERS = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "sincere@april.biz",
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "shanna@melissa.tv",
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "nathan@yesenia.net",
      "phone": "1-463-123-4447",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "julianne@kory.org",
      "phone": "493-170-9623 x156"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "lucio@annie.ca",
      "phone": "(254)954-1289"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    }
  ];
  constructor(private usagersService : UsagersService) { }
/*
absences: []
badge: null
company: null
dateInscrit: "2022-06-23T13:53:43.000+00:00"
dateNaissance: "1997-04-20"
details: {idDetails: 1, adresse: 'ariena', webstite: 'www.website.com', github: 'www.github.com', linkedin: 'www.linkedin.com', …}
email: "hosseynitaher@gmail.com"
empreinte: null
evenements: []
fonctionalities: [{…}]
idUsager: 1
nom: "hosseyni"
numero: null
password: "$2a$10$IVFIgxYnoCeVZFAfRY7.S.wIr2R4ts0CyNWJa1mRysz5uQMreZcFW"
prenom: "taher"
proffession: null
role: {idRole: 1, role: 'ADMIN'}
sexe: "homme"
username: "hosseyni2022"


*/
 async getListUser(){
  await this.usagersService.listUsager().then((data)=>{
    this.listeUser = data;
    console.log('user liste ', data);
    
  }).catch((error=>{
        console.log('error liste user ', error);
        
  }));
  for(const obj of this.listeUser){
    obj.dateInscrit = String(obj.dateInscrit).substring(0,10)
  }
 }


 async ngOnInit(){
   
  await  this.getListUser();
  }


  openPDF(): void {

    this.isShown = false

    setTimeout(async ()=>{

    let DATA: any = document.getElementById('htmlData');
      this.isShown = true
    html2canvas(DATA).then((canvas) => {

      var imgWidth = 180; ;  
      var imgHeight = canvas.height * imgWidth / canvas.width;

   
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');

      PDF.setTextColor(0, 0, 0);
      let position = 0;
      PDF.setFontSize(10);// optional
    

      PDF.text('Leeds Engineering', 11, 8);
      PDF.text('biotime-Tchnology', 170, 8);
      PDF.setFontSize(30);
      PDF.setTextColor(0, 0, 0);

      PDF.text('Planning des usagers de Leeds ', 105, 30 , {align: "center"});
      PDF.text(' Engineering', 108, 45 , {align: "center"});
      PDF.setHeaderFunction

      

      PDF.addImage(FILEURI, 'PNG', 15, 60, imgWidth, imgHeight);
      PDF.output('dataurlnewwindow')
      PDF.save('angular-demo.pdf');
    });
  
},0);

}

 

}
