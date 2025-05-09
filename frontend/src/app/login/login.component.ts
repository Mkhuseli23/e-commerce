// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Dummy user (replace with API call logic)
  private readonly validUser = {
    email: 'admin@example.com',
    password: 'admin123'
  };

  login(email: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (email === this.validUser.email && password === this.validUser.password) {
        resolve(true);
      } else {
        reject(new Error('Invalid email or password.'));
      }
    });
  }
}
