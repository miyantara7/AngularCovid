import { Component, OnInit } from '@angular/core';
import { Covid } from '../../model/Covid';
import { Service1Service } from '../../service/service1.service';
@Component({
  selector: 'app-inserts',
  templateUrl: './inserts.component.html',
  styleUrls: ['./inserts.component.css']
})
export class InsertsComponent implements OnInit {


  covids = new Covid()
  message:any;

  constructor(private service : Service1Service) { }

  ngOnInit(): void {
  }

  public insertCovid(){
    let resp=this.service.doInsertCovid(this.covids);
    resp.subscribe((data)=>this.message=data);
      }

}
