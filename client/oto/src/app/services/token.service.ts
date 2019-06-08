import { Injectable } from '@angular/core';
import { map, catchError, concatMap } from 'rxjs/operators';

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  public static token: string;

  constructor(private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const obj = {};
    if (TokenInterceptor.token) {
      obj['Authorization'] =`${TokenInterceptor.token}`;
    }
    const authReq = req.clone({
      headers: new HttpHeaders(obj)
    });

    return next.handle(authReq).pipe(
      catchError((err: any, caught: Observable<any>) => {
        if (err.status === 401) {
          setTimeout(() => {
            this.router.navigateByUrl('/user/login');

          }, 200);
        }
        return throwError(err);
      })
    );
    // handler.toPromise().catch(
    //   err => {
    //     if (err instanceof HttpErrorResponse) {
    //       if ((err as HttpErrorResponse).status === 401) {
    //         this.router.navigateByUrl('user/login');
    //       }
    //     }
    //   }
    // );
    // return handler;
  }
}
