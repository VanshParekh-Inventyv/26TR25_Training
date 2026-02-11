import { Component, signal } from '@angular/core';
import { AuthService } from './services/auth';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  imports: [FormsModule, MatButtonModule, MatCardModule, MatInputModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  username = 'emilys';
  password = 'emilyspass';

  token = signal<string | null>(null);
  userData = signal<any | null>(null);
  errorMessage = signal<string>('');

  constructor(private authService: AuthService) {}

  generateToken() {
    this.errorMessage.set('');
    this.authService.generateToken(this.username, this.password).subscribe({
      next: (response) => {
        this.token.set(response.accessToken);
        this.authService.saveToken(response.accessToken);
      },
      error: (err) => {
        this.errorMessage.set('Failed to generate token.');
        console.log('Login failed', err);
      },
    });
  }

  login() {
    this.userData.set('');
    this.errorMessage.set('');
    this.authService.getUserData().subscribe({
      next: (response) => {
        this.userData.set({
          id: response.id,
          firstName: response.firstName,
          lastName: response.lastName,
          email: response.email,
          username: response.username,
          gender: response.gender,
          image: response.image,
        });
      },
      error: (err) => {
        this.errorMessage.set('Unauthorized! Please generate token first.');
        console.log('Fetching user failed', err);
      },
    });
  }

  logout() {
    this.authService.logout();
    this.token.set(null);
    this.userData.set(null);
    this.errorMessage.set('');
  }
}
