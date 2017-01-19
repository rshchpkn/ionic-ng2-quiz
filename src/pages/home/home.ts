import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { QuestionComponent } from "../questions-component/questions.component";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  click() {
    this.navCtrl.push( QuestionComponent )
  }

}
