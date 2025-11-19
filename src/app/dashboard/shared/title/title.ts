import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  template: ` <h2>{{ title() }}</h2> `,
  styles: ``,
})
export class Title {
  public title = input.required<string>();
}
