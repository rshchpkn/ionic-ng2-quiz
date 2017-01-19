import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { QuestionService } from "../../core/services/question.service";

@Component({
  selector: 'test-question',
  templateUrl: 'test-question.html'
})
export class TestQuestion {
  public question;
  public answer;

  constructor(public navParams: NavParams, public questionService: QuestionService) {
    debugger;
    this.question = this.navParams.get("question");
  }

  answerQuestion() {
    // let this.question.answers[this.answer];
    this.answer;


  }

  goRoot() {
    debugger
  }


}
