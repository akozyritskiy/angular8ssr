import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientAppComponent } from './clientapp/clientapp.component';

const defaultRouteUrl = '/home/clientapp';

const routes: Routes = [
    <Route>{
        path: '',
        redirectTo: defaultRouteUrl,
        pathMatch: 'full'
    },
    <Route>{
        path: 'home',
        component: AppComponent,
        children: [
            {
                component: ClientAppComponent,
                path: 'clientapp'
            }
        ]
    },
    <Route>{
        path: '**',
        redirectTo: defaultRouteUrl
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
