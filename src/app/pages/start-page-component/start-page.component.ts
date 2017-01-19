import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TestQuestion } from "../test-question-component/test-question";
import { QuestionService } from "../../core/services/question.service";

@Component({
    selector: 'start-page',
    templateUrl: 'start-page.template.html'
})
export class StartPageComponent {
    public questions;
    public questions$;

    constructor(public navCtrl: NavController, public navParams: NavParams,private questionService: QuestionService) {
        this.questions$ = this.questionService.questions$;
    }

    startTest() {
        let question = this.questionService.nextQuestion();
        // let question = this.questionService.getNextNotAnsweredQuestion()[0];
        this.navCtrl.push(TestQuestion,{question: question})
    }

}
