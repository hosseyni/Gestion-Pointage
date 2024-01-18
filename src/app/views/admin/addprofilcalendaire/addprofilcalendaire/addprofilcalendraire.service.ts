import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddprofilcalendraireService {

  
  constructor(
    private httpClient: HttpClient ,  private cookieService: CookieService ,
  ) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }).set('Authorization',  `Bearer ${this.cookieService.get("token")}`) ,
  };

    // POST

    AddProfilCalendaire(data: any): Promise<any> {
      const request = this.httpClient.post<any>(
        environment.BackendUrl + 'profilCalendaire/add',
        JSON.stringify(data),
        this.httpOptions
      );
      return request.toPromise();
    }
    
       //get
       GetHoraires(): Promise<[any]> {
        const request = this.httpClient.get<any>(
          environment.BackendUrl + 'horraireSpecifique/list' ,
          this.httpOptions
        );
        return request.toPromise();
      }

    AddHoraire(data: any): Promise<any> {
      const request = this.httpClient.post<any>(
        environment.BackendUrl + 'horraireSpecifique/add',
        JSON.stringify(data),
        this.httpOptions
      );
      return request.toPromise();
    }

    updateHoraire(data:any): Promise<any> {
      const request = this.httpClient.put<any>(
        environment.BackendUrl + 'horraireSpecifique/update/'+data.idHorraireSpecifique,
        JSON.stringify(data),
        this.httpOptions
      );
      return request.toPromise();
    }


    deleteHoraire(data: any): Promise<any> {
      const request = this.httpClient.delete<any>(
        environment.BackendUrl + 'horraireSpecifique/delete/'+data,
        this.httpOptions
      );
      return request.toPromise();
    }



// put pause
deletePause(data: any): Promise<any> {
  const request = this.httpClient.delete<any>(
    environment.BackendUrl + 'pause/delete/'+data,
    this.httpOptions
  );
  return request.toPromise();
}






// put pause
    updatePause(data: any): Promise<any> {
      const request = this.httpClient.put<any>(
        environment.BackendUrl + 'pause/update/'+data.idPause,
        JSON.stringify(data),
        this.httpOptions
      );
      return request.toPromise();
    }

// add pause
    AddPause(data: any): Promise<any> {
      const request = this.httpClient.post<any>(
        environment.BackendUrl + 'pause/add',
        JSON.stringify(data),
        this.httpOptions
      );
      return request.toPromise();
    }
    //get
    GetPauses(): Promise<[any]> {
      const request = this.httpClient.get<any>(
        environment.BackendUrl + 'pause/list' ,
        this.httpOptions
      );
      return request.toPromise();
    }


}
