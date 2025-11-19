import { Component } from '@angular/core';
import { Title } from '../../shared/title/title';
import { ICountry } from '../../interfaces/icountry';

@Component({
  selector: 'app-register',
  imports: [Title],
  templateUrl: './register.html',
  styles: ``,
})
export default class Register {

  public countries: ICountry[]  = [
    {id: 'Es', name:'España'},
    {id: 'Mx', name:'México'},
  ]

}
