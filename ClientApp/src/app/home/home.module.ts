import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home.routes';
import { HomeComponent } from './home.component';
import { ChildComponent } from './child/child.component';

@NgModule({
    imports: [
        RouterModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        ChildComponent
    ],
    // entryComponents: [
    //     HomeComponent
    // ]
})
export class HomeModule {
}
