import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";

import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  public static token: string;

  constructor(private router: Router) {

  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: new HttpHeaders({
        "x-oto-token": TokenInterceptor.token || ''
      })
    });
    const handler = next.handle(authReq);
    handler.subscribe(
      (data: HttpEvent<any>) => {},
      err => {
        if (err instanceof HttpErrorResponse) {
          if ((err as HttpErrorResponse).status === 401) {
            this.router.navigateByUrl('user/login');
          }
        }
      }
    );
    return handler;
  }
}
