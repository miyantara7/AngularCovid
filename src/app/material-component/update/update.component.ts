import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import { Service1Service } from '../../service/service1.service';
import { Covid } from '../../model/Covid';
import { CovidTemp } from '../../model/covidTemp';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }
    `],
    providers: [ConfirmationService]
})
export class UpdateComponent implements OnInit {
  dataCovids : Covid[]
  pilCovid = new Covid()
  
  pilCovid2 = new CovidTemp()
  message:any
  constructor(private service:Service1Service) { 
    this.listCovid()
  }
  ngOnInit(): void {
    
  }
   
  public updateCovid(){
    let resp=this.service.doUpdateCovid(this.pilCovid2);
    resp.subscribe((data)=>{
      this.message=data
      this.listCovid()
    }); 
       
  }

  public listCovid(){
    let resp=this.service.getCovid();
    resp.subscribe((data)=>this.dataCovids=data, err => console.log("Ada error : !"+ JSON.stringify(err)), 
    () => console.log("Completed !"));
  }
  public pilData(data:Covid){
    this.pilCovid2.covidId = data.covidId
    this.pilCovid2.kasusMati = data.kasusMati
    this.pilCovid2.kasusPositif = data.kasusPositif
    this.pilCovid2.kasusNegatif = data.kasusNegatif
    this.pilCovid2.kasusSembuh = data.kasusSembuh
    this.pilCovid2.namaKota = data.namaKota
  }
}
