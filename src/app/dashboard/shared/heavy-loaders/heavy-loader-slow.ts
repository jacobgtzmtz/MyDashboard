import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
    selector: 'heavy-loader-slow',
    template: `
    <div [ngClass]="color()" style="height: 600px;">
        Contenido de la sección: {{ section() }}
    </div>
    `,
    imports: [NgClass]
})

export class HeavyLoaderSlowComponent {
    section = input.required<string>();
    color = input.required<string>();

    constructor() {
        const start = Date.now();

        while ( Date.now() - start < 3000){
        }
        console.log('Cargado');
     }

}