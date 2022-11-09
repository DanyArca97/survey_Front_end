import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogTemplateComponent } from "./dialog-template/dialog-template.component";
import { LoginComponent } from "./login/login.component";
import{ RegisterComponent } from "./register/register.component";
import {FirsthomeComponent} from "./firsthome/firsthome.component";
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog, public router : Router) { }
  title = 'survey';
  /*openLogin() {
    const config = new MatDialogConfig();

    config.disableClose = true;
    config.id = "login-component";
    config.height = "350px";
    config.width = "600px";
    config.data = {
      title:'LOGIN',
      component:"login"};


    const dialogRef = this.dialog.open(LoginComponent, config);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if(result === "login-ok"){this.router.navigate(['/home'])}
    });
  }
  openRegister(){
    const config = new MatDialogConfig();

    config.disableClose = true;
    config.id = "register-component";
    config.height = "350px";
    config.width = "600px";
    config.data = {
      title:'REGISTER',
      component:"register"};


    const dialogRef = this.dialog.open(RegisterComponent, config);
  }
  openSurveyList() {
    const config = new MatDialogConfig();

    config.disableClose = true;
    config.id = "survey-list-component";
    config.height = "350px";
    config.width = "600px";
    config.data = {
      title:'Survey List',
      component:"survey-list"};


    const dialogRef = this.dialog.open(DialogTemplateComponent, config);
  }*/


}
