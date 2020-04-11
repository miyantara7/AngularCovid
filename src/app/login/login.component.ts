import { Component, OnInit } from '@angular/core';
import { userRequest } from '../model/UserRequest';
import { UserserviceService } from '../service/userservice.service';
import { userResponse } from '../model/UserResponse';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: any;
  uResponse = new userResponse()
  uRequest = new userRequest()
  tampil :boolean
  constructor(private service : UserserviceService, private router: Router) { 

  }
  ngOnInit(){
  }
  public lookUser(){
    let resp=this.service.getUsers(this.uRequest)
    resp.subscribe((data)=>{
      this.uResponse=data
      this.confirm()
    });
    
  }
  public confirm(){
    if(this.uRequest.username=="" && this.uRequest.username==""){
      console.log("Gagal"); 
    }else{    
      if(this.uResponse.roles=="admin"){ 
        this.router.navigateByUrl('/dashboard');
      }else{    
        this.router.navigateByUrl('/home');
      }
    }
  }
  
}
