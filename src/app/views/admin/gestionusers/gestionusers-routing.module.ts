import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionusersComponent } from './gestionusers/gestionusers.component';

const routes: Routes = [
  {path:'',component:GestionusersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionusersRoutingModule { }
