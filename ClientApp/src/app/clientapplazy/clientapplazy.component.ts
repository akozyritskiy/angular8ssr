import { Component, Inject, Optional } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const SOME_DATA = makeStateKey<string>('someData');

@Component({
    templateUrl: './clientapplazy.component.html',
})
export class ClientAppLazyComponent {
}
