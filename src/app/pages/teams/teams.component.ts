import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teams',
  imports: [CommonModule,FormsModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  teamType: 'all' | 'international' | 'domestic' = 'all';
  showCreateModal = false;
  newTeam:any = {
    type: 'international'
  };

  teams: any[] = [
    {
      id: '1',
      name: 'India',
      country: 'India',
      type: 'international',
      logo: 'https://flagcdn.com/48x36/in.png',
      matches: 1024,
      wins: 650,
      losses: 320,
      captain: 'Rohit Sharma',
      coach: 'Rahul Dravid',
      founded: 1932
    },
    {
      id: '2',
      name: 'Australia',
      country: 'Australia',
      type: 'international',
      logo: 'https://flagcdn.com/48x36/au.png',
      matches: 980,
      wins: 620,
      losses: 300,
      captain: 'Pat Cummins',
      coach: 'Andrew McDonald',
      founded: 1905
    },
    {
      id: '3',
      name: 'Mumbai Indians',
      country: 'India',
      type: 'domestic',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png',
      matches: 231,
      wins: 129,
      losses: 98,
      captain: 'Hardik Pandya',
      coach: 'Mark Boucher',
      founded: 2008
    },
    {
      id: '4',
      name: 'England',
      country: 'England',
      type: 'international',
      logo: 'https://flagcdn.com/48x36/gb-eng.png',
      matches: 950,
      wins: 500,
      losses: 380,
      captain: 'Jos Buttler',
      coach: 'Matthew Mott',
      founded: 1877
    },
    {
      id: '5',
      name: 'Chennai Super Kings',
      country: 'India',
      type: 'domestic',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png',
      matches: 225,
      wins: 131,
      losses: 91,
      captain: 'MS Dhoni',
      coach: 'Stephen Fleming',
      founded: 2008
    },
    {
      id: '6',
      name: 'New Zealand',
      country: 'New Zealand',
      type: 'international',
      logo: 'https://flagcdn.com/48x36/nz.png',
      matches: 800,
      wins: 420,
      losses: 330,
      captain: 'Kane Williamson',
      coach: 'Gary Stead',
      founded: 1934
    }
  ];

  get filteredTeams() {
    if (this.teamType === 'all') {
      return this.teams;
    }
    return this.teams.filter(team => team.type === this.teamType);
  }

  openCreateModal() {
    this.showCreateModal = true;
  }

  closeCreateModal() {
    this.showCreateModal = false;
    this.newTeam = { type: 'international' }; // Reset form
  }

  createTeam() {
    // Generate ID and add to teams array



    this.closeCreateModal();
  }
}
