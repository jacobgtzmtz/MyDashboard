import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { IUser, IUserResponse, IUsersResponse } from '../interfaces/iusers-response';
import { IState } from '../interfaces/istate';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  private usersEndpoint = environment.baseURL + 'users';

  //inyección de dependencias recomendada en últimas versiones.

  //Para que funcione el httpclient hay que agregar: provideHttpClient() en el app.config.ts
  private http = inject(HttpClient);
  private state = signal<IState>({
    users: [],
    loading: true
  });

  public users = computed( () => this.state().users);
  public loading = computed( () => this.state().loading );

  constructor(){
    this.getUsers();
  }

/*
  Inyección de dependencias tradicional
*/
  //constructor(private http: HttpClient){}

  /**
   * getUsers
   */
  private getUsers() {
  
    this.http.get<IUsersResponse>(this.usersEndpoint)
    .pipe(
       catchError(this.hendleError)
    )
    .subscribe(usuarios =>{
    this.state.set({
      users: usuarios.data,
      loading: false
    })
   });
  }


  /*
    getUserById
   */
  public getUserById(id: number): Observable<IUser> {
    this.state.update( current => ({...current, loading: true})    )

    return this.http.get<IUserResponse>(`${this.usersEndpoint}/${id}`)
    .pipe(
      map( (response : any) => response.data ),
      tap({finalize: () => this.state.update( current => ({...current, loading: false})    ) }),
      /* catchError( err => {
        return this.hendleError(err);
      } ) */
     catchError(this.hendleError)
    )
    
  }


/**
 * hendleError
 */
public hendleError(error: HttpErrorResponse) {
  let errorMessage = 'Unkown error';
   //Error es del lado del cliente
  if(error.error  instanceof ErrorEvent){
    errorMessage = `Error en el cliente: ${error.error.message}`;
  } else {
    errorMessage = `Error en el backend, Error Code: ${error.status} Message: ${error.message}`
  }

  console.log(errorMessage);
  return throwError(() => errorMessage);
  
}


}
