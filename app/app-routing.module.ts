import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { HomeComponent } from './components/home/home.component';
import { AddteamComponent } from './dialogs/addteam/addteam.component';
import { MatchfixturesComponent } from './components/matchfixtures/matchfixtures.component';
import { CreatecontestComponent } from './components/createcontest/createcontest.component';
import { MapcontestComponent } from './components/mapcontest/mapcontest.component';
import { GameruleComponent } from './components/gamerule/gamerule.component';




const routes: Routes = [
  {path:'',component:AdminLoginComponent , pathMatch:'full'},
  {path:'admin-login' , component:AdminLoginComponent , pathMatch:'full'},
  {path:'admin-dashboard' , component:AdminDashboardComponent ,
children:[
{
  path:'teams',
  component:TeamsComponent,
  children:[
    {
      path:'addteam',
      component:AddteamComponent,
    },

   
  ]
},

{
  path:'matchfixtures',
    component:MatchfixturesComponent
},

{
path:'players',
component:PlayersComponent
},



{
  path:'gamerule',
  component:GameruleComponent
  },



{
  path:'createcontest',
  component:CreatecontestComponent
  },


  {
    path:'mapcontest',
    component:MapcontestComponent
    },
  
  

  
  

  

{
  path:'home',
  component:HomeComponent
  },


]
  
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
