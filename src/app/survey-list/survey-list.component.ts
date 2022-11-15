import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {RestApiService} from "../services/rest-api.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogPartecipateComponent} from "../dialog-partecipate/dialog-partecipate.component";

export interface SURVEYS{
  id:number;
  id_mail:number;
  id_category:number;
  name:string;
  description:string;
  publish_date:string;
  ending_date:string;
  category:{
    id:number;
    name:string;
  }

}
@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  public mail: string = "";
  public error:string="";
  public chosen_id:number=0;
  public surveys :SURVEYS[] = [];
  public doneSurveys:SURVEYS[]=[];
  public title:string="";

  public dataSource: SURVEYS[] = [];

  displayedColumns: string[] = ['index','id','category', 'name', 'publish_date', 'ending_date'];

  constructor(private dialog :MatDialog, private route : ActivatedRoute, private router : Router, private ras: RestApiService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.mail= params["mail"];
    });

    this.getSurveys()
  }


  public async getSurveys() {
    this.error = "";

    await this.ras.callApi('http://localhost:8080/survey/api/surveys', 'GET', "")
      .then((res) => {
        this.surveys=res;
        this.dataSource=this.surveys;
      }).catch((err) => {
        this.error = "ERRORE";
      });

    await this.ras.callApi('http://localhost:8080/survey/api/users/'+this.mail, 'GET', "")
      .then((res) => {
        this.doneSurveys=res["surveys"];
      }).catch((err) => {
        this.error = "ERRORE";
      });
  }


  public checkSurvey(row:any) {
    let ret=true;
    this.doneSurveys.forEach(element => {
        if (element.id === row['id']) {
          ret= false;
        }
        else{
          this.chosen_id=row["id"];
          this.title=row["name"];
        }
      }
    );
    return ret;

  }


  goTakeSurvey(){
    const config = new MatDialogConfig();

    config.disableClose = true;
    config.id = "dialog-partecipate-component";
    config.height = "500px";
    config.width = "1000px";
    config.data = {
      title: this.title,
      component: "dialog-partecipate",
      mail: this.mail,
      id_survey:this.chosen_id,
    };


    const dialogRef = this.dialog.open(DialogPartecipateComponent, config);

    /*dialogRef.afterClosed().subscribe((result) => {
      console.log(result);

      //result è già Object, non devo fare JSON.parse

      if (result["registerCheck"]) {
        let navigationExtras : NavigationExtras = {//Costruisco struttura da mandare alla pagina home
          queryParams : {
            'mail':result["mail"]
          },
          skipLocationChange : true
        };

        this.router.navigate(['/home'], navigationExtras); // mando info a home
      }
    });*/

  }
}
