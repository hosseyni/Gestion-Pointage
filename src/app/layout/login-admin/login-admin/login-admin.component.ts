import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginAdminService } from './login-admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private LoginAdminService: LoginAdminService , 
    private cookieService: CookieService , private router: Router) { }

  ngOnInit(): void {
  }


  Login(){
    let username =  (<HTMLInputElement>document.getElementById('yourUsername')).value;
    let password =  (<HTMLInputElement>document.getElementById('yourPassword')).value;
    this.LoginAdminService.Login({
    "email" :username.toString() ,
    "password" : password.toString()
  }).then((response) => {
      this.cookieService.set("token" , response['token'])
      this.router.navigate(['/admin/dashboard'])
      this.router.events.subscribe((val ) => {
        // see also 
        console.log("ffffffff" , val ) 
    });
 
    })
    .catch((error) => {
      console.log("error" , error)
      });
  }
}
