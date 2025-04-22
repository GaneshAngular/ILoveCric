import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeamsService } from '../../core/services/teams/teams.service';

@Component({
  selector: 'app-teams',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  teams:any=[]
  teamImage:any=''
  file!:File
  teamsService=inject(TeamsService)

  ngOnInit(){
    this.loadTeams()
  }
onFileSelected($event:any)
{
    this.file=$event.target.files[0]
    console.log(this.file)
    if (this.file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.teamImage= reader.result;
      };
      reader.readAsDataURL(this.file); // 👈 Convert to base64 string
    }
}
  showCreateModal = false;


  teamForm=new FormGroup({
     name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\s]{2,}$/)]),
     country:new FormControl('',[Validators.required]),
     year:new FormControl('',[Validators.required])
  })




  openCreateModal() {
    this.showCreateModal = true;
  }

  closeCreateModal() {
    this.showCreateModal = false;

  }

  createTeam() {
     if(this.teamForm.invalid)return alert("Fill valid details")

      const formData = new FormData();
formData.append('name', this.teamForm.value.name||'');
formData.append('country', this.teamForm.value.country||'');
formData.append('year', this.teamForm.value.year||'');
formData.append('profile', this.file); // 👈 your selected file

this.teamsService.createTeam(formData).subscribe((res: any) => {
  alert(res.message);
});


    this.closeCreateModal();
  }

  loadTeams(){
    this.teamsService.getTeams().subscribe((res:any)=>{
      console.log(res)
      this.teams=res
    })
  }
}
