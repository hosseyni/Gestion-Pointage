import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { UserModel } from './userModel';

@Injectable({
  providedIn: 'root'
})
export class GestionusersService {

 
  constructor(
    private httpClient: HttpClient ,  private cookieService: CookieService ,
  ) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }).set('Authorization',  `Bearer ${this.cookieService.get("token")}`) ,
  };

       //get
       GetUsers(): Promise<[UserModel]> {
        const request = this.httpClient.get<any>(
          environment.BackendUrl + 'usager/list',
          this.httpOptions
        );
        return request.toPromise();
      }
      //DELETE
      DeleteUser(id: any): Promise<any> {
        const request = this.httpClient.delete<any>(
          environment.BackendUrl + 'usager/delete/'+ id,
          this.httpOptions
        );
        return request.toPromise();
      }
           //PUT
      UpdateUser(data: any , id : number): Promise<any> {
        const request = this.httpClient.put<any>(
          environment.BackendUrl + 'usager/update/'+ id,
          JSON.stringify(data),
          this.httpOptions
        );
        return request.toPromise();
      }

  getFonctions(): Promise<any>{
        const request = this.httpClient.get<any>(
          environment.BackendUrl + 'fonction/list',
        
          this.httpOptions
        );
        return request.toPromise();
      }
 getFonctionalites(): Promise<any>{
  const request = this.httpClient.get<any>(
    environment.BackendUrl + 'fonctionalitie/list',
  
    this.httpOptions
  );
  return request.toPromise();
}


      updateFonctionalite(data: any): Promise<any> {
        const request = this.httpClient.put<any>(
          environment.BackendUrl + 'fonctionalitie/update/'+data.idFonctionalities,
          JSON.stringify(data),
          this.httpOptions
        );
        return request.toPromise();
      }
}
