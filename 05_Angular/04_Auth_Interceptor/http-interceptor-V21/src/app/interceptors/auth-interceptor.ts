import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth';
import { inject } from '@angular/core';

export function authInterceptor(
  req: HttpRequest<any>,
  next: HttpHandlerFn,
): Observable<HttpEvent<any>> {
  const token = inject(AuthService).getToken();

  if (token) {
    const cloneReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
    return next(cloneReq);
  }
  return next(req);
}
