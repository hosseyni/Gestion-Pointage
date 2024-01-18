import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { ProfilModel } from './profilModel';

@Injectable({
  providedIn: 'root'
})
export class AddprofilService {
  
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
      GeProfilAcces(): Promise<[ProfilModel]> {
        const request = this.httpClient.get<any>(
          environment.BackendUrl + 'pControleAccess/list' ,
          this.httpOptions
        );
        return request.toPromise();
      }

 //get by id
 GeProfilAccesById(id:any): Promise<[ProfilModel]> {
  const request = this.httpClient.get<any>(
    environment.BackendUrl + 'pControleAccess/findById/' + id,
    this.httpOptions
  );
  return request.toPromise();
}


      ///pControleAccess/findById/{id}
  
      //DELETE
      DeleteGeProfilAcces(id: number): Promise<any> {
        const request = this.httpClient.delete<any>(
          environment.BackendUrl + 'pControleAccess/delete/'+ id,
          this.httpOptions
        );
        return request.toPromise();
      }
  
       //Put
       UpdateGeProfilAcces(data: any , id : number): Promise<any> {
        const request = this.httpClient.put<any>(
          environment.BackendUrl + 'pControleAccess/update/'+ id,
          JSON.stringify(data),
          this.httpOptions
        );
        return request.toPromise();
      }

 
}