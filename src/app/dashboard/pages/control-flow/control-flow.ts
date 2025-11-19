import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Title } from '../../shared/title/title';

type Grade = 'A' | 'B' | 'C' | 'F'

@Component({
  selector: 'app-control-flow',
  imports: [NgClass, Title],
  templateUrl: './control-flow.html',
  styles: ``,
})
export default class ControlFlow {

  protected showContent = signal<boolean>(false);
  protected grade = signal<Grade>('F');

  protected frameworks = signal<string[]>(
    [
      'Angular',
      'Vue',
      'Bootstrap',
      'Svelte',
      'Quick',
      'Material'
    ]
  );

  protected frameworks2 = signal<string[]>([]);


  /**
   * toggleContent
   */
  public toggleContent() {
    this.showContent.update(vActual => !vActual);
  }

}
