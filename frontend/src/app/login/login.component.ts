import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  private auth = inject(Auth);
  private router = inject(Router);

  login() {
    this.errorMessage = '';
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => {
        this.router.navigate(['/admin']);
      })
      .catch(error => {
        this.errorMessage = error.message;
      });
  }
}
