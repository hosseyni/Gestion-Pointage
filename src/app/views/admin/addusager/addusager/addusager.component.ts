import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { AddusagerService } from './addusager.service';

@Component({
  selector: 'app-addusager',
  templateUrl: './addusager.component.html',
  styleUrls: ['./addusager.component.css']
})
export class AddusagerComponent implements OnInit {

  Events: any[] =[]/*  [
    {'title' : 'Absence injustifié', 
    'start': '2022-05-01' , 
    'end': '2022-05-01',
      color: 'violet'
    },
    {'title' : 'a 11:00:00', 'start': '2022-05-01 11:00' , 'end': '2022-05-01 11:00',  color: 'bleu'},
    {'title' : 'a 11:00:00', 'start': '2022-05-01 11:00' , 'end': '2022-05-01 11:00',  color: 'orange'},
    {'title' : 'maladie', 'start' : '2022-05-03' , 'end': '2022-05-09 08:00', color: 'red'},
    {'title' : 'maladie', 'start' : '2022-05-09' , 'end': '2022-05-16', color: 'yellow'},
    {'title' : 'Annomallie de pointage', 'start' : '2022-05-17' , 'end': '2022-05-17', color: 'red'},
    {'title' : 'maladie', 'start' : '2022-06-02' , 'end': '2022-06-06', color: 'bleu'},

    {'title' :  "Congé", "start": "2022-05-03 09:00:00","end": "2022-05-03 10:00:00" ,  color: 'pink'},
    { 'title' : "Pressure Equipment Safety Legislation Seminar", "start": "2022-05-27 08:00", "end": "2022-05 17:00"},
    {'title' : "Pressure Equipment Safety Legislation Seminar","start": "2022-05 08:00","end": "2022-05 17:00"}
] */ 

  viewDate: Date = new Date();
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
  usager:any;
 
 
  listePointeuse= new Array();
  listeAbsence = new Array();
  listeEvennement = new Array();
  listeUsager = new Array();
 
  selectedUsager :any;
  /*  dateDebut: "2022-07-01T22:17:05.000+00:00"
      dateFin: "2022-07-09T22:17:05.000+00:00"
       designation: "Absence injustifié"
       idAbsence: 1
       typeAbsence: {idTypeAbsence: 4, couleur: '#18fb3e', designation: 'EFTF', traiteAbsence: 'Pris_en_tant_que_congé_paye', typeContabilisation: 'Journe_complet', …}
       usager: null



         datePointage: "2022-07-01T22:12:26.000+00:00"
           designation: "Pressure Equipment Safety Legislation Seminar"
           es: true
         idEvenement: 1
       usager: null

*/
  constructor(private addusagerservice: AddusagerService) { }
 async afficherficheSalarie(){
    await  this.GetAbsence();
    this.Events= this.listeAbsence.map(obj=>{return{
     "title" : obj.typeAbsence.designation, 
     'start': obj.dateDebut , 
     'end': obj.dateFin,
    'color': obj.typeAbsence.couleur
    }
   });

   this.calendarOptions.events = this.Events;

  }
  changeUser(selecteditem:any){
  //  console.log('slectected item  ', selecteditem);

    console.log('slectected item  ', this.selectedUsager);
   // this.listeUsager.findIndex(1)
      
  

  }



 async  ngOnInit() {

   
  await this.GetUsager();

   await this.GetPointeuse();
  
   await   this.GetEvennement();

  console.log('listePointeuse',this.listePointeuse);
    console.log('listeAbsence',this.listeAbsence);
    console.log('listeEvenement',this.listeEvennement);
    this.selectedUsager={
    "prenom":'',
    "nom":'',
    "email":'',
    "proffession":''
    }
  }



  
 async GetAbsence(){
 
  await this.addusagerservice.GetAbsence().then((response) => {
    this.listeAbsence =response;
    console.log('response get absence ',response);
    
      })
      .catch((error) => {
        console.log("error" , error)
        });
  
}



 async GetEvennement(){
 
    await this.addusagerservice.GetEvennement().then((response) => {
      this.listeEvennement =response;
        })
        .catch((error) => {
          console.log("error" , error)
          });
  }



  async GetUsager(){
 
  await  this.addusagerservice.GetUsager().then((response) => {
     
      this.listeUsager =response;
  
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }


  async GetPointeuse(){
 
  await  this.addusagerservice.GetPointeuse().then((response) => {
     
      this.listePointeuse =response;
  
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }
  

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }
  openPDF(): void {


    let DATA: any = document.getElementById('htmlDataCalender');
    
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
      PDF.save('angular-demo.pdf');
    });


}


//     AddUsagers(){

//       let nom = (<HTMLInputElement>document.getElementById('name')).value;
//       let prenom =  (<HTMLInputElement>document.getElementById('prenom')).value;
//       let email =  (<HTMLInputElement>document.getElementById('email')).value;
//       let profesion = (<HTMLInputElement>document.getElementById('profesion')).value;
//       let profil_sa =  (<HTMLInputElement>document.getElementById('profil_sa')).value;
//       let profil_ac = (<HTMLInputElement>document.getElementById('profil_ac')).value;
      
//       let dattosend= {
//         "designation": designation,
//       }
//       console.log(inputGroupSelect03 , inputGroupSelect04 , designation  )

//       this.addusagerservice.AddUager(dattosend).then((response) => {
//         console.log("response")

//       })
//       .catch((error) => {
//         console.log("error" , error)
//         });
// }


}
