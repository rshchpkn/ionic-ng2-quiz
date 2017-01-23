import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { QuestionService } from "./services/question.service";
import { AuthService } from "./services/auth.service";
import { AuthHttp, AuthConfig } from "angular2-jwt";
import { Http } from "@angular/http";
import { Storage } from '@ionic/storage';

let storage: Storage = new Storage();

export function getAuthHttp(http) {
    return new AuthHttp(new AuthConfig({
        globalHeaders: [{'Accept': 'application/json'}],
        tokenGetter: (() => storage.get('id_token'))
    }), http);
}

@NgModule({
    declarations: [
    ],
    imports: [
        IonicModule
    ],
    bootstrap: [],
    providers: [
        QuestionService,
        AuthService,
        {
            provide: AuthHttp,
            useFactory: getAuthHttp,
            deps: [Http]
        }
    ],
    entryComponents: [
    ],
})
export class CoreModule {}
