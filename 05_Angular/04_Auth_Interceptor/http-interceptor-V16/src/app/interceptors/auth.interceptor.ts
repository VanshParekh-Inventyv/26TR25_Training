import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();

    if (token) {
      const cloneReq = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next.handle(cloneReq);
    }
    return next.handle(request);
  }
}
