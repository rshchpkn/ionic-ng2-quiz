import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { StartPageComponent } from "../start-page-component/start-page.component";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  click() {
    this.navCtrl.push( StartPageComponent )
  }

}
