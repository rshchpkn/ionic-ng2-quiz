import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Restangular } from "ng2-restangular";


@Injectable()
export class QuestionService {
    public questions$ = Observable.of([]);
    public questions = [];

    constructor(private restangular: Restangular) {
        this.questions$ = this.restangular.all("assets/data/questions.json").customGET().map(res => res.questions).do(res => this.questions = res);
    }

    getNextNotAnsweredQuestion() {
        return this.questions.map(item => {
                return  typeof item.checked === 'undefined' ? item : false
            }).filter(item => item)
    }

}