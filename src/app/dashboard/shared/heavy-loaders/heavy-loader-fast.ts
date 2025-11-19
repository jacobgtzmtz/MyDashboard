import { Component } from '@angular/core';

@Component({
    selector: 'heavy-loader-fast',
    template: `
     <ng-content ></ng-content>
    `
})

export class HeavyLoaderFast  {
    constructor() {

        console.log('Heavy loader fast creado');
     }


}