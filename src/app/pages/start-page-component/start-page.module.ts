import { NgModule } from '@angular/core';
import { StartPageComponent } from "./start-page.component";
import { IonicModule } from "ionic-angular";

@NgModule({
    declarations: [
        StartPageComponent
    ],
    imports: [
        IonicModule
    ],
    bootstrap: [],
    entryComponents: [
        StartPageComponent
    ],
    // exports: [StartPageComponent]
})
export class StartPageModule {}
