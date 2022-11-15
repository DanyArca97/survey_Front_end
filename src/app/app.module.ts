import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule         } from './app-routing.module';
import { AppComponent             } from './app.component';
import { LoginComponent           } from './login/login.component';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { MatDialogModule          } from "@angular/material/dialog";
import { DialogTemplateComponent  } from './dialog-template/dialog-template.component';
import { HttpClientModule         } from "@angular/common/http";
import { MatCardModule            } from '@angular/material/card';
import { MatInputModule           } from '@angular/material/input';
import { MatIconModule            } from '@angular/material/icon';
import { MatButtonModule          } from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from "./register/register.component";
import { SurveyListComponent } from "./survey-list/survey-list.component";
import { HomeComponent} from "./home/home.component";
import { FirsthomeComponent } from './firsthome/firsthome.component';
import {MatTableModule} from "@angular/material/table";
import { DialogPartecipateComponent } from './dialog-partecipate/dialog-partecipate.component';
import {MatRadioModule} from "@angular/material/radio";

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DialogTemplateComponent,
    SurveyListComponent,
    HomeComponent,
    FirsthomeComponent,
    DialogPartecipateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
