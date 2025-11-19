import { Component } from '@angular/core';
import { Title } from '../../shared/title/title';
import { HeavyLoaderFast } from '../../shared/heavy-loaders/heavy-loader-fast';


@Component({
  selector: 'app-defer-options',
  imports: [HeavyLoaderFast, Title],
  templateUrl: './defer-options.html',
  styles: ``,
})
export default class DeferOptions {

}
