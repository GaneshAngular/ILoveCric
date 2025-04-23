import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
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
  isUpdate=false;
  team:any
  teamsService=inject(TeamsService)
    @ViewChild('player_name') player_name!:ElementRef
    @ViewChild('player_email') player_email!:ElementRef

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

  addPlayer(){
   const player={name:this.player_name.nativeElement.value,email:this.player_email.nativeElement.value}
   if(!(player.email && player.name)) return
    this.team.players.push(player)
      this.player_email.nativeElement.value=''
      this.player_name.nativeElement.value=''
  }

  removePlayer(name:string){
    console.log(name)
    this.team.players = this.team.players.filter((item: any) => {
      const itemName = item.name || item.player_id?.name;
      return itemName !== name;
    });
  }

  createTeam() {
     if(this.teamForm.invalid)return alert("Fill valid details")

      const formData = new FormData();
formData.append('name', this.teamForm.value.name||'');
formData.append('country', this.teamForm.value.country||'');
formData.append('year', this.teamForm.value.year||'');
if(this.file)
formData.append('profile', this.file); // 👈 your selected file

this.teamsService.createTeam(formData).subscribe((res: any) => {
  alert(res.message);
});

    this.closeCreateModal();
  }

  updateTeam() {
    if (!confirm("Are you sure?")) return;

    const formData = new FormData();

    // Append team fields
    for (const key in this.team) {
      const value = this.team[key];

      // If the value is an object (like players array), stringify it
      if (typeof value === 'object' && value !== null) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value);
      }
    }

    // Append file if selected
    if (this.file) {
      formData.append('logo', this.file);
    }

    // Call the service
    this.teamsService.updateTeam(formData).subscribe({

      next: (res: any) => {
        alert(res.message);
        this.showCreateModal=false
        this.isUpdate=false
      },
      error: (err) => {
        console.error('Update failed', err);
        alert('Something went wrong while updating the team.');
      }
    });
  }


  editTeam(team:any){
        console.log(team);
        this.team=team
        this.isUpdate=true
        this.showCreateModal=true
        this.teamForm.patchValue(team)
  }

  deleteTeam(id:string){
     if(confirm("Are you sure?"))
      this.teamsService.deleteTeam(id).subscribe((res:any)=>{
        alert(res.message)
      })
  }


  loadTeams(){
    this.teamsService.getTeams().subscribe((res:any)=>{
      console.log(res)
      this.teams=res
    })
  }
}
