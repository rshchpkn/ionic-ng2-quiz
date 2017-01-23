import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Restangular } from "ng2-restangular";
import * as _ from 'lodash';
import { Platform } from "ionic-angular";

@Injectable()
export class QuestionService {
    public questions$ = Observable.of([]);
    public updateQuestions$ = new BehaviorSubject([]);
    public questions = [];
    public answeringQuestion;
    public url;

    constructor(private restangular: Restangular, private plt: Platform) {
        this.url = this.plt.is('android') ? "android_asset/www/" : "";

        this.getQuestions();
        this.questions$ = this.updateQuestions$;
        this.questions$.subscribe(res => {
            this.questions = res
        });

    }

    getQuestions() {
        // let questions = this.restangular.all("assets/data/questions.json").customGET().map(res => res.questions)
        // this.updateQuestions$ = this.restangular.all("assets/data/questions.json").customGET().map(res => res.questions);

        this.restangular.all(this.url + "data/questions.json").customGET().map(res => res.questions).subscribe(res => {
            this.updateQuestions$.next(res)
        })
    }

    getNextNotAnsweredQuestion() {
        return this.questions.map(item => {
            return typeof item.checked === 'undefined' ? item : false
        }).filter(item => item)
    }

    nextQuestion() {
        this.answeringQuestion = this.getNotAnsweredQuestion();

        // this.answeringQuestion = notAnsweredQuestion == this.answeringQuestion ?
        if (this.answeringQuestion) {
            return this.answeringQuestion
        }
        return null;
    }

    startNewTest() {
        this.getQuestions()
    }

    getNotAnsweredQuestion() {
        return _.find(this.questions, item => {
            return typeof item.answeredCorrect === 'undefined' ? true : false
        });
    }

    answerQuestion(answerIndex) {
        if (answerIndex >= 0) {
            this.answeringQuestion.answeredCorrect = this.answeringQuestion.answers[answerIndex].correct ? true : false;
        }
    }



}