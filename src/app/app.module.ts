/*
* File: app.module.ts
* Author: Sánta Renáta Diána
* Copyright: 2022, Sánta Renáta Diána
* Group: Szoft II N
* Date: 2022-11-23
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
