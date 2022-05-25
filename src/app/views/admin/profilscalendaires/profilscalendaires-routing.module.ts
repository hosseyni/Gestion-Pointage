import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilscalendairesComponent } from './profilscalendaires/profilscalendaires.component';

const routes: Routes = [
  {path:'',component:ProfilscalendairesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilscalendairesRoutingModule { }
