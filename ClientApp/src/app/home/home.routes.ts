import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { HomeComponent } from './home.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
    <Route>{
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'child',
                pathMatch: 'full',
            },
            {
                path: 'child',
                component: ChildComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class HomeRoutingModule {
}
