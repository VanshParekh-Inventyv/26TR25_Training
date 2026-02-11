import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://dummyjson.com/auth';

  constructor(private http: HttpClient) {}

  generateToken(username: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/login`, {
      username,
      password,
    });
  }

  getUserData(): Observable<any> {
    return this.http.get(`${this.url}/me`);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
