import { Component, OnInit } from '@angular/core';
import { UsermatchfixturesService } from 'src/app/services/usermatchfixture.service';
import { UserserviceService } from 'src/app/services/userservice.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-usermatchfixture',
  templateUrl: './usermatchfixture.component.html',
  styleUrls: ['./usermatchfixture.component.css']
})
export class UsermatchfixtureComponent implements OnInit {
[x: string]: any;
 
  dataSource : any;


  baPoSix: any;
  boPoDot: any;
  fiPoBoundary: any;
  fiPoSix: any;
  fiPoCatch: any;
  oTPoCap: any;
  oTPoWK: any;
  oTPoStump:any;
  appPropName: any;
  pointsdata: any;


  pointsDataFinal = [];

  baPoRuns: any;
  baPoBoundary: any;
  boPoWicket: any;
  fiPoRuns: any;
  oTPoRuns: any;
  userService: any;
finalCurrentUser: any;


  // baPoRuns + '-'+ baPoBoundary + '-'+boPoWicket+ '-'+ fiPoRuns + '-'+ oTPoRuns;





  constructor(private usermatchfixtureservice:UsermatchfixturesService , private userservice: UserserviceService , private router:Router) {}
  ngOnInit(): void {
    // this.finalCurrentUser=this.userService.currentUser;
   this.loaddata();
   this.viewPoints();
   
  }


  loaddata(){
    this.usermatchfixtureservice.showallmatchfixtures().subscribe(
      (data)=>{console.log(data)
      this.dataSource=data},
      (error)=>{console.log(error)}

    )
    
  }






  



  viewPoints() {
    this.usermatchfixtureservice.getPointsData().subscribe({
      next: (res: any) => {
        this.pointsdata = res;
        // baPoRuns + '-'+ baPoBoundary + '-'+boPoWicket+ '-'+ fiPoRuns + '-'+ oTPoRuns;
        this.pointsDataFinal = this.pointsdata.split("-");

        this.baPoRuns = this.pointsDataFinal[0];
        this.baPoBoundary = this.pointsDataFinal[1];
        this.baPoSix = this.pointsDataFinal[2];
        this.boPoWicket = this.pointsDataFinal[3];
        this.boPoDot = this.pointsDataFinal[4];
        this.fiPoBoundary = this.pointsDataFinal[5];
        this.fiPoSix = this.pointsDataFinal[6];
        this.fiPoCatch = this.pointsDataFinal[7];
        this.oTPoCap = this.pointsDataFinal[8];
        this.oTPoWK = this.pointsDataFinal[9];
        this.oTPoStump = this.pointsDataFinal[10];

        this.appPropName = this.pointsDataFinal[11];
        console.log(this.oTPoRuns);
        console.log(this.pointsDataFinal);
        
      },
    });
  }


  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }


}
