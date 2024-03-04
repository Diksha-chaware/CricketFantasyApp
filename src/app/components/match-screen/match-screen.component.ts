import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
import { UsermatchfixturesService } from 'src/app/services/usermatchfixture.service';


@Component({
  selector: 'app-match-screen',
  templateUrl: './match-screen.component.html',
  styleUrls: ['./match-screen.component.css']
})
export class MatchScreenComponent implements OnInit  {

  
  [x: string]: any;
  PlayerArray: any[] = [];
  weeketKeeperArray: any[] = [];
  
  batterArray: any[] = [];
  allrounderArray: any[] = [];
  bowlerArray: any[] = [];
  
  PlayerArrayWK = [];
  PlayerArrayWKStatus = false;
  PlayerArrayLengthStatus = false;
  PlayerPointsStatus = false;
  AllStatusFalse = false;
  AllStatusTick = false;
  TeamArrayMaxLengthStatus = false;
  sum = 0;

  

  
  // playerArray:any;
  listData:any;
  usercontestForm: FormGroup | undefined;
  CurrentContestPlayerslength = 12;

  constructor(private playerService: PlayersService , private usermatchfixtureService:UsermatchfixturesService , private fB: FormBuilder) { 
    // this.playerArray = [];
   

    
  }

  public addItem(PlayerItem:any):void{
    console.log(PlayerItem.playername);
    
    this.listData.push(PlayerItem);

  }


  deleteItem(PlayerItem:any){
    
    this.listData.pop(PlayerItem);
    

  }
  
    
  
 
 
  ngOnInit(): void {
    this.playerService.showallplayers().subscribe((data: any) => {
      this.PlayerArray = data;
      
      this.weeketKeeperArray = data.filter((obj: any) => {
        return obj.skills === 'Wicket Keeper';
      });
      this.batterArray = data.filter((obj: any) => {
        return obj.skills === 'batsman';
      });
      this.allrounderArray = data.filter((obj: any) => {
        return obj.skills === 'All Rounder';
      });
      this.bowlerArray = data.filter((obj: any) => {
        return obj.skills === 'bowler';
      });
      // console.log(data + "ekjfhewkfwkr");
      console.log(this.PlayerArray);


      this.listData = [];
    console.log(this.listData);
    })
    
  


  this.usercontestForm = this.fB.group({
    
    
    username: "",
    userid: "",
    team1: "",
    team2: "",
    player1: "",
    player2: "",
    player3: "",
    player4: "",
    player5: "",
    player6: "",
    player7: "",
    player8: "",
    player9: "",
    player10: "",
  });
}



// new() {
//   this.sum = this['conService'].playersArray.reduce(
//     (accumulator: any, currentValue: { points: any; }) => {
//       return accumulator + currentValue.points;
//     },
//     0
//   );
// }

  check(){
    // Wicket keeper checking = Working
    const foundObject = this.playerService['playersArray'].find(
      (obj: { skills: string; }) => obj.skills === "Wicket Keeper"
    );

    if (foundObject) {
      this.PlayerArrayWKStatus = false;
    } else {
      this.PlayerArrayWKStatus = true;
    }


    const teamArrayOf_A = this.playerService['playersArray'].filter(
      (obj: { team_name: any; }) => obj.team_name === this['userService'].currentUserTeamA
    );
    const teamArrayOf_B = this['conService'].playersArray.filter(
      (obj: { team_name: any; }) => obj.team_name === this['userService'].currentUserTeamB
    );

    if (teamArrayOf_A.length > 7 || teamArrayOf_B.length > 7) {
      this.TeamArrayMaxLengthStatus = true;
    } else {
      this.TeamArrayMaxLengthStatus = false;
    }


    // Player length checking = working

    const playerArrayLength = this['PlayersService'].playersArray.length;
    if (playerArrayLength == 10) {
      this.PlayerArrayLengthStatus = false;
    } else {
      this.PlayerArrayLengthStatus = true;
    }

    // Player Total points = working

    if (this.sum <= 100) {
      this.PlayerPointsStatus = false;
    } else {
      this.PlayerPointsStatus = true;
    }

    if (
      !this.PlayerPointsStatus &&
      !this.PlayerArrayLengthStatus &&
      !this.PlayerArrayWKStatus &&
      !this.TeamArrayMaxLengthStatus
    ) {
      console.log(this['PlayersService'].playersArray);

      this.AllStatusTick = true;
      this.AllStatusFalse = false;
    } else {
      this.AllStatusTick = false;
      this.AllStatusFalse = true;
    }
  }






}




  function check() {
    throw new Error('Function not implemented.');
  }

