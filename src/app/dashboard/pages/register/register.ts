import { Component } from '@angular/core';
import { Title } from '../../shared/title/title';
import { ICountry } from '../../interfaces/icountry';
import { FormsModule, NgForm } from '@angular/forms';
import { IRegistro } from '../../interfaces/iregistro';

@Component({
  selector: 'app-register',
  imports: [Title, FormsModule],
  templateUrl: './register.html',
  styles: ``,
})
export default class Register {

  public user: IRegistro = {
    userName: '',
    password: '',
    email: '',
    country: '',
    agree: false 
  }

  public countries: ICountry[]  = [
    {id: 'Es', name:'España'},
    {id: 'Mx', name:'México'},
  ]

  /**
   * onSubmit
   */
  public onSubmit(form: NgForm) {
    console.log(form)
    if(form.valid){
      //send to database
      console.log('Form sent: ', this.user)
    } else {
      console.log('Form is not valid')
    }
  }

}
