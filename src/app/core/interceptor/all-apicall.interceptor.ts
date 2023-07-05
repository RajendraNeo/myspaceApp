import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AllApicallInterceptor implements HttpInterceptor {

  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request and add headers
    const modifiedRequest = request.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });

    // Pass the modified request to the next handler
    return next.handle(modifiedRequest);
  }
}
