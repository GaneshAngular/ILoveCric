import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-profile',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  isEditing = false;
  user:any
  isLoading = false;
  userService=inject(UserService)
  constructor() {
  }

  profileForm=new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      mobile:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]),
      specialization:new FormControl('',[]),
      city:new FormControl('',[]),
      country:new FormControl('',[]),
      dob:new FormControl('',[]),
      gender:new FormControl('',[])
  })

  ngOnInit(){
    this.loadProfile()
  }

  loadProfile(){
  this.userService.getProfile().subscribe((res:any)=>{
    console.log(res)
    this.user=res
  })
  }
  openEditModal() {
    this.profileForm.patchValue(this.user)
    this.isEditing = !this.isEditing;

  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type.match('image.*')) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  uploadProfileImage(){
    if(!this.selectedFile) return alert("Select profile Image")

       const formData=new FormData()
       formData.append('profile',this.selectedFile)
       this.userService.updateProfileImage(formData).subscribe((res:any)=>{
             alert(res.message)
             this.loadProfile()
             this.previewUrl=''
       })

  }

  updateProfile(){
    if(this.profileForm.invalid) return alert("Fill Valid Details..!")
       if(confirm("Are you sure?"))
        this.userService.updateProfile(this.profileForm.value).subscribe((res:any)=>{
               alert(res.message)
               this.loadProfile()
        })

  }

  onSubmit() {

  }
}
