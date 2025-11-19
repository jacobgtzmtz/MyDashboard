import { HttpInterceptorFn } from '@angular/common/http';

//Agregar withInterceptors([usersInterceptor]) en el provideHttpClient dentro del  app.config

export const usersInterceptor: HttpInterceptorFn = (req, next) => {

  if(!req.headers.has('x-api-key')){
    const modifiedReq = req.clone({
      setHeaders: {
        'x-api-key': 'reqres-free-v1'
      }
    }
    );
    return next(modifiedReq)
  }

  return next(req);
};
