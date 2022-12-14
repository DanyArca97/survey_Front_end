import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestApiService } from "../services/rest-api.service";
import {MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form!:           FormGroup;
  public error:           string  = "";
  public hidePassword:    boolean = true;

  constructor(
    private ras: RestApiService,
    public dialogRef: MatDialogRef<LoginComponent>
  ) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      mail: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required])
    });
  }

  public async login() {
    this.error = "";

    await this.ras.callApi('http://localhost:8080/survey/api/check-user', 'POST', this.form.value)
      .then((res) => {
        this.dialogRef.close({'loginCheck': true, 'mail':this.form.value.mail});
      }).catch((err) => {
        this.error = "Utente non riconosciuto";
      });
  }

  public close() {
    this.dialogRef.close({'loginCheck': false, 'mail':this.form.value.mail});
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.form.controls[controlName].hasError(errorName);
  }
}
