import { Component, OnInit } from '@angular/core';
import { Covid } from '../../model/Covid';
import { Service1Service } from '../../service/service1.service';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.css'],
  styles: [`
        :host ::ng-deep .ui-button {
            margin: .5em .5em .5em 0;
            width: 140px;
        }
        @media screen and (max-width: 40em) {
            :host ::ng-deep .ui-dialog {
                width: 75vw !important;
            }
        }
    `]
})
export class BootComponent implements OnInit {


  dataCovids : Covid[]
  upCovids = new Covid()
  message: any;
  displayModal: boolean;
  position: string;

  showModalDialog() {
      this.displayModal = true;
  }

  constructor(private service:Service1Service){
    this.viewCovid()
  }
  ngOnInit(){
      
  }

  public deleteCovid(data:Covid){
    let resp=this.service.doDeleteCovid(data);
    resp.subscribe((data)=>{
        this.message=data
        this.viewCovid()
    });
  }

  public viewCovid(){
    let resp=this.service.getCovid();
    resp.subscribe((data)=>this.dataCovids=data, err => console.log("Ada error : !"+ JSON.stringify(err)), 
    () => console.log("Completed !"));
  }
}
