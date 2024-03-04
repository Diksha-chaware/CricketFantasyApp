import { Component } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
public user = {
  firstname : '',

    lastname : '',

    email : '',

    password :'',

    phone :''
}


constructor(private userservice:UserserviceService) { }

registration(){
  this.userservice.registeruser(this.user).subscribe(
    (response)=>{
      console.log(response)
      alert("success")
    },
    (error)=>{
      console.log(error)
      alert("fail")
    }

   
    )
  
}
}
