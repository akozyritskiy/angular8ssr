import { Component, Inject, Optional } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const SOME_DATA = makeStateKey<string>('someData');

@Component({
    templateUrl: './clientapp.component.html',
})
export class ClientAppComponent {
    public someData: any;

    constructor(
        @Optional() @Inject('someData') public someDataInj: string,
        private state: TransferState
    ) {
        this.updateRef();
        console.log('someData client side constructor:', this.someData);
    }

    public ngOnInit() {
        this.updateRef();
        console.log('someData client side ngOnInit:', this.someData);
    }

    private updateRef() {
        this.someData = this.state.get(SOME_DATA, null);
        this.someData = this.someData ? this.someData : this.someDataInj;
    }
}
