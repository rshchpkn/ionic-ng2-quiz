import { NgModule } from '@angular/core';
import { NoContent } from "../pages/no-content/no-content";
import { TestQuestion } from "../pages/test-question-component/test-question";
import { IonicModule } from "ionic-angular";
import { RestangularModule } from "ng2-restangular";
import { QuestionComponent } from "../pages/questions-component/questions.component";
// import { StartPageModule } from "../pages/start-page-component/start-page.module";

@NgModule({
    declarations: [
        NoContent,
        TestQuestion,
        QuestionComponent
    ],
    imports: [
        IonicModule,
        RestangularModule,
        // StartPageModule
    ],
    bootstrap: [],
    entryComponents: [
        NoContent,
        TestQuestion,
        QuestionComponent
    ],
})
export class SharedModule {}
