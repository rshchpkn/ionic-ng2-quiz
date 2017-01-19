import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { QuestionService } from "../../core/services/question.service";

@Component({
  selector: 'test-question',
  templateUrl: 'test-question.html'
})
export class TestQuestion {
  public question;
  public answer;

  constructor(public navCtrl: NavController, public navParams: NavParams,private questionService: QuestionService) {

    this.question = this.navParams.get("question");
  }

  answerQuestion() {
    // let this.question.answers[this.answer];
    this.answer;

  }

  goRoot() {
    this.navCtrl.pop()
  }


}
