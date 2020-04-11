import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../../service/service1.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  a : number
  datas: any;

  constructor(private service:Service1Service) {  
    this.getAll()
  }
  
  ngOnInit(): void {
    
  }

  showData(data :number[]){
    this.datas = {
      labels: ['Sembuh','Terkonfirmasi','Negatif','Meninggal'],
      datasets: [
          {
              data: data,
              backgroundColor: [
                  "#4BC0C0",
                  "#FFCE56",
                  "#36A2EB",
                  "#FF6384"
              ],
              hoverBackgroundColor: [
                  "#4BC0C0",
                  "#FFCE56",
                  "#36A2EB",
                  "#FF6384"
              ]
          }]    
      };
  }
  public getAll(){
    let resp=this.service.doGetAll();
    resp.subscribe(
      (data)=>
       {this.showData(data)},
       err => console.log("Ada error : !"+ JSON.stringify(err)), 
       () => console.log("Completed !")); 
  }
}
