import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import {MatCardModule} from '@angular/material/card';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    MatCardModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
