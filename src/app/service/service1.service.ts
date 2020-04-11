import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Covid } from '../model/Covid';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  readonly uri = "http://localhost:8080/covid";
  constructor(private http: HttpClient) { }

//  public getCovid() : Observable<Covid>{
//    return this.http.get<Covid>(this.uri)
//  }

  public getCovid() : Observable<Covid[]>{
    return this.http.get<Covid[]>(this.uri+"/listcovid")
  }

  public doInsertCovid(Covid){
    return this.http.post(this.uri+"/incovid",Covid,{responseType:'text' as 'json'});
  }
  public doUpdateCovid(Covid){
    return this.http.post(this.uri+"/upcovid",Covid,{responseType:'text' as 'json'});
  }
  public doDeleteCovid(Covid){
    return this.http.post(this.uri+"/delcovid",Covid,{responseType:'text' as 'json'});
  }
  public doGetAll(): Observable<number[]>{
    return this.http.get<number[]>(this.uri+"/viewall");
  }
}
