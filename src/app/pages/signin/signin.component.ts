import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-signin',
  imports: [FormsModule,CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  signinForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })

  constructor(
    private userService:UserService,
    private router: Router
  ) {}


  onSignIn() {
    if(this.signinForm.invalid)return 

    this.userService.signin(this.signinForm.value).subscribe((res:any)=>{
       alert(res.message)
       console.log(res)
    })
  }

  googleSignIn() {
    // this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    //   .then(() => this.router.navigate(['/dashboard']))
    //   .catch(error => alert(error.message));
  }
}
