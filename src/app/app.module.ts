import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from './pages/home/home';
// import { NoContent } from "../pages/no-content/no-content";
import { CoreModule } from "./core/core-module";
import { SharedModule } from "./shared/shared.module";
import { QuestionService } from "./core/services/question.service";
import { StartPageModule } from "./pages/start-page-component/start-page.module";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        CoreModule,
        SharedModule,
        StartPageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        QuestionService
    ]

})
export class AppModule {
}
