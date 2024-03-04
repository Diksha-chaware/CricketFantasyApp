import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {


  public admin = {
    
    email : '',

   password :'',

  }
  constructor(private userservice:AdminserviceService,private router:Router) { }

  login(){
   this.userservice.loginadmin(this.admin).subscribe(
     (response)=>{
       
       console.log(response)
       alert("success")
       this.router.navigate(['/admin-dashboard'])
     },
     (error)=>{
       console.log(error)
       alert("fail")
     }
   )
   
  }
}


