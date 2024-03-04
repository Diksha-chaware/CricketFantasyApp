import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user = {
    
       email : '',
  
      password :'',
  
     }
     constructor(private userservice:UserserviceService,private router:Router) { }

     login(){
      this.userservice.loginuser(this.user).subscribe(
        (response)=>{
          
          console.log(response)
          alert("success")
          this.router.navigate(['/user-dashboard'])
        },
        (error)=>{
          console.log(error)
          alert("fail")
        }
      )
      
     }
}
