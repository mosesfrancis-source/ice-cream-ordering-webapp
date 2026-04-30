import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  login(email: string, password: string) {
    console.log('Send login request to Django later', email, password);
  }

  register(name: string, email: string, password: string) {
    console.log('Send register request to Django later', name, email, password);
  }

  logout() {
    console.log('Logout later');
  }
}
