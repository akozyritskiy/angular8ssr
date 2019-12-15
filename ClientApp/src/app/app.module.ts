import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientAppComponent } from './clientapp/clientapp.component';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({ appId: 'app' }),
        BrowserTransferStateModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        PaginationModule.forRoot(),
        BsDropdownModule.forRoot(),
    ],
    providers: [],
    declarations: [
        AppComponent,
        ClientAppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
