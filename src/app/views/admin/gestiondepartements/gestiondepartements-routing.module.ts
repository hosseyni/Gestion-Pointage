import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestiondepartementsModule } from './gestiondepartements.module';
import { GestiondepartementsComponent } from './gestiondepartements/gestiondepartements.component';

const routes: Routes = [
  {path:'',component:GestiondepartementsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestiondepartementsRoutingModule { }
