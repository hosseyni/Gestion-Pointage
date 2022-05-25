import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprofilcalendaireComponent } from './addprofilcalendaire/addprofilcalendaire.component';

const routes: Routes = [
  {path:'',component:AddprofilcalendaireComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddprofilcalendaireRoutingModule { }
