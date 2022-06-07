import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { RouterModule } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin/login-admin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword/forgotpassword.component';
import { LoginAdminService } from './login-admin/login-admin/login-admin.service';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    FrontLayoutComponent,
    LoginAdminComponent,
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [LoginAdminService],

})
export class LayoutModule { }
