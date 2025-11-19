import { Component, inject } from '@angular/core';
import { Title } from '../../shared/title/title';
import { UsersService } from '../../services/users';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-users',
  imports: [Title, MatProgressSpinnerModule, RouterLink],
  templateUrl: './users.html',
  styles: ``,
})
export default class Users {

 public usersService = inject(UsersService);

/*  
  myObservable:  Subscription;

  constructor(private $usersService: UsersService){
    this.myObservable = this.$usersService.getUsers().subscribe( usersList => {
      console.log(usersList.data);
    } )
  }

  ngOnInit(){
    this.myObservable = this.$usersService.getUsers().subscribe( usersList => {
      console.log(usersList.data);
    } )
  }

  ngOnDestroy(){
    this.myObservable.unsubscribe()
  } 
 */
}
