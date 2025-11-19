import { Component, inject } from '@angular/core';
import { Title } from '../../shared/title/title';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users';
import { IUser } from '../../interfaces/iusers-response';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user',
  imports: [Title, MatProgressSpinnerModule],
  templateUrl: './user.html',
  styles: ``,
})
export default class User {

private route = inject(ActivatedRoute);
public usersService = inject(UsersService);
public user: IUser | undefined;


constructor(){
  const id = this.route.snapshot.params['id'];
  this.usersService.getUserById(id).subscribe(user => {
    this.user = user
  });
}


}
