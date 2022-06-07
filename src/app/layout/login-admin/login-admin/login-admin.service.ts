import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

    // POST
 
   
    Login(data: any): Promise<any> {
      const request = this.httpClient.post<any>(
        environment.BackendUrl + 'auth/login',
        JSON.stringify(data),
        this.httpOptions
      );
      return request.toPromise();
    }

}
