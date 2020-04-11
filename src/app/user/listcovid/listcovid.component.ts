import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../../service/service1.service';
import { Covid } from '../../model/Covid';

@Component({
  selector: 'app-listcovid',
  templateUrl: './listcovid.component.html',
  styleUrls: ['./listcovid.component.css']
})
export class ListcovidComponent implements OnInit {
  dataCovids : Covid[]
  upCovids = new Covid()

  constructor(private service:Service1Service) { }

  ngOnInit(): void {
    let resp=this.service.getCovid();
      resp.subscribe((data)=>this.dataCovids=data, err => console.log("Ada error : !"+ JSON.stringify(err)), 
      () => console.log("Completed !"));
  }

}
