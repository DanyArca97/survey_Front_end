import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public mail : string = "";

  constructor(private route : ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.mail= params["mail"];
    });
  }


  goListSurvey(){
    let navigationExtras : NavigationExtras = {//Costruisco struttura da mandare alla pagina
      queryParams : {
        'mail':this.mail
      },
      skipLocationChange : true
    };

    this.router.navigate(['/survey-list'], navigationExtras); // mando info
  }





}
