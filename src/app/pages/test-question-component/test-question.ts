import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { QuestionService } from "../../core/services/question.service";
import { QuestionComponent } from "../questions-component/questions.component";

@Component({
    selector: 'test-question',
    templateUrl: 'test-question.html'
})
export class TestQuestion {
    public question;
    public answer;

    constructor(public navParams: NavParams, private navCtrl: NavController, public questionService: QuestionService) {
        this.question = this.navParams.get("question");
    }

    answerQuestion() {
        this.questionService.answerQuestion(this.answer)
        let question = this.questionService.nextQuestion();
        if(!question) {
            this.navCtrl.push(QuestionComponent)
            return false;
        }
        this.navCtrl.push(TestQuestion,{question: question})
    }

    // canGoBack() {
    //     return this.answer
    // }

    goRoot() {
        this.navCtrl.popToRoot()
        this.questionService.startNewTest()
    }


}
