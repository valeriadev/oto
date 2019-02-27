import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  public static token: string;

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

      const authReq = req.clone({
        headers: new HttpHeaders({
          'x-oto-token': TokenInterceptor.token || ''
        })
      });    return next.handle(authReq);
  }
}
