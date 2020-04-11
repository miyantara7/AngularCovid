import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userResponse } from '../model/UserResponse';
import { Observable } from 'rxjs';
import { Covid } from '../model/covidpajay';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  readonly uri = "http://localhost:8080/";
  constructor(private http: HttpClient) { }

  public getUsers(userrequest) : Observable<userResponse>{
    return this.http.post<userResponse>(this.uri+"login/user",userrequest)
  }

  public getCovid() : Observable<Covid[]>{
    return this.http.get<Covid[]>("http://7634524a.ngrok.io/city/show")
  }

}
