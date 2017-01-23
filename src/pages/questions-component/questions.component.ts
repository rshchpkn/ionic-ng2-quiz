import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, MenuController } from 'ionic-angular';

import { TestQuestion } from "../test-question-component/test-question";
import { QuestionService } from "../../core/services/question.service";
// import { StartPageModule } from "../start-page-component/start-page.module";
// import { StartPageComponent } from "../start-page-component/start-page.component";

@Component({
    selector: 'questions',
    templateUrl: 'questions.template.html'
})
export class QuestionComponent {
    public questions;
    public questions$;

    constructor(public navCtrl: NavController, public navParams: NavParams, private questionService: QuestionService, public viewCtrl: ViewController,
                private menu: MenuController) {
        this.questions$ = this.questionService.questions$;
    }

    ionViewWillEnter() {
        this.viewCtrl.showBackButton(false);
        this.menu.open()
    }

    answerQuestion(question) {
        if (question.checked >= 0) {
            return false;
        }
        this.navCtrl.push(TestQuestion, {question: question})
        this.navCtrl.removeView(this.navCtrl.getPrevious())
    }


    endTest() {
        this.questionService.startNewTest()
        this.navCtrl.popToRoot()
    }

    answered(question) {
        return typeof question.answeredCorrect === 'undefined';
    }

}
