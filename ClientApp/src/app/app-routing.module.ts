import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientAppComponent } from './clientapp/clientapp.component';

const defaultRouteUrl = '/home';

const routes: Routes = [
    <Route>{
        path: '',
        redirectTo: defaultRouteUrl,
        pathMatch: 'full'
    },
    // <Route>{
    //     path: 'home',
    //     component: AppComponent,
    //     children: [
    //         {
    //             component: ClientAppComponent,
    //             path: 'clientapp'
    //         },
    //         {
    //             path: 'clientapplazy',
    //             loadChildren: () => import('./clientapplazy/clientapplazy.module').then(mod => mod.ClientAppLazyAppModule)
    //         },
    //     ]
    // },
    <Route>{
        path: 'home',
        loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
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
