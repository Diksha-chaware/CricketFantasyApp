import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GameruleserviceService } from 'src/app/services/gameruleservice.service';

@Component({
  selector: 'app-gamerule',
  templateUrl: './gamerule.component.html',
  styleUrls: ['./gamerule.component.css']
  
})
export class GameruleComponent implements OnInit {
  panelOpenState = false;

  displayedColumns: string[] = ['playertype', 'min','max'];
  dataSource : any;
  displayedColumns1: string[] = ['pointname', 'points',];

  dataSource1 : any;
  displayedColumns2: string[] = ['bawlingpointname', 'bawlpoints',];
  



  constructor(private gameruleserviceservice:GameruleserviceService) {}
  ngOnInit(): void {
    this.loaddata();
    this.loaddatabatting();
    this.loaddatabawling();

  }


  loaddata(){
    this.gameruleserviceservice.showallgamerule().subscribe(
      (data)=>{console.log(data)
      this.dataSource=data},
      (error)=>{console.log(error)}
     
    )

  }



  loaddatabatting(){
    this.gameruleserviceservice.showallgamerulebatting().subscribe(
      (data)=>{console.log(data)
      this.dataSource=data},
      (error)=>{console.log(error)}
     
    )

  }


  loaddatabawling(){
    this.gameruleserviceservice.showallgamerulebatting().subscribe(
      (data)=>{console.log(data)
      this.dataSource=data},
      (error)=>{console.log(error)}
     
    )

  }




}
