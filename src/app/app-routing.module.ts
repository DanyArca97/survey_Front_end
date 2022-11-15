import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import{ HomeComponent } from "./home/home.component";
import{ FirsthomeComponent } from "./firsthome/firsthome.component";
import { SurveyListComponent} from "./survey-list/survey-list.component";
import { DialogPartecipateComponent} from "./dialog-partecipate/dialog-partecipate.component";

const routes: Routes = [{
  path: 'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component: HomeComponent},
  {path:'', component: FirsthomeComponent},
  {path:'survey-list', component:SurveyListComponent},
  {path:'dialog-partecipate', component:DialogPartecipateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
