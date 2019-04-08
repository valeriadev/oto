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
import { Router } from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  public static token: string;

  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req.headers.set("x-oto-token", TokenInterceptor.token || "");
    let handler = next.handle(req);
    // handler.toPromise().catch((err: any) => {
    //   if (err instanceof HttpErrorResponse) {
    //     if (err.status === 401) {
    //       this.router.navigateByUrl("user/login");
    //     }
    //   }
    // });
    return handler;
    // return req.
    // const authReq = req.clone({
    //   headers: new HttpHeaders({
    //     "x-oto-token": TokenInterceptor.token || ''
    //   })
    // });
    // const handler = next.handle(authReq);
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
