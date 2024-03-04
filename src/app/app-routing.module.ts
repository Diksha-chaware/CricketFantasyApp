import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
// import { HomeComponent } from './components/home/home.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { UsermatchfixtureComponent } from './components/usermatchfixture/usermatchfixture.component';
import { ContestComponent } from './components/contest/contest.component';
import { HomeComponent } from './components/home/home.component';
import { MatchScreenComponent } from './components/match-screen/match-screen.component';





const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'registration' , component:RegistrationComponent , pathMatch:'full'},
  {path:'match-screen', component: MatchScreenComponent , pathMatch:'full'},




  // {path:'home' , component:HomeComponent ,pathMatch:'full'},
  {path:'user-dashboard' , component:UserDashboardComponent ,
  children:[
    {
    path:'userprofile',
    component:UserprofileComponent,
    },
    

    {
      path:'usermatchfixture',
      component:UsermatchfixtureComponent,
      },


      



      


      {
        path:'home',
        component:HomeComponent,
        },


      {
        path:'contest',
        component:ContestComponent,
        },

      
  

  ]
} ,

  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
