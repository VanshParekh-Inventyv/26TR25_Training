import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username = 'emilys';
  password = 'emilyspass';

  token: string | null = null;
  userData: any;
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  generateToken() {
    this.errorMessage = '';
    this.authService.generateToken(this.username, this.password).subscribe({
      next: (response) => {
        this.token = response.accessToken;
        this.authService.saveToken(response.accessToken);
      },
      error: (err) => {
        this.errorMessage = 'Failed to generate token.';
        console.log('Login failed', err);
      },
    });
  }

  login() {
    this.userData = '';
    this.errorMessage = '';
    this.authService.getUserData().subscribe({
      next: (response) => {
        this.userData = {
          id: response.id,
          firstName: response.firstName,
          lastName: response.lastName,
          email: response.email,
          username: response.username,
          gender: response.gender,
          image: response.image,
        };
      },
      error: (err) => {
        this.errorMessage = 'Unauthorized! Please generate token first.';
        console.log('Fetching user failed', err);
      },
    });
  }

  logout() {
    this.authService.logout();
    this.token = null;
    this.userData = null;
    this.errorMessage = '';
  }
}
