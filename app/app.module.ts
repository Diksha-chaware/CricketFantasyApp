import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainscreenComponent } from './components/mainscreen/mainscreen.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import {MatTableModule} from '@angular/material/table';
import { AddteamComponent } from './dialogs/addteam/addteam.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddplayerComponent } from './dialogs/addplayer/addplayer.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateteamComponent } from './dialogs/updateteam/updateteam.component';
import { UpdateplayerComponent } from './dialogs/updateplayer/updateplayer.component';
import { MatchfixturesComponent } from './components/matchfixtures/matchfixtures.component';
import { AddmatchfixtureComponent } from './dialogs/addmatchfixture/addmatchfixture.component';
import { UpdatematchfixtureComponent } from './dialogs/updatematchfixture/updatematchfixture.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { CreatecontestComponent } from './components/createcontest/createcontest.component';
import { AddcreatecontestComponent } from './dialogs/addcreatecontest/addcreatecontest.component';
import { UpdatecreatecontestComponent } from './dialogs/updatecreatecontest/updatecreatecontest.component';
import { MapcontestComponent } from './components/mapcontest/mapcontest.component';
import { GameruleComponent } from './components/gamerule/gamerule.component';
import {MatExpansionModule} from '@angular/material/expansion';





@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    SideBarComponent,
    MainscreenComponent,
    HomeComponent,
    TeamsComponent,
    PlayersComponent,
    AddteamComponent,
    AddplayerComponent,
    UpdateteamComponent,
    UpdateplayerComponent,
    MatchfixturesComponent,
    AddmatchfixtureComponent,
    UpdatematchfixtureComponent,
    NavbarComponent,
    CreatecontestComponent,
    AddcreatecontestComponent,
    UpdatecreatecontestComponent,
    MapcontestComponent,
    GameruleComponent,
    
    
    
    
    
   
   
   
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
