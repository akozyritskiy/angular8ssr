import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { ClientAppLazyComponent } from './clientapplazy.component';

const routes: Routes = [
    <Route>{
        path: '',
        component: ClientAppLazyComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class ClientAppLazyRoutingModule {
}
