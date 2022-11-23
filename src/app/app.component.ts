/*
* File: app.component.ts
* Author: Sánta Renáta Diána
* Copyright: 2022, Sánta Renáta Diána
* Group: Szoft II N
* Date: 2022-11-23
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'telteg';
  aside !:number;
  bside !:number;
  area !:number;
  edited = false;

  calcArea():void{
    let area = 2*this.aside*this.bside;
    this.area = area;
    this.edited = true;
  }
}
