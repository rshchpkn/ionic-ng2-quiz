import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { TestQuestion } from "../test-question-component/test-question";

@Component({
  selector: 'no-content',
  templateUrl: 'no-content.html'
})
export class NoContent {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.navCtrl.push(TestQuestion, {
      question: {
        text: "What is ng-hide directive used for?",
        answers: [
          {text: "Show a given control"},
          {text: "Hide a given control"},
          {text: "Both of the above"},
          {text: "None of the above"}
            ],
        number: 1
      }
    })
  }



}
