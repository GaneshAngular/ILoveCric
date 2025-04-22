import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../core/services/user/user.service';
import { jwtDecode } from 'jwt-decode';
import environment from '../../../../environments/environment';
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

  ngOnInit(){
    this.initializeGoogleSignIn()

  }

  initializeGoogleSignIn() {
    //@ts-ignore
    google.accounts.id.initialize({
      client_id:environment.google_client_id,
      callback: this.handleCredentialResponse.bind(this),
    });
    //@ts-ignore
    google.accounts.id.renderButton(
      document.getElementById('google-btn'),
      { theme: 'outline', size: 'large' }
    );
  }

  handleCredentialResponse(response: any) {

    const { credential: token } = response;
    const { name, email, picture }: any = jwtDecode(token)

    this.userService.googleSignIn({name,email,picture}).subscribe((res:any)=>{
         alert(res.message)
         localStorage.setItem('token',res.token)
         this.router.navigate(['/cricket'])
    })

  }
  onSignIn() {
    if(this.signinForm.invalid)return

    this.userService.signin(this.signinForm.value).subscribe((res:any)=>{
       alert(res.message)
      const token:string=res.token
      localStorage.setItem('token',token)
      this.router.navigate(['/cricket'])
    })
  }

  googleSignIn() {

  }
}
