import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilssalariesComponent } from './profilssalaries/profilssalaries.component';

const routes: Routes = [
  {path:'',component:ProfilssalariesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilssalariesRoutingModule { }
