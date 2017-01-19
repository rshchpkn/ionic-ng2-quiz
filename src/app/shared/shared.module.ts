import { NgModule } from '@angular/core';
import { NoContent } from "../pages/no-content/no-content";
import { TestQuestion } from "../pages/test-question-component/test-question";
import { IonicModule } from "ionic-angular";
import { RestangularModule } from "ng2-restangular";
import { QuestionComponent } from "../pages/questions-component/questions.component";

@NgModule({
    declarations: [
        NoContent,
        TestQuestion,
        QuestionComponent
    ],
    imports: [
        IonicModule,
        RestangularModule
    ],
    bootstrap: [],
    entryComponents: [
        NoContent,
        TestQuestion,
        QuestionComponent
    ],
})
export class SharedModule {}
