import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { QuestionService } from "../../app/core/services/question.service";
import { TestQuestion } from "../test-question-component/test-question";

@Component({
    selector: 'questions',
    templateUrl: 'questions.template.html'
})
export class QuestionComponent {
    public questions;
    public questions$;

    constructor(public navCtrl: NavController, public navParams: NavParams,private questionService: QuestionService) {
        this.questions$ = this.questionService.questions$;
    }


    answerQuestion(question) {
        if(question.checked >= 0) {
            return false;
        }
        this.navCtrl.push(TestQuestion, {question: question})
    }

    endTest() {

    }

}
