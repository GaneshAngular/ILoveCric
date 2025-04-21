import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-signup',
  imports: [FormsModule,CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

userService=inject(UserService)
router=inject(Router)

  signupForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),

  })
  onSignup() {
    if(this.signupForm.invalid)return
      this.userService.signup(this.signupForm.value).subscribe((res:any)=>{
           alert(res.message)
           this.router.navigate(['signin'])
      })
  }
}
