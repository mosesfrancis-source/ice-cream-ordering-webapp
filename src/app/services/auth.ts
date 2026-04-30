import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(email: string, password: string): void {
    console.log('Sending login to Django later:', email, password);
  }

  register(name: string, email: string, password: string): void {
    console.log('Sending register to Django later:', name, email, password);
  }

  logout(): void {
    console.log('Logging out later');
  }
}
