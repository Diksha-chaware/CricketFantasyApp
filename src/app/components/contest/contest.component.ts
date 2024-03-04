import { Component , OnInit } from '@angular/core';
import { ContestService } from 'src/app/services/contest.service';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css']
})
export class ContestComponent implements OnInit{

  dataSource : any;

  constructor(public contestservice:ContestService) {}
  ngOnInit(): void {
   this.loaddata();
  }


  loaddata(){
    this.contestservice.showallcontests().subscribe(
      (data: any)=>{console.log(data)
      this.dataSource=data},
      (error: any)=>{console.log(error)}

    )
  }


}


