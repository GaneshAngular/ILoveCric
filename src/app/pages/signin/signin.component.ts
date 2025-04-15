import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  email: string = '';
  password: string = '';

  constructor(

    private router: Router
  ) {}

  onSubmit() {
    // this.auth.signInWithEmailAndPassword(this.email, this.password)
    //   .then(() => this.router.navigate(['/dashboard']))
    //   .catch(error => alert(error.message));
  }

  googleSignIn() {
    // this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    //   .then(() => this.router.navigate(['/dashboard']))
    //   .catch(error => alert(error.message));
  }
}
