import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  arrayNames: Array <string>;
  name: string;
  actName: string;

  randomN(){
    var x = Math.floor(Math.random()*this.arrayNames.length);
    this.actName = this.arrayNames[x];
  }

  interval(){
    setInterval(()=>this.randomN(), 2000);
  }

  addNames(){
    this.arrayNames = this.name.split(",");
    this.randomN();
  }

  constructor() {}

}
