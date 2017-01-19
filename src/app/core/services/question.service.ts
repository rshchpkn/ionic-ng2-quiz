import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Restangular } from "ng2-restangular";
import * as _ from 'lodash';
import { App } from "ionic-angular";

@Injectable()
export class QuestionService {
    public questions$ = Observable.of([]);
    public questions = [];
    public AnsweringQuestion;

    constructor(private restangular: Restangular, private app: App) {
        this.questions$ = this.restangular.all("assets/data/questions.json").customGET().map(res => res.questions).subscribe(res => this.questions = res);
    }

    getNextNotAnsweredQuestion() {
        return this.questions.map(item => {
                return  typeof item.checked === 'undefined' ? item : false
            }).filter(item => item)
    }

    nextQuestion() {
        this.AnsweringQuestion = _.find(this.questions, item => {
            return typeof item.checked === 'undefined'  ? true : false
        });
        debugger;
        if(this.AnsweringQuestion){
            return this.AnsweringQuestion
        }
        return null;
        // let previousQuestion = this.app.getActiveNav().getPrevious();
        // this.app.getActiveNav().removeView(previousQuestion);

        // if(this.AnsweringQuestion) {
        //     // this.navController.push({question: this.AnsweringQuestion})
        //
        // }
        // else {
        //     debugger;
        //     // this.navController
        // }
    }

}