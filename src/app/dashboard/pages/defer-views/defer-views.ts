import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Title } from '../../shared/title/title';
import { HeavyLoaderSlowComponent } from '../../shared/heavy-loaders/heavy-loader-slow';

@Component({
  selector: 'app-defer-views',
  imports: [HeavyLoaderSlowComponent, MatProgressSpinnerModule, Title],
  templateUrl: './defer-views.html',
  styles: ``,
})
export default class DeferViews {

}
