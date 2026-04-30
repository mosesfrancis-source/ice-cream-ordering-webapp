import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);

  email: string = '';
  password: string = '';

  loading: boolean = false;
  error: string = '';

  onLogin(): void {
    this.loading = true;
    this.error = '';

    // simulate backend for now
    setTimeout(() => {
      this.loading = false;

      if (this.email === 'admin@test.com' && this.password === '1234') {
        console.log('Login success');
      } else {
        this.error = 'Invalid email or password';
      }
    }, 1000);
  }
}
