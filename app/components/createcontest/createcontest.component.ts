import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddcreatecontestComponent } from 'src/app/dialogs/addcreatecontest/addcreatecontest.component';
import { UpdatecreatecontestComponent } from 'src/app/dialogs/updatecreatecontest/updatecreatecontest.component';

import { CreatecontestService } from 'src/app/services/createcontest.service';


// export interface createcontest {
//   id: number;
//   contestName: string;
//   prizeMoney:number;
//   entryFee:number;
//   edit_delete:string;

// }



@Component({
  selector: 'app-createcontest',
  templateUrl: './createcontest.component.html',
  styleUrls: ['./createcontest.component.css']
})
export class CreatecontestComponent  implements OnInit {


  displayedColumns: string[] = ['id', 'contestname','entryfee', 'prizemoney',  'edit_delete'];
  dataSource : any;


  constructor(public dialog: MatDialog , private createcontestservice:CreatecontestService) {}
  ngOnInit(): void {
    this.loaddata();
  }


  loaddata(){
    this.createcontestservice.showallcreatecontest().subscribe(
      (data)=>{console.log(data)
      this.dataSource=data},
      (error)=>{console.log(error)}
     
    )

  }


  deletecreatecontest(id:any){
    this.createcontestservice.deletecreatecontest(id).subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error)}
    )

  }

  addcreatecontest(){
    const dialogRef = this.dialog.open(AddcreatecontestComponent, {
      height: '500px',
      width: '500px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  updatecreatecontest(id:any){
    
    const dialogRef = this.dialog.open(UpdatecreatecontestComponent, {
      height: '500px',
      width: '400px',
    data:id});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
