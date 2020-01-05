import { NgModule } from '@angular/core';
import { ClientAppLazyRoutingModule } from './clientapplazy.routes';

import { ClientAppLazyComponent } from './clientapplazy.component';

@NgModule({
    imports: [
        ClientAppLazyRoutingModule
    ],
    declarations: [
        ClientAppLazyComponent
    ],
    entryComponents: [
        ClientAppLazyComponent
    ]
})
export class ClientAppLazyAppModule {
}
