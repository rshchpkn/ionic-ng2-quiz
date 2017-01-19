import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { QuestionService } from "./services/question.service";

@NgModule({
    declarations: [
    ],
    imports: [
        IonicModule
    ],
    bootstrap: [],
    providers: [
        QuestionService
    ],
    entryComponents: [
    ],
})
export class CoreModule {}
