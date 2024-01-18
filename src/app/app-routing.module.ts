import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ForgotpasswordComponent } from './layout/forgotpassword/forgotpassword/forgotpassword.component';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { LoginAdminComponent } from './layout/login-admin/login-admin/login-admin.component';

import { ProfilscalendairesModule } from './views/admin/profilscalendaires/profilscalendaires.module';
import { ProfilssalariesModule } from './views/admin/profilssalaries/profilssalaries.module';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,children:[
   // {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
   {path:'',redirectTo: '/login', pathMatch: 'full'}, 
   {path:'loginuser',loadChildren:()=>import('./views/front/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
    
    
    
  ]},
  {path:'register',loadChildren:()=>import('./views/front/register/register.module').then(m=>m.RegisterModule)},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'gestionusers',loadChildren:()=>import('./views/admin/gestionusers/gestionusers.module').then(m=>m.GestionusersModule)},
    {path:'gestiondepartements',loadChildren:()=>import('./views/admin/gestiondepartements/gestiondepartements.module').then(m=>m.GestiondepartementsModule)},
    {path:'handkeys',loadChildren:()=>import('./views/admin/handkeys/handkeys.module').then(m=>m.HandkeysModule)},
    {path:'profilscalendaires',loadChildren:()=>import('./views/admin/profilscalendaires/profilscalendaires.module').then(m=>ProfilscalendairesModule)},
    {path:'profilssalaries',loadChildren:()=>import('./views/admin/profilssalaries/profilssalaries.module').then(m=>ProfilssalariesModule)},
    {path:'typeabsence',loadChildren:()=>import('./views/admin/typeabsence/typeabsence.module').then(m=>m.TypeabsenceModule)},
    {path:'usagers',loadChildren:()=>import('./views/admin/usagers/usagers.module').then(m=>m.UsagersModule)},
    {path:'addsession',loadChildren:()=>import('./views/admin/addsession/addsession.module').then(m=>m.AddsessionModule)},
    {path:'gestionusers/addfonctionalite',loadChildren:()=>import('./views/admin/addfonctionalite/addfonctionalite.module').then(m=>m.AddfonctionaliteModule)},
    {path:'adddepartement',loadChildren:()=>import('./views/admin/adddepartement/adddepartement.module').then(m=>m.AdddepartementModule)},
    {path:'addpointeuse',loadChildren:()=>import('./views/admin/addpointeuse/addpointeuse.module').then(m=>m.AddpointeuseModule)},
    {path:'addprofil',loadChildren:()=>import('./views/admin/addprofil/addprofil.module').then(m=>m.AddprofilModule)},
    {path:'addprofilacces',loadChildren:()=>import('./views/admin/addprofilacces/addprofilacces.module').then(m=>m.AddprofilaccesModule)},
    {path:'addprofilcalendaire',loadChildren:()=>import('./views/admin/addprofilcalendaire/addprofilcalendaire.module').then(m=>m.AddprofilcalendaireModule)},
    {path:'addprofilsalaries',loadChildren:()=>import('./views/admin/addprofilsalaries/addprofilsalaries.module').then(m=>m.AddprofilsalariesModule)},
    {path:'addabsense',loadChildren:()=>import('./views/admin/addabsense/addabsense.module').then(m=>m.AddabsenseModule)},
    {path:'addusager',loadChildren:()=>import('./views/admin/addusager/addusager.module').then(m=>m.AddusagerModule)}

  ]},
  {path:'login',component:LoginAdminComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent}
    
  
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
